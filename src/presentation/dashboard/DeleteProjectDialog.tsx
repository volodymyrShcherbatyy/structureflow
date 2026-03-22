'use client';

import { useState, useTransition } from 'react';

import { deleteProjectAction } from '../../app/(protected)/dashboard/actions';

type DeleteProjectDialogProps = {
  open: boolean;
  projectId: string;
  projectName: string;
  onClose: () => void;
  onDeleted?: () => void;
};

export function DeleteProjectDialog({ open, projectId, projectName, onClose, onDeleted }: DeleteProjectDialogProps) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  if (!open) {
    return null;
  }

  return (
    <div
      role="presentation"
      onClick={() => {
        if (!isPending) {
          setError(null);
          onClose();
        }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        zIndex: 1100,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-project-title"
        onClick={(event) => event.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 420,
          borderRadius: 16,
          background: '#fff',
          padding: 24,
          boxShadow: '0 24px 60px rgba(15, 23, 42, 0.18)',
        }}
      >
        <h2 id="delete-project-title" style={{ margin: 0, color: '#0f172a', fontSize: 22 }}>
          Delete project?
        </h2>
        <p style={{ margin: '12px 0 0', color: '#475569', lineHeight: 1.6 }}>
          This action permanently deletes <strong>{projectName}</strong> and its related canvas data.
        </p>

        {error ? <p style={{ color: '#dc2626', margin: '12px 0 0' }}>{error}</p> : null}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
          <button
            type="button"
            onClick={onClose}
            disabled={isPending}
            style={{
              borderRadius: 10,
              border: '1px solid #cbd5e1',
              background: '#fff',
              padding: '10px 16px',
              cursor: isPending ? 'not-allowed' : 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              setError(null);
              startTransition(async () => {
                const result = await deleteProjectAction(projectId);
                if (result.error) {
                  setError(result.error);
                  return;
                }

                onDeleted?.();
                onClose();
              });
            }}
            disabled={isPending}
            style={{
              border: 'none',
              borderRadius: 10,
              padding: '10px 16px',
              background: isPending ? '#fca5a5' : '#dc2626',
              color: '#fff',
              fontWeight: 600,
              cursor: isPending ? 'not-allowed' : 'pointer',
            }}
          >
            {isPending ? 'Deleting…' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
