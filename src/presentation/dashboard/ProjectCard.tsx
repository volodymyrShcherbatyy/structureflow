'use client';

import Link from 'next/link';
import type { CSSProperties, KeyboardEvent } from 'react';
import { useMemo, useState, useTransition } from 'react';

import type { DashboardProjectDto } from './types';
import { renameProjectAction } from '../../app/(protected)/dashboard/actions';
import { DeleteProjectDialog } from './DeleteProjectDialog';

type ProjectCardProps = {
  project: DashboardProjectDto;
};

function formatUpdatedAt(value: string) {
  return new Intl.DateTimeFormat('uk-UA', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [displayName, setDisplayName] = useState(project.name);
  const [draftName, setDraftName] = useState(project.name);
  const [isEditing, setIsEditing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const formattedUpdatedAt = useMemo(() => formatUpdatedAt(project.updatedAt), [project.updatedAt]);

  const startEditing = () => {
    setDraftName(displayName);
    setError(null);
    setIsMenuOpen(false);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    if (isPending) {
      return;
    }

    setDraftName(displayName);
    setError(null);
    setIsEditing(false);
  };

  const submitRename = () => {
    const nextName = draftName.trim();

    if (!nextName) {
      setError('Project name is required.');
      return;
    }

    if (nextName === displayName) {
      setIsEditing(false);
      setError(null);
      return;
    }

    const previousName = displayName;
    setDisplayName(nextName);
    setIsEditing(false);
    setError(null);

    startTransition(async () => {
      const result = await renameProjectAction(project.id, nextName);
      if (result.error) {
        setDisplayName(previousName);
        setDraftName(previousName);
        setError(result.error);
      }
    });
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitRename();
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      cancelEditing();
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <article
      style={{
        position: 'relative',
        display: 'grid',
        gap: 16,
        padding: 20,
        borderRadius: 18,
        border: '1px solid #e2e8f0',
        background: '#fff',
        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {isEditing ? (
            <input
              value={draftName}
              onChange={(event) => setDraftName(event.target.value)}
              onKeyDown={handleInputKeyDown}
              onBlur={submitRename}
              autoFocus
              disabled={isPending}
              maxLength={100}
              style={{
                width: '100%',
                borderRadius: 10,
                border: '1px solid #93c5fd',
                padding: '8px 10px',
                fontSize: 20,
                fontWeight: 700,
                color: '#0f172a',
              }}
            />
          ) : (
            <Link
              href={`/project/${project.id}`}
              onDoubleClick={(event) => {
                event.preventDefault();
                startEditing();
              }}
              style={{ color: '#0f172a', textDecoration: 'none' }}
            >
              <h2 style={{ margin: 0, fontSize: 20, overflowWrap: 'anywhere' }}>{displayName}</h2>
            </Link>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: 10,
              background: '#fff',
              width: 36,
              height: 36,
              cursor: 'pointer',
              fontSize: 18,
            }}
          >
            ⋮
          </button>

          {isMenuOpen ? (
            <div
              role="menu"
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                minWidth: 150,
                borderRadius: 12,
                border: '1px solid #e2e8f0',
                background: '#fff',
                boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
                overflow: 'hidden',
                zIndex: 5,
              }}
            >
              <button
                type="button"
                role="menuitem"
                onClick={startEditing}
                style={menuButtonStyle}
              >
                Rename
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDeleteOpen(true);
                }}
                style={{ ...menuButtonStyle, color: '#dc2626' }}
              >
                Delete
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <Link
        href={`/project/${project.id}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          width: 'fit-content',
          gap: 8,
          color: '#2563eb',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Open canvas →
      </Link>

      <p style={{ margin: 0, color: '#64748b', fontSize: 14 }}>Updated {formattedUpdatedAt}</p>
      {error ? <p style={{ margin: 0, color: '#dc2626', fontSize: 14 }}>{error}</p> : null}

      <DeleteProjectDialog
        open={isDeleteOpen}
        projectId={project.id}
        projectName={displayName}
        onClose={() => setIsDeleteOpen(false)}
        onDeleted={() => {
          setIsDeleted(true);
          setIsDeleteOpen(false);
        }}
      />
    </article>
  );
}

const menuButtonStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  border: 'none',
  background: '#fff',
  padding: '10px 14px',
  textAlign: 'left',
  cursor: 'pointer',
  color: '#0f172a',
};
