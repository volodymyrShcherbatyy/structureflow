'use client';

import { useEffect, useRef } from 'react';

import {
  connectNodesAction,
  deleteEdgeAction,
  deleteNodeAction,
  moveNodeAction,
  renameNodeAction,
} from '../../../app/(protected)/project/[id]/actions';
import { PendingChange, useCanvasStore } from '../../stores/canvasStore';
import { useScopeStore } from '../../stores/scopeStore';

const DEBOUNCE_MS = 1000;

async function processChange(change: PendingChange, projectId: string) {
  if (change.type === 'move') {
    await moveNodeAction({ projectId, nodeId: change.nodeId, x: change.x, y: change.y });
    return;
  }

  if (change.type === 'rename') {
    await renameNodeAction({ projectId, nodeId: change.nodeId, label: change.label });
    return;
  }

  if (change.type === 'delete-node') {
    await deleteNodeAction({ projectId, nodeId: change.nodeId });
    return;
  }

  if (change.type === 'connect-edge') {
    const { edge } = await connectNodesAction({
      projectId,
      sourceId: change.sourceId,
      targetId: change.targetId,
      type: change.edgeType,
      label: change.label,
      sourceHandle: change.sourceHandle ?? undefined,
      targetHandle: change.targetHandle ?? undefined,
    });

    useCanvasStore.getState().replaceEdgeId(change.tempEdgeId, edge.id);
    return;
  }

  await deleteEdgeAction({ projectId, edgeId: change.edgeId });
}

export function useAutosave() {
  const projectId = useScopeStore((state) => state.projectId);
  const pendingChanges = useCanvasStore((state) => state.pendingChanges);
  const isSaving = useCanvasStore((state) => state.isSaving);
  const setSaving = useCanvasStore((state) => state.setSaving);
  const clearPendingChanges = useCanvasStore((state) => state.clearPendingChanges);
  const addPendingChange = useCanvasStore((state) => state.addPendingChange);
  const markSaved = useCanvasStore((state) => state.markSaved);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!projectId || pendingChanges.length === 0 || isSaving) {
      return;
    }

    timerRef.current = window.setTimeout(async () => {
      const snapshot = [...useCanvasStore.getState().pendingChanges];

      if (snapshot.length === 0) {
        return;
      }

      setSaving(true);
      clearPendingChanges();

      try {
        for (const change of snapshot) {
          await processChange(change, projectId);
        }

        markSaved();
      } catch (error) {
        snapshot.forEach((change) => addPendingChange(change));
        setSaving(false);
        console.error('Autosave failed', error);
      }
    }, DEBOUNCE_MS);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [addPendingChange, clearPendingChanges, isSaving, markSaved, pendingChanges, projectId, setSaving]);
}
