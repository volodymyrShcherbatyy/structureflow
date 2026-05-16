export const STRUCTUREFLOW_PROJECT_FORMAT = 'structureflow.project' as const;
export const STRUCTUREFLOW_PROJECT_VERSION = 1 as const;

export type StructureFlowProjectJsonV1 = {
  format: typeof STRUCTUREFLOW_PROJECT_FORMAT;
  version: typeof STRUCTUREFLOW_PROJECT_VERSION;
  exportedAt: string;

  project: {
    name: string;
  };

  nodes: Array<{
    id: string;
    type: string;
    label: string;
    description?: string;
    x: number;
    y: number;
    parentId?: string;
  }>;

  ports: Array<{
    id: string;
    nodeId: string;
    side: string;
    x: number;
    y: number;
    externalHandleOffset: number;
  }>;

  edges: Array<{
    id: string;
    type: string;
    sourceId: string;
    targetId: string;
    label?: string;
    sourceHandle?: string;
    targetHandle?: string;
  }>;

  flowchartElements: Array<{
    id: string;
    type: string;
    label: string;
    x: number;
    y: number;
    width: number;
    height: number;
    scopeId?: string;
  }>;

  flowchartConnections: Array<{
    id: string;
    type: string;
    label?: string;
    scopeId?: string;
    source: {
      kind: 'flowchart-element' | 'node' | 'port';
      id: string;
      anchor?: string;
    };
    target: {
      kind: 'flowchart-element' | 'node' | 'port';
      id: string;
      anchor?: string;
    };
  }>;
};