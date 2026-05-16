'use client';

import { ChangeEvent, useRef, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { importProjectJsonAction } from '../../app/(protected)/dashboard/actions';
import { StructureFlowProjectJsonV1 } from '../../core/application/use-cases/project/ProjectJsonSnapshot';

export function ImportProjectJsonButton() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setError(null);
    inputRef.current?.click();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    event.target.value = '';

    if (!file) {
      return;
    }

    if (!file.name.toLowerCase().endsWith('.json')) {
      setError('Please select a JSON file.');
      return;
    }

    let snapshot: StructureFlowProjectJsonV1;

    try {
      const text = await file.text();
      snapshot = JSON.parse(text) as StructureFlowProjectJsonV1;
    } catch {
      setError('Unable to read this JSON file.');
      return;
    }

    startTransition(async () => {
      try {
        const result = await importProjectJsonAction(snapshot);
        router.push(`/project/${result.projectId}`);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unable to import project.');
      }
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        ref={inputRef}
        type="file"
        accept="application/json,.json"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      <button
        type="button"
        onClick={handleClick}
        disabled={isPending}
        style={{
          border: '1px solid #cbd5e1',
          background: '#fff',
          color: '#0f172a',
          borderRadius: 10,
          padding: '9px 14px',
          fontWeight: 600,
          cursor: isPending ? 'wait' : 'pointer',
          opacity: isPending ? 0.7 : 1,
        }}
      >
        {isPending ? 'Importing…' : 'Import JSON'}
      </button>

      {error ? (
        <p
          style={{
            position: 'absolute',
            right: 0,
            top: '100%',
            margin: '6px 0 0',
            width: 260,
            color: '#b91c1c',
            fontSize: 12,
            textAlign: 'right',
          }}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}