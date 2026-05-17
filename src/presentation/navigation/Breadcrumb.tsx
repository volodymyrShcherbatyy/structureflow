'use client';

import Link from 'next/link';

import { useScopeStore } from '../stores/scopeStore';

const PROJECT_CRUMB_MAX_WIDTH = 180;
const NODE_CRUMB_MAX_WIDTH = 120;

const crumbTextStyle: React.CSSProperties = {
  minWidth: 0,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

export function Breadcrumb() {
  const projectName = useScopeStore((state) => state.projectName);
  const scopeStack = useScopeStore((state) => state.scopeStack);
  const resetScope = useScopeStore((state) => state.resetScope);
  const jumpTo = useScopeStore((state) => state.jumpTo);
  const drillOut = useScopeStore((state) => state.drillOut);

  return (
    <nav
      aria-label="Hierarchy navigation"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '10px 12px',
        borderBottom: '1px solid #e5e7eb',
        background: '#fff',
        minWidth: 0,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          minWidth: 0,
          overflow: 'hidden',
          flex: 1,
        }}
      >
        <Link
          href="/dashboard"
          style={{
            color: '#2563eb',
            textDecoration: 'none',
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          ← Projects ||
        </Link>

        <button
          type="button"
          onClick={resetScope}
          title={projectName}
          style={{
            ...crumbTextStyle,
            maxWidth: PROJECT_CRUMB_MAX_WIDTH,
            border: 'none',
            background: 'transparent',
            padding: 0,
            fontWeight: scopeStack.length === 0 ? 700 : 500,
            color: '#111827',
            cursor: 'pointer',
            flexShrink: 1,
          }}
        >
          {projectName}
        </button>

        {scopeStack.map((scope, index) => {
          const isActive = index === scopeStack.length - 1;

          return (
            <div
              key={scope.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                minWidth: 0,
                flexShrink: 1,
              }}
            >
              <span style={{ color: '#9ca3af', flexShrink: 0 }}>/</span>
              <button
                type="button"
                onClick={() => jumpTo(index)}
                title={scope.label}
                style={{
                  ...crumbTextStyle,
                  maxWidth: NODE_CRUMB_MAX_WIDTH,
                  border: 'none',
                  background: 'transparent',
                  padding: 0,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#111827' : '#4b5563',
                  cursor: 'pointer',
                  flexShrink: 1,
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {scope.label}
              </button>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={drillOut}
        disabled={scopeStack.length === 0}
        style={{
          border: '1px solid #d1d5db',
          background: scopeStack.length === 0 ? '#f9fafb' : '#fff',
          color: scopeStack.length === 0 ? '#9ca3af' : '#111827',
          borderRadius: 8,
          padding: '6px 10px',
          cursor: scopeStack.length === 0 ? 'not-allowed' : 'pointer',
          flexShrink: 0,
        }}
      >
        ↑ up
      </button>
    </nav>
  );
}
