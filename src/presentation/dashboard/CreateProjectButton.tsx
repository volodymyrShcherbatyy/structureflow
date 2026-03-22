'use client';

import type { CSSProperties } from 'react';
import { useState, useTransition } from 'react';

import { createProjectAction } from '../../app/(protected)/dashboard/actions';

const overlayStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(15, 23, 42, 0.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 16,
  zIndex: 1000,
};

const dialogStyle: CSSProperties = {
  width: '100%',
  maxWidth: 460,
  borderRadius: 16,
  background: '#fff',
  padding: 24,
  boxShadow: '0 24px 60px rgba(15, 23, 42, 0.18)',
};

export function CreateProjectButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const close = () => {
    if (isPending) {
      return;
    }

    setError(null);
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        style={{
          border: 'none',
          borderRadius: 10,
          padding: '10px 16px',
          background: '#2563eb',
          color: '#fff',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        + Create project
      </button>

      {isOpen ? (
        <div style={overlayStyle} role="presentation" onClick={close}>
          <div style={dialogStyle} role="dialog" aria-modal="true" aria-labelledby="create-project-title" onClick={(event) => event.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
              <h2 id="create-project-title" style={{ margin: 0, fontSize: 22, color: '#0f172a' }}>
                Create project
              </h2>
              <button type="button" onClick={close} disabled={isPending} style={{ border: 'none', background: 'transparent', fontSize: 22, cursor: 'pointer' }}>
                ×
              </button>
            </div>

            <p style={{ color: '#64748b', marginBottom: 20 }}>Start a new structure and jump directly into the canvas.</p>

            <form
              action={(formData) => {
                setError(null);
                startTransition(async () => {
                  const result = await createProjectAction(formData);
                  if (result?.error) {
                    setError(result.error);
                  }
                });
              }}
            >
              <label style={{ display: 'grid', gap: 8 }}>
                <span style={{ color: '#0f172a', fontWeight: 600 }}>Project name</span>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Untitled project"
                  disabled={isPending}
                  autoFocus
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    border: '1px solid #cbd5e1',
                    padding: '10px 12px',
                    fontSize: 15,
                  }}
                />
              </label>

              {error ? <p style={{ color: '#dc2626', margin: '12px 0 0' }}>{error}</p> : null}

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
                <button
                  type="button"
                  onClick={close}
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
                  type="submit"
                  disabled={isPending}
                  style={{
                    border: 'none',
                    borderRadius: 10,
                    padding: '10px 16px',
                    background: isPending ? '#93c5fd' : '#2563eb',
                    color: '#fff',
                    fontWeight: 600,
                    cursor: isPending ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isPending ? 'Creating…' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
