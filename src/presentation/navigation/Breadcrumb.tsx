'use client';

import { useScopeStore } from '../stores/scopeStore';

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
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={resetScope}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            fontWeight: scopeStack.length === 0 ? 700 : 500,
            color: '#111827',
            cursor: 'pointer',
          }}
        >
          {projectName}
        </button>

        {scopeStack.map((scope, index) => {
          const isActive = index === scopeStack.length - 1;

          return (
            <div key={scope.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#9ca3af' }}>/</span>
              <button
                type="button"
                onClick={() => jumpTo(index)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  padding: 0,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#111827' : '#4b5563',
                  cursor: 'pointer',
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
        }}
      >
        ↑ up
      </button>
    </nav>
  );
}
