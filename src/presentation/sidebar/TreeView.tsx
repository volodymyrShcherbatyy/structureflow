'use client';

import { useMemo } from 'react';
import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';

type TreeNode = {
  id: string;
  label: string;
  children: TreeNode[];
};

function buildTree(nodes: any[]): TreeNode[] {
  const map = new Map<string, TreeNode>();

  nodes.forEach((node) => {
    map.set(node.id, {
      id: node.id,
      label: node.data.label,
      children: [],
    });
  });

  const roots: TreeNode[] = [];

  nodes.forEach((node) => {
    const treeNode = map.get(node.id)!;

    if (node.parentId) {
      const parent = map.get(node.parentId);
      if (parent) {
        parent.children.push(treeNode);
      }
    } else {
      roots.push(treeNode);
    }
  });

  return roots;
}

function buildPath(nodeId: string, nodes: any[]) {
  const map = new Map(nodes.map((n) => [n.id, n]));

  const path: { id: string; label: string }[] = [];

  let current = map.get(nodeId);

  while (current) {
    path.unshift({
      id: current.id,
      label: current.data.label,
    });

    current = current.parentId ? map.get(current.parentId) : null;
  }

  return path;
}

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const setScopePath = useScopeStore((s) => s.setScopePath);
  const nodes = useCanvasStore((s) => s.nodes);
  const currentScopeId = useScopeStore((s) => s.currentScopeId);
  const isActive = currentScopeId === node.id;

  return (
    <div>
      <button
        onClick={() => {
          const path = buildPath(node.id, nodes);
          setScopePath(path);
        }}
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left',
          padding: '4px 8px',
          paddingLeft: 8 + level * 12,
          border: 'none',
          cursor: 'pointer',
          fontSize: 13,

          background: isActive ? '#e0e7ff' : 'transparent',
          color: isActive ? '#3730a3' : '#111827',
          fontWeight: isActive ? 600 : 400,
          borderRadius: 6,
        }}
      >
        {node.label}
      </button>

      {node.children.map((child) => (
        <TreeItem key={child.id} node={child} level={level + 1} />
      ))}
    </div>
  );
}

export function TreeView() {
  const nodes = useCanvasStore((s) => s.nodes);

  const tree = useMemo(() => buildTree(nodes), [nodes]);

  return (
    <aside
      style={{
        width: 240,
        borderRight: '1px solid #e5e7eb',
        padding: 12,
        overflowY: 'auto',
        height: '100%',
        minHeight: 0,
      }}
    >
      <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>
        Structure
      </strong>

      <div style={{ marginTop: 8 }}>
        {tree.map((node) => (
          <TreeItem key={node.id} node={node} />
        ))}
      </div>
    </aside>
  );
}