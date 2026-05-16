'use client';

import { useState, useTransition } from 'react';

import { exportProjectJsonAction } from '../../app/(protected)/project/[id]/actions';

type ExportProjectJsonButtonProps = {
  projectId: string;
  projectName: string;
};

function safeFileName(name: string): string {
  const normalized = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9а-яіїєґ_-]+/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return normalized || 'structureflow-project';
}

export function ExportProjectJsonButton({
  projectId,
  projectName,
}: ExportProjectJsonButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleExport = () => {
    setError(null);

    startTransition(async () => {
      try {
        const { snapshot } = await exportProjectJsonAction({ projectId });
        const json = JSON.stringify(snapshot, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${safeFileName(projectName)}.structureflow.json`;
        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unable to export project.');
      }
    });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleExport}
        disabled={isPending}
        style={{
          border: '1px solid #cbd5e1',
          background: '#fff',
          color: '#0f172a',
          borderRadius: 8,
          padding: '7px 10px',
          fontSize: 12,
          fontWeight: 600,
          cursor: isPending ? 'wait' : 'pointer',
          opacity: isPending ? 0.7 : 1,
        }}
      >
        {isPending ? 'Exporting…' : 'Export JSON'}
      </button>

      {error ? (
        <p style={{ margin: '6px 0 0', color: '#b91c1c', fontSize: 12 }}>
          {error}
        </p>
      ) : null}
    </div>
  );
}