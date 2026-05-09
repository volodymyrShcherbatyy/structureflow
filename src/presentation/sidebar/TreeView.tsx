'use client';

import { useEffect, useMemo } from 'react';

import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';
import { useTreeViewStore } from '../stores/treeViewStore';

type StructuralNode = {
  id: string;
  position: { x: number; y: number };
  parentId?: string;
  type?: string;
  style?: React.CSSProperties;
  data: {
    label: string;
    nodeType: string;
    description?: string;
    projectId: string;
  };
};

type TreeNode = {
  id: string;
  label: string;
  children: TreeNode[];
};

function isStructuralNode(node: unknown): node is StructuralNode {
  if (!node || typeof node !== 'object') {
    return false;
  }

  const candidate = node as {
    id?: unknown;
    type?: unknown;
    parentId?: unknown;
    data?: unknown;
  };

  if (candidate.type !== 'blockNode') {
    return false;
  }

  if (!candidate.data || typeof candidate.data !== 'object') {
    return false;
  }

  const data = candidate.data as {
    label?: unknown;
    nodeType?: unknown;
    projectId?: unknown;
  };

  return (
    typeof candidate.id === 'string' &&
    typeof data.label === 'string' &&
    typeof data.nodeType === 'string' &&
    typeof data.projectId === 'string'
  );
}

function buildTree(nodes: StructuralNode[]): TreeNode[] {
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
    const treeNode = map.get(node.id);

    if (!treeNode) {
      return;
    }

    if (node.parentId) {
      const parent = map.get(node.parentId);

      if (parent) {
        parent.children.push(treeNode);
        return;
      }
    }

    roots.push(treeNode);
  });

  return roots;
}

function buildPath(nodeId: string, nodes: StructuralNode[]) {
  const map = new Map(nodes.map((node) => [node.id, node]));
  const path: { id: string; label: string }[] = [];

  let current = map.get(nodeId);

  while (current) {
    path.unshift({
      id: current.id,
      label: current.data.label,
    });

    current = current.parentId ? map.get(current.parentId) : undefined;
  }

  return path;
}

function TreeItem({
  node,
  nodes,
  level = 0,
}: {
  node: TreeNode;
  nodes: StructuralNode[];
  level?: number;
}) {
  const setScopePath = useScopeStore((state) => state.setScopePath);
  const currentScopeId = useScopeStore((state) => state.currentScopeId);
  const isExpanded = useTreeViewStore((state) => state.isExpanded(node.id));
  const toggleNode = useTreeViewStore((state) => state.toggleNode);

  const isActive = currentScopeId === node.id;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 8 + level * 12,
        }}
      >
        <span
          onClick={(event) => {
            event.stopPropagation();

            if (node.children.length > 0) {
              toggleNode(node.id);
            }
          }}
          style={{
            cursor: node.children.length > 0 ? 'pointer' : 'default',
            width: 16,
            display: 'inline-block',
            userSelect: 'none',
            textAlign: 'center',
            opacity: node.children.length > 0 ? 1 : 0.3,
          }}
        >
          {node.children.length > 0 ? (isExpanded ? '▼' : '▶') : '•'}
        </span>

        <button
          type="button"
          onClick={() => {
            const path = buildPath(node.id, nodes);
            setScopePath(path);
          }}
          style={{
            flex: 1,
            display: 'block',
            textAlign: 'left',
            padding: '4px 8px',
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
      </div>

      {isExpanded
        ? node.children.map((child) => (
            <TreeItem key={child.id} node={child} nodes={nodes} level={level + 1} />
          ))
        : null}
    </div>
  );
}

export function TreeView() {
  const nodes = useCanvasStore((state) => state.nodes);
  const scopeStack = useScopeStore((state) => state.scopeStack);
  const expandPath = useTreeViewStore((state) => state.expandPath);

  const structuralNodes = useMemo(
    () => nodes.filter(isStructuralNode),
    [nodes],
  );

  const tree = useMemo(
    () => buildTree(structuralNodes),
    [structuralNodes],
  );

  useEffect(() => {
    if (!scopeStack.length) {
      return;
    }

    const ids = scopeStack.map((item) => item.id);
    expandPath(ids);
  }, [scopeStack, expandPath]);

  return (
    <aside
      style={{
        flex: 1,
        overflowY: 'auto',
        padding: 12,
        height: '100%',
        minHeight: 0,
      }}
    >
      <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>
        Structure
      </strong>

      <div style={{ marginTop: 8 }}>
        {tree.map((node) => (
          <TreeItem key={node.id} node={node} nodes={structuralNodes} />
        ))}
      </div>
    </aside>
  );
}