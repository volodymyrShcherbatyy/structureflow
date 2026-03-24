'use client';

import { useMemo } from 'react';

import { useCanvasStore } from '../stores/canvasStore';

export function SaveStatusIndicator() {
  const isSaving = useCanvasStore((state) => state.isSaving);
  const pendingChanges = useCanvasStore((state) => state.pendingChanges);
  const lastSavedAt = useCanvasStore((state) => state.lastSavedAt);

  const label = useMemo(() => {
    if (isSaving) {
      return 'Saving...';
    }

    if (pendingChanges.length > 0) {
      return 'Unsaved changes';
    }

    if (lastSavedAt) {
      return 'Saved ✓';
    }

    return 'No changes yet';
  }, [isSaving, lastSavedAt, pendingChanges.length]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 16,
        left: 16,
        zIndex: 30,
        border: '1px solid #e5e7eb',
        borderRadius: 999,
        padding: '6px 10px',
        background: '#fff',
        fontSize: 12,
        color: '#374151',
      }}
    >
      {label}
    </div>
  );
}
