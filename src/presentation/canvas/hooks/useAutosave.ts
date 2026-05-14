'use client';

import { useEffect, useRef } from 'react';

import {
  connectNodesAction,
  deleteEdgeAction,
  deleteNodeAction,
  moveNodeAction,
  movePortAction,
  movePortExternalHandleAction,
  renameNodeAction,
  deleteFlowchartElementAction,
  moveFlowchartElementAction,
  renameFlowchartElementAction,
  resizeFlowchartElementAction,
  connectFlowchartElementsAction,
  deleteFlowchartConnectionAction,
  relabelFlowchartConnectionAction,
} from '../../../app/(protected)/project/[id]/actions';
import { PendingChange, useCanvasStore } from '../../stores/canvasStore';
import { useScopeStore } from '../../stores/scopeStore';

const DEBOUNCE_MS = 1000;

async function processChange(change: PendingChange, projectId: string) {
  if (change.type === 'move') {
    await moveNodeAction({ projectId, nodeId: change.nodeId, x: change.x, y: change.y });
    return;
  }

  if (change.type === 'move-port') {
    await movePortAction({ projectId, portId: change.portId, x: change.x, y: change.y });
    return;
  }

  if (change.type === 'move-external-handle') {
    await movePortExternalHandleAction({
      projectId,
      portId: change.portId,
      offset: change.offset,
    });
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

  if (change.type === 'move-flowchart-element') {
    await moveFlowchartElementAction({
      projectId,
      elementId: change.elementId,
      x: change.x,
      y: change.y,
    });
    return;
  }

  if (change.type === 'rename-flowchart-element') {
    await renameFlowchartElementAction({
      projectId,
      elementId: change.elementId,
      label: change.label,
    });
    return;
  }

  if (change.type === 'resize-flowchart-element') {
    await resizeFlowchartElementAction({
      projectId,
      elementId: change.elementId,
      width: change.width,
      height: change.height,
    });
    return;
  }

  if (change.type === 'delete-flowchart-element') {
    await deleteFlowchartElementAction({
      projectId,
      elementId: change.elementId,
    });
    return;
  }

  if (change.type === 'connect-flowchart-connection') {
    const { connection } = await connectFlowchartElementsAction({
      projectId,
      source: change.source,
      target: change.target,
      type: change.connectionType,
      label: change.label,
      scopeId: change.scopeId,
    });

    useCanvasStore
      .getState()
      .replaceFlowchartConnectionId(change.tempConnectionId, connection.id);

    return;
  }

  if (change.type === 'relabel-flowchart-connection') {
    await relabelFlowchartConnectionAction({
      projectId,
      connectionId: change.connectionId,
      label: change.label,
    });

    return;
  }

  if (change.type === 'delete-flowchart-connection') {
    await deleteFlowchartConnectionAction({
      projectId,
      connectionId: change.connectionId,
    });

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
