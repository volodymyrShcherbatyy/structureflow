(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/presentation/canvas/edges/EdgeTypeSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EdgeTypeSelector",
    ()=>EdgeTypeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const EDGE_TYPES = [
    'dependency',
    'data-flow',
    'navigation',
    'api'
];
function EdgeTypeSelector({ onSelect, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 30,
            border: '1px solid #e5e7eb',
            background: '#ffffff',
            borderRadius: 10,
            padding: 12,
            minWidth: 180,
            display: 'grid',
            gap: 8,
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                style: {
                    fontSize: 12,
                    textTransform: 'uppercase'
                },
                children: "Select edge type"
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/edges/EdgeTypeSelector.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            EDGE_TYPES.map((edgeType)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onSelect(edgeType),
                    style: {
                        padding: '6px 10px',
                        borderRadius: 8,
                        border: '1px solid #d1d5db',
                        background: '#fff',
                        textAlign: 'left'
                    },
                    children: edgeType
                }, edgeType, false, {
                    fileName: "[project]/src/presentation/canvas/edges/EdgeTypeSelector.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onCancel,
                style: {
                    marginTop: 6,
                    padding: '6px 10px',
                    borderRadius: 8,
                    border: '1px solid #e5e7eb',
                    background: '#f9fafb'
                },
                children: "Cancel"
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/edges/EdgeTypeSelector.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/canvas/edges/EdgeTypeSelector.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = EdgeTypeSelector;
var _c;
__turbopack_context__.k.register(_c, "EdgeTypeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/stores/canvasStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasStore",
    ()=>useCanvasStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
;
const useCanvasStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        nodes: [],
        edges: [],
        pendingConnection: null,
        pendingChanges: [],
        isSaving: false,
        lastSavedAt: null,
        initCanvas: (nodes, edges)=>set({
                nodes,
                edges,
                pendingChanges: [],
                pendingConnection: null,
                isSaving: false,
                lastSavedAt: null
            }),
        onNodesChange: (changes)=>set((state)=>{
                const nextNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyNodeChanges"])(changes, state.nodes);
                changes.forEach((change)=>{
                    if (change.type === 'position' && change.dragging === false && change.position) {
                        get().addPendingChange({
                            type: 'move',
                            nodeId: change.id,
                            x: change.position.x,
                            y: change.position.y
                        });
                    }
                    if (change.type === 'remove') {
                        get().addPendingChange({
                            type: 'delete-node',
                            nodeId: change.id
                        });
                    }
                });
                return {
                    nodes: nextNodes
                };
            }),
        onEdgesChange: (changes)=>set((state)=>{
                const nextEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyEdgeChanges"])(changes, state.edges);
                changes.forEach((change)=>{
                    if (change.type === 'remove') {
                        get().addPendingChange({
                            type: 'delete-edge',
                            edgeId: change.id
                        });
                    }
                });
                return {
                    edges: nextEdges
                };
            }),
        onConnect: (connection)=>{
            if (!connection.source || !connection.target) {
                return;
            }
            set({
                pendingConnection: {
                    source: connection.source,
                    target: connection.target
                }
            });
        },
        addNode: (node)=>set((state)=>({
                    nodes: [
                        ...state.nodes,
                        node
                    ]
                })),
        removeNode: (nodeId)=>set((state)=>({
                    nodes: state.nodes.filter((node)=>node.id !== nodeId),
                    edges: state.edges.filter((edge)=>edge.source !== nodeId && edge.target !== nodeId)
                })),
        addEdge: (edge)=>set((state)=>({
                    edges: [
                        ...state.edges,
                        edge
                    ]
                })),
        removeEdge: (edgeId)=>set((state)=>({
                    edges: state.edges.filter((edge)=>edge.id !== edgeId)
                })),
        replaceEdgeId: (tempEdgeId, edgeId)=>set((state)=>({
                    edges: state.edges.map((edge)=>edge.id === tempEdgeId ? {
                            ...edge,
                            id: edgeId
                        } : edge),
                    pendingChanges: state.pendingChanges.map((change)=>{
                        if (change.type === 'delete-edge' && change.edgeId === tempEdgeId) {
                            return {
                                ...change,
                                edgeId
                            };
                        }
                        return change;
                    })
                })),
        updateNodePosition: (nodeId, x, y)=>set((state)=>({
                    nodes: state.nodes.map((node)=>node.id === nodeId ? {
                            ...node,
                            position: {
                                x,
                                y
                            }
                        } : node)
                })),
        updateNodeLabel: (nodeId, label)=>set((state)=>({
                    nodes: state.nodes.map((node)=>node.id === nodeId ? {
                            ...node,
                            data: {
                                ...node.data,
                                label
                            }
                        } : node)
                })),
        setPendingConnection: (pendingConnection)=>set({
                pendingConnection
            }),
        addTypedEdgeFromPending: (edgeType)=>{
            const { pendingConnection, edges } = get();
            if (!pendingConnection) {
                return;
            }
            const typedEdge = {
                id: crypto.randomUUID(),
                source: pendingConnection.source,
                target: pendingConnection.target,
                animated: edgeType === 'data-flow',
                style: edgeType === 'data-flow' ? {
                    stroke: '#2563eb',
                    strokeDasharray: '6 4'
                } : edgeType === 'navigation' ? {
                    stroke: '#7c3aed'
                } : edgeType === 'api' ? {
                    stroke: '#dc2626'
                } : {
                    stroke: '#6b7280'
                },
                data: {
                    edgeType
                }
            };
            set({
                edges: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEdge"])(typedEdge, edges),
                pendingConnection: null
            });
            get().addPendingChange({
                type: 'connect-edge',
                tempEdgeId: typedEdge.id,
                sourceId: typedEdge.source,
                targetId: typedEdge.target,
                edgeType,
                label: typedEdge.label
            });
        },
        addPendingChange: (change)=>set((state)=>{
                if (change.type === 'move') {
                    const filtered = state.pendingChanges.filter((pending)=>!(pending.type === 'move' && pending.nodeId === change.nodeId));
                    return {
                        pendingChanges: [
                            ...filtered,
                            change
                        ]
                    };
                }
                if (change.type === 'rename') {
                    const filtered = state.pendingChanges.filter((pending)=>!(pending.type === 'rename' && pending.nodeId === change.nodeId));
                    return {
                        pendingChanges: [
                            ...filtered,
                            change
                        ]
                    };
                }
                if (change.type === 'delete-node') {
                    const filtered = state.pendingChanges.filter((pending)=>{
                        if ('nodeId' in pending && pending.nodeId === change.nodeId) {
                            return false;
                        }
                        if (pending.type === 'connect-edge') {
                            return pending.sourceId !== change.nodeId && pending.targetId !== change.nodeId;
                        }
                        return true;
                    });
                    return {
                        pendingChanges: [
                            ...filtered,
                            change
                        ]
                    };
                }
                if (change.type === 'delete-edge') {
                    const pendingConnect = state.pendingChanges.find((pending)=>pending.type === 'connect-edge' && pending.tempEdgeId === change.edgeId);
                    if (pendingConnect) {
                        return {
                            pendingChanges: state.pendingChanges.filter((pending)=>pending !== pendingConnect)
                        };
                    }
                }
                return {
                    pendingChanges: [
                        ...state.pendingChanges,
                        change
                    ]
                };
            }),
        clearPendingChanges: ()=>set({
                pendingChanges: []
            }),
        setSaving: (isSaving)=>set({
                isSaving
            }),
        markSaved: ()=>set({
                isSaving: false,
                lastSavedAt: new Date()
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/canvas/SaveStatusIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveStatusIndicator",
    ()=>SaveStatusIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SaveStatusIndicator() {
    _s();
    const isSaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "SaveStatusIndicator.useCanvasStore[isSaving]": (state)=>state.isSaving
    }["SaveStatusIndicator.useCanvasStore[isSaving]"]);
    const pendingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "SaveStatusIndicator.useCanvasStore[pendingChanges]": (state)=>state.pendingChanges
    }["SaveStatusIndicator.useCanvasStore[pendingChanges]"]);
    const lastSavedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "SaveStatusIndicator.useCanvasStore[lastSavedAt]": (state)=>state.lastSavedAt
    }["SaveStatusIndicator.useCanvasStore[lastSavedAt]"]);
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SaveStatusIndicator.useMemo[label]": ()=>{
            if (isSaving) {
                return 'Saving...';
            }
            if (pendingChanges.length > 0) {
                return 'Unsaved changes';
            }
            if (lastSavedAt) {
                return 'Saved ✓';
            }
            return 'No changes yet';
        }
    }["SaveStatusIndicator.useMemo[label]"], [
        isSaving,
        lastSavedAt,
        pendingChanges.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 30,
            border: '1px solid #e5e7eb',
            borderRadius: 999,
            padding: '6px 10px',
            background: '#fff',
            fontSize: 12,
            color: '#374151'
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/src/presentation/canvas/SaveStatusIndicator.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(SaveStatusIndicator, "IP6JCYmNuUmZpQCWVjBK+2wflqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"]
    ];
});
_c = SaveStatusIndicator;
var _c;
__turbopack_context__.k.register(_c, "SaveStatusIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/stores/scopeStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScopeStore",
    ()=>useScopeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useScopeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        projectId: null,
        projectName: 'Project',
        currentScopeId: null,
        scopeStack: [],
        setProjectId: (projectId)=>set({
                projectId
            }),
        setProjectName: (projectName)=>set({
                projectName
            }),
        drillInto: (id, label)=>set((state)=>({
                    currentScopeId: id,
                    scopeStack: [
                        ...state.scopeStack,
                        {
                            id,
                            label
                        }
                    ]
                })),
        drillOut: ()=>set((state)=>{
                if (state.scopeStack.length === 0) {
                    return state;
                }
                const nextScopeStack = state.scopeStack.slice(0, -1);
                return {
                    currentScopeId: nextScopeStack.at(-1)?.id ?? null,
                    scopeStack: nextScopeStack
                };
            }),
        resetScope: ()=>set({
                currentScopeId: null,
                scopeStack: []
            }),
        jumpTo: (index)=>set((state)=>{
                const nextScopeStack = state.scopeStack.slice(0, index + 1);
                return {
                    currentScopeId: nextScopeStack.at(-1)?.id ?? null,
                    scopeStack: nextScopeStack
                };
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/canvas/nodes/BlockNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlockNode",
    ()=>BlockNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TYPE_COLORS = {
    system: {
        header: '#1d4ed8',
        border: '#93c5fd',
        background: '#eff6ff'
    },
    container: {
        header: '#0f766e',
        border: '#99f6e4',
        background: '#f0fdfa'
    },
    component: {
        header: '#6d28d9',
        border: '#ddd6fe',
        background: '#f5f3ff'
    },
    page: {
        header: '#b45309',
        border: '#fde68a',
        background: '#fffbeb'
    },
    external: {
        header: '#374151',
        border: '#d1d5db',
        background: '#f9fafb'
    }
};
function BlockNode({ id, data }) {
    _s();
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "BlockNode.useCanvasStore[nodes]": (state)=>state.nodes
    }["BlockNode.useCanvasStore[nodes]"]);
    const updateNodeLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "BlockNode.useCanvasStore[updateNodeLabel]": (state)=>state.updateNodeLabel
    }["BlockNode.useCanvasStore[updateNodeLabel]"]);
    const addPendingChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "BlockNode.useCanvasStore[addPendingChange]": (state)=>state.addPendingChange
    }["BlockNode.useCanvasStore[addPendingChange]"]);
    const drillInto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "BlockNode.useScopeStore[drillInto]": (state)=>state.drillInto
    }["BlockNode.useScopeStore[drillInto]"]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draftLabel, setDraftLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.label);
    const color = TYPE_COLORS[data.nodeType] ?? TYPE_COLORS.external;
    const hasChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BlockNode.useMemo[hasChildren]": ()=>nodes.some({
                "BlockNode.useMemo[hasChildren]": (node)=>node.parentId === id
            }["BlockNode.useMemo[hasChildren]"])
    }["BlockNode.useMemo[hasChildren]"], [
        id,
        nodes
    ]);
    const commitLabel = ()=>{
        const trimmed = draftLabel.trim();
        if (!trimmed) {
            setDraftLabel(data.label);
            setEditing(false);
            return;
        }
        if (trimmed !== data.label) {
            updateNodeLabel(id, trimmed);
            addPendingChange({
                type: 'rename',
                nodeId: id,
                label: trimmed
            });
        }
        setEditing(false);
    };
    const handleKeyDown = (event)=>{
        if (event.key === 'Enter') {
            commitLabel();
        }
        if (event.key === 'Escape') {
            setDraftLabel(data.label);
            setEditing(false);
        }
    };
    const handleLabelDoubleClick = (event)=>{
        event.stopPropagation();
        setEditing(true);
    };
    const handleNodeDoubleClick = ()=>{
        if (editing) {
            return;
        }
        drillInto(id, data.label);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onDoubleClick: handleNodeDoubleClick,
        style: {
            minWidth: 180,
            border: `1px solid ${color.border}`,
            borderRadius: 10,
            overflow: 'hidden',
            background: color.background,
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            cursor: 'zoom-in'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    background: color.header,
                    color: '#fff',
                    padding: '6px 10px',
                    fontSize: 12,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    fontWeight: 600
                },
                children: data.nodeType
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 10,
                    display: 'grid',
                    gap: 8
                },
                children: [
                    editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: draftLabel,
                        onChange: (event)=>setDraftLabel(event.target.value),
                        onBlur: commitLabel,
                        onKeyDown: handleKeyDown,
                        autoFocus: true,
                        style: {
                            border: '1px solid #d1d5db',
                            borderRadius: 6,
                            padding: '6px 8px',
                            fontWeight: 600
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onDoubleClick: handleLabelDoubleClick,
                        style: {
                            border: 'none',
                            background: 'transparent',
                            padding: 0,
                            textAlign: 'left',
                            fontWeight: 600,
                            cursor: 'text'
                        },
                        title: "Double click to rename",
                        children: data.label
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    data.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            fontSize: 12
                        },
                        children: data.description
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                        lineNumber: 135,
                        columnNumber: 29
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            fontSize: 11,
                            color: '#4b5563'
                        },
                        children: hasChildren ? '⊕ double click to open' : '⊕ double click to open empty scope'
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(BlockNode, "8fFD22tooU1Qif6fBjJKVLmOxog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"]
    ];
});
_c = BlockNode;
var _c;
__turbopack_context__.k.register(_c, "BlockNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/canvas/nodeTypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeTypes",
    ()=>nodeTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$nodes$2f$BlockNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/nodes/BlockNode.tsx [app-client] (ecmascript)");
;
const nodeTypes = {
    blockNode: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$nodes$2f$BlockNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockNode"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(protected)/project/[id]/data:b6bea2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addNodeAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40c97509045613d758a035df0a690fb1a6bc964a4a":"addNodeAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c97509045613d758a035df0a690fb1a6bc964a4a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addNodeAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IGF3YWl0IHByb2plY3RSZXBvc2l0b3J5LmZpbmRCeUlkKFByb2plY3RJZC5mcm9tKHByb2plY3RJZCkpO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SWQgPVxyXG4gIHR5cGVvZiBpbnB1dC5wcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKGlucHV0LnByb2plY3RJZClcclxuICAgIDogaW5wdXQucHJvamVjdElkXHJcblxyXG4gIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogUHJvamVjdElkLmZyb20oaW5wdXQucHJvamVjdElkKSxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgICBkZXNjcmlwdGlvbjogaW5wdXQuZGVzY3JpcHRpb24sXHJcbiAgICB4OiBpbnB1dC54LFxyXG4gICAgeTogaW5wdXQueSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGlucHV0LnBhcmVudElkKSB7XHJcbiAgICBhd2FpdCBuZXN0Tm9kZS5leGVjdXRlKHsgbm9kZUlkOiBub2RlLmlkLnRvU3RyaW5nKCksIHBhcmVudElkOiBpbnB1dC5wYXJlbnRJZCB9KTtcclxuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBhd2FpdCBub2RlUmVwb3NpdG9yeS5maW5kQnlJZChub2RlLmlkKTtcclxuXHJcbiAgICBpZiAoIW5lc3RlZE5vZGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9hZCBjcmVhdGVkIG5vZGUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobmVzdGVkTm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZU5vZGVBY3Rpb24oaW5wdXQ6IHsgcHJvamVjdElkOiBzdHJpbmc7IG5vZGVJZDogc3RyaW5nOyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgbW92ZU5vZGUgPSBuZXcgTW92ZU5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gbW92ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCB4OiBpbnB1dC54LCB5OiBpbnB1dC55IH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IHJlbmFtZU5vZGUgPSBuZXcgUmVuYW1lTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiByZW5hbWVOb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IGlucHV0Lm5vZGVJZCwgbGFiZWw6IGlucHV0LmxhYmVsIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBkZWxldGVOb2RlID0gbmV3IERlbGV0ZU5vZGUobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdE5vZGVzQWN0aW9uKGlucHV0OiB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgc291cmNlSWQ6IHN0cmluZztcclxuICB0YXJnZXRJZDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBsYWJlbD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBjb25uZWN0Tm9kZXMgPSBuZXcgQ29ubmVjdE5vZGVzKG5vZGVSZXBvc2l0b3J5LCBlZGdlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgeyBlZGdlIH0gPSBhd2FpdCBjb25uZWN0Tm9kZXMuZXhlY3V0ZSh7XHJcbiAgICBzb3VyY2VJZDogaW5wdXQuc291cmNlSWQsXHJcbiAgICB0YXJnZXRJZDogaW5wdXQudGFyZ2V0SWQsXHJcbiAgICB0eXBlOiBpbnB1dC50eXBlLFxyXG4gICAgbGFiZWw6IGlucHV0LmxhYmVsLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBlZGdlOiBjb3JlRWRnZVRvRmxvdyhlZGdlKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRWRnZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgZWRnZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZUVkZ2UgPSBuZXcgRGVsZXRlRWRnZShlZGdlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBkZWxldGVFZGdlLmV4ZWN1dGUoeyBlZGdlSWQ6IGlucHV0LmVkZ2VJZCB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZTQTRDc0IsMExBQUEifQ==
}),
"[project]/src/presentation/sidebar/NodePalette.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodePalette",
    ()=>NodePalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$b6bea2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:b6bea2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const NODE_TYPES = [
    'system',
    'container',
    'component',
    'page',
    'external'
];
function NodePalette() {
    _s();
    const addNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "NodePalette.useCanvasStore[addNode]": (state)=>state.addNode
    }["NodePalette.useCanvasStore[addNode]"]);
    const projectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "NodePalette.useScopeStore[projectId]": (state)=>state.projectId
    }["NodePalette.useScopeStore[projectId]"]);
    const currentScopeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "NodePalette.useScopeStore[currentScopeId]": (state)=>state.currentScopeId
    }["NodePalette.useScopeStore[currentScopeId]"]);
    const handleCreateNode = async (type)=>{
        if (!projectId) {
            return;
        }
        const { node } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$b6bea2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addNodeAction"])({
            projectId,
            type,
            label: `${type} node`,
            description: '',
            x: Math.floor(Math.random() * 260),
            y: Math.floor(Math.random() * 260),
            parentId: currentScopeId ?? undefined
        });
        addNode(node);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        style: {
            width: 220,
            borderRight: '1px solid #e5e7eb',
            padding: 12,
            display: 'grid',
            gap: 8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                style: {
                    fontSize: 12,
                    textTransform: 'uppercase'
                },
                children: "Node palette"
            }, void 0, false, {
                fileName: "[project]/src/presentation/sidebar/NodePalette.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            NODE_TYPES.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>void handleCreateNode(type),
                    style: {
                        border: '1px solid #d1d5db',
                        background: '#fff',
                        borderRadius: 8,
                        padding: '8px 10px',
                        textAlign: 'left'
                    },
                    children: type[0].toUpperCase() + type.slice(1)
                }, type, false, {
                    fileName: "[project]/src/presentation/sidebar/NodePalette.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/sidebar/NodePalette.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(NodePalette, "Sb4qGjlJwUlRijajFRM1cYAQRB0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"]
    ];
});
_c = NodePalette;
var _c;
__turbopack_context__.k.register(_c, "NodePalette");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/canvas/FlowCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowCanvas",
    ()=>FlowCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$edges$2f$EdgeTypeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/edges/EdgeTypeSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$SaveStatusIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/SaveStatusIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$nodeTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/nodeTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$sidebar$2f$NodePalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/sidebar/NodePalette.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function FlowCanvasContent() {
    _s();
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect, pendingConnection, setPendingConnection, addTypedEdgeFromPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])();
    const currentScopeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "FlowCanvasContent.useScopeStore[currentScopeId]": (state)=>state.currentScopeId
    }["FlowCanvasContent.useScopeStore[currentScopeId]"]);
    const scopeStackLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "FlowCanvasContent.useScopeStore[scopeStackLength]": (state)=>state.scopeStack.length
    }["FlowCanvasContent.useScopeStore[scopeStackLength]"]);
    const drillOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "FlowCanvasContent.useScopeStore[drillOut]": (state)=>state.drillOut
    }["FlowCanvasContent.useScopeStore[drillOut]"]);
    const { fitView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const visibleNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlowCanvasContent.useMemo[visibleNodes]": ()=>nodes.filter({
                "FlowCanvasContent.useMemo[visibleNodes]": (node)=>currentScopeId ? node.parentId === currentScopeId : !node.parentId
            }["FlowCanvasContent.useMemo[visibleNodes]"])
    }["FlowCanvasContent.useMemo[visibleNodes]"], [
        currentScopeId,
        nodes
    ]);
    const visibleNodeIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlowCanvasContent.useMemo[visibleNodeIds]": ()=>new Set(visibleNodes.map({
                "FlowCanvasContent.useMemo[visibleNodeIds]": (node)=>node.id
            }["FlowCanvasContent.useMemo[visibleNodeIds]"]))
    }["FlowCanvasContent.useMemo[visibleNodeIds]"], [
        visibleNodes
    ]);
    const visibleEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlowCanvasContent.useMemo[visibleEdges]": ()=>edges.filter({
                "FlowCanvasContent.useMemo[visibleEdges]": (edge)=>visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
            }["FlowCanvasContent.useMemo[visibleEdges]"])
    }["FlowCanvasContent.useMemo[visibleEdges]"], [
        edges,
        visibleNodeIds
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlowCanvasContent.useEffect": ()=>{
            const timeoutId = window.setTimeout({
                "FlowCanvasContent.useEffect.timeoutId": ()=>{
                    fitView({
                        duration: 300,
                        padding: 0.2
                    });
                }
            }["FlowCanvasContent.useEffect.timeoutId"], 50);
            return ({
                "FlowCanvasContent.useEffect": ()=>window.clearTimeout(timeoutId)
            })["FlowCanvasContent.useEffect"];
        }
    }["FlowCanvasContent.useEffect"], [
        currentScopeId,
        fitView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlowCanvasContent.useEffect": ()=>{
            const handleKeyDown = {
                "FlowCanvasContent.useEffect.handleKeyDown": (event)=>{
                    if (event.key !== 'Escape' || scopeStackLength === 0) {
                        return;
                    }
                    const activeElement = document.activeElement;
                    if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement || activeElement instanceof HTMLSelectElement || activeElement?.getAttribute('contenteditable') === 'true') {
                        return;
                    }
                    event.preventDefault();
                    drillOut();
                }
            }["FlowCanvasContent.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "FlowCanvasContent.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["FlowCanvasContent.useEffect"];
        }
    }["FlowCanvasContent.useEffect"], [
        drillOut,
        scopeStackLength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            display: 'flex',
            height: '100%',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$sidebar$2f$NodePalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodePalette"], {}, void 0, false, {
                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$SaveStatusIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaveStatusIndicator"], {}, void 0, false, {
                        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    pendingConnection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$edges$2f$EdgeTypeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeTypeSelector"], {
                        onSelect: (edgeType)=>addTypedEdgeFromPending(edgeType),
                        onCancel: ()=>setPendingConnection(null)
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this) : null,
                    currentScopeId && visibleNodes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            display: 'grid',
                            placeItems: 'center',
                            zIndex: 5,
                            pointerEvents: 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                margin: 0,
                                padding: '10px 14px',
                                borderRadius: 10,
                                border: '1px solid #d1d5db',
                                background: '#ffffffd9',
                                color: '#4b5563'
                            },
                            children: "This scope is empty. Add a node from the palette to start nesting."
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
                        nodes: visibleNodes,
                        edges: visibleEdges,
                        onNodesChange: onNodesChange,
                        onEdgesChange: onEdgesChange,
                        onConnect: onConnect,
                        nodeTypes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$nodeTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeTypes"],
                        fitView: true,
                        deleteKeyCode: [
                            'Backspace',
                            'Delete'
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {}, void 0, false, {
                                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {}, void 0, false, {
                                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {
                                gap: 18,
                                size: 1
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(FlowCanvasContent, "j5UZXvTzwcXRDIrvXE0Ez6I/nBI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"]
    ];
});
_c = FlowCanvasContent;
function FlowCanvas() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowCanvasContent, {}, void 0, false, {
        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
        lineNumber: 137,
        columnNumber: 10
    }, this);
}
_c1 = FlowCanvas;
var _c, _c1;
__turbopack_context__.k.register(_c, "FlowCanvasContent");
__turbopack_context__.k.register(_c1, "FlowCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(protected)/project/[id]/data:ae7887 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectNodesAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4032e5b36e93d74db78e1ad5d5d0543d101eeefae1":"connectNodesAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4032e5b36e93d74db78e1ad5d5d0543d101eeefae1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "connectNodesAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IGF3YWl0IHByb2plY3RSZXBvc2l0b3J5LmZpbmRCeUlkKFByb2plY3RJZC5mcm9tKHByb2plY3RJZCkpO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SWQgPVxyXG4gIHR5cGVvZiBpbnB1dC5wcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKGlucHV0LnByb2plY3RJZClcclxuICAgIDogaW5wdXQucHJvamVjdElkXHJcblxyXG4gIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogUHJvamVjdElkLmZyb20oaW5wdXQucHJvamVjdElkKSxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgICBkZXNjcmlwdGlvbjogaW5wdXQuZGVzY3JpcHRpb24sXHJcbiAgICB4OiBpbnB1dC54LFxyXG4gICAgeTogaW5wdXQueSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGlucHV0LnBhcmVudElkKSB7XHJcbiAgICBhd2FpdCBuZXN0Tm9kZS5leGVjdXRlKHsgbm9kZUlkOiBub2RlLmlkLnRvU3RyaW5nKCksIHBhcmVudElkOiBpbnB1dC5wYXJlbnRJZCB9KTtcclxuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBhd2FpdCBub2RlUmVwb3NpdG9yeS5maW5kQnlJZChub2RlLmlkKTtcclxuXHJcbiAgICBpZiAoIW5lc3RlZE5vZGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9hZCBjcmVhdGVkIG5vZGUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobmVzdGVkTm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZU5vZGVBY3Rpb24oaW5wdXQ6IHsgcHJvamVjdElkOiBzdHJpbmc7IG5vZGVJZDogc3RyaW5nOyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgbW92ZU5vZGUgPSBuZXcgTW92ZU5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gbW92ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCB4OiBpbnB1dC54LCB5OiBpbnB1dC55IH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IHJlbmFtZU5vZGUgPSBuZXcgUmVuYW1lTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiByZW5hbWVOb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IGlucHV0Lm5vZGVJZCwgbGFiZWw6IGlucHV0LmxhYmVsIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBkZWxldGVOb2RlID0gbmV3IERlbGV0ZU5vZGUobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdE5vZGVzQWN0aW9uKGlucHV0OiB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgc291cmNlSWQ6IHN0cmluZztcclxuICB0YXJnZXRJZDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBsYWJlbD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBjb25uZWN0Tm9kZXMgPSBuZXcgQ29ubmVjdE5vZGVzKG5vZGVSZXBvc2l0b3J5LCBlZGdlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgeyBlZGdlIH0gPSBhd2FpdCBjb25uZWN0Tm9kZXMuZXhlY3V0ZSh7XHJcbiAgICBzb3VyY2VJZDogaW5wdXQuc291cmNlSWQsXHJcbiAgICB0YXJnZXRJZDogaW5wdXQudGFyZ2V0SWQsXHJcbiAgICB0eXBlOiBpbnB1dC50eXBlLFxyXG4gICAgbGFiZWw6IGlucHV0LmxhYmVsLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBlZGdlOiBjb3JlRWRnZVRvRmxvdyhlZGdlKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRWRnZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgZWRnZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZUVkZ2UgPSBuZXcgRGVsZXRlRWRnZShlZGdlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBkZWxldGVFZGdlLmV4ZWN1dGUoeyBlZGdlSWQ6IGlucHV0LmVkZ2VJZCB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtUQWtHc0IsK0xBQUEifQ==
}),
"[project]/src/app/(protected)/project/[id]/data:8c7502 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteEdgeAction",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4045b13b674227779ed724cab26c9066fce5ad5473":"deleteEdgeAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4045b13b674227779ed724cab26c9066fce5ad5473", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteEdgeAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IGF3YWl0IHByb2plY3RSZXBvc2l0b3J5LmZpbmRCeUlkKFByb2plY3RJZC5mcm9tKHByb2plY3RJZCkpO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SWQgPVxyXG4gIHR5cGVvZiBpbnB1dC5wcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKGlucHV0LnByb2plY3RJZClcclxuICAgIDogaW5wdXQucHJvamVjdElkXHJcblxyXG4gIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogUHJvamVjdElkLmZyb20oaW5wdXQucHJvamVjdElkKSxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgICBkZXNjcmlwdGlvbjogaW5wdXQuZGVzY3JpcHRpb24sXHJcbiAgICB4OiBpbnB1dC54LFxyXG4gICAgeTogaW5wdXQueSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGlucHV0LnBhcmVudElkKSB7XHJcbiAgICBhd2FpdCBuZXN0Tm9kZS5leGVjdXRlKHsgbm9kZUlkOiBub2RlLmlkLnRvU3RyaW5nKCksIHBhcmVudElkOiBpbnB1dC5wYXJlbnRJZCB9KTtcclxuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBhd2FpdCBub2RlUmVwb3NpdG9yeS5maW5kQnlJZChub2RlLmlkKTtcclxuXHJcbiAgICBpZiAoIW5lc3RlZE5vZGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9hZCBjcmVhdGVkIG5vZGUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobmVzdGVkTm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZU5vZGVBY3Rpb24oaW5wdXQ6IHsgcHJvamVjdElkOiBzdHJpbmc7IG5vZGVJZDogc3RyaW5nOyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgbW92ZU5vZGUgPSBuZXcgTW92ZU5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gbW92ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCB4OiBpbnB1dC54LCB5OiBpbnB1dC55IH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IHJlbmFtZU5vZGUgPSBuZXcgUmVuYW1lTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiByZW5hbWVOb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IGlucHV0Lm5vZGVJZCwgbGFiZWw6IGlucHV0LmxhYmVsIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBkZWxldGVOb2RlID0gbmV3IERlbGV0ZU5vZGUobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdE5vZGVzQWN0aW9uKGlucHV0OiB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgc291cmNlSWQ6IHN0cmluZztcclxuICB0YXJnZXRJZDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBsYWJlbD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBjb25uZWN0Tm9kZXMgPSBuZXcgQ29ubmVjdE5vZGVzKG5vZGVSZXBvc2l0b3J5LCBlZGdlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgeyBlZGdlIH0gPSBhd2FpdCBjb25uZWN0Tm9kZXMuZXhlY3V0ZSh7XHJcbiAgICBzb3VyY2VJZDogaW5wdXQuc291cmNlSWQsXHJcbiAgICB0YXJnZXRJZDogaW5wdXQudGFyZ2V0SWQsXHJcbiAgICB0eXBlOiBpbnB1dC50eXBlLFxyXG4gICAgbGFiZWw6IGlucHV0LmxhYmVsLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBlZGdlOiBjb3JlRWRnZVRvRmxvdyhlZGdlKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRWRnZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgZWRnZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZUVkZ2UgPSBuZXcgRGVsZXRlRWRnZShlZGdlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBkZWxldGVFZGdlLmV4ZWN1dGUoeyBlZGdlSWQ6IGlucHV0LmVkZ2VJZCB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdUQXFIc0IsNkxBQUEifQ==
}),
"[project]/src/app/(protected)/project/[id]/data:fa1eeb [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteNodeAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40a40a41f0f6cbb463d87110b5e80b33e301568866":"deleteNodeAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a40a41f0f6cbb463d87110b5e80b33e301568866", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteNodeAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IGF3YWl0IHByb2plY3RSZXBvc2l0b3J5LmZpbmRCeUlkKFByb2plY3RJZC5mcm9tKHByb2plY3RJZCkpO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SWQgPVxyXG4gIHR5cGVvZiBpbnB1dC5wcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKGlucHV0LnByb2plY3RJZClcclxuICAgIDogaW5wdXQucHJvamVjdElkXHJcblxyXG4gIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogUHJvamVjdElkLmZyb20oaW5wdXQucHJvamVjdElkKSxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgICBkZXNjcmlwdGlvbjogaW5wdXQuZGVzY3JpcHRpb24sXHJcbiAgICB4OiBpbnB1dC54LFxyXG4gICAgeTogaW5wdXQueSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGlucHV0LnBhcmVudElkKSB7XHJcbiAgICBhd2FpdCBuZXN0Tm9kZS5leGVjdXRlKHsgbm9kZUlkOiBub2RlLmlkLnRvU3RyaW5nKCksIHBhcmVudElkOiBpbnB1dC5wYXJlbnRJZCB9KTtcclxuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBhd2FpdCBub2RlUmVwb3NpdG9yeS5maW5kQnlJZChub2RlLmlkKTtcclxuXHJcbiAgICBpZiAoIW5lc3RlZE5vZGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9hZCBjcmVhdGVkIG5vZGUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobmVzdGVkTm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZU5vZGVBY3Rpb24oaW5wdXQ6IHsgcHJvamVjdElkOiBzdHJpbmc7IG5vZGVJZDogc3RyaW5nOyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgbW92ZU5vZGUgPSBuZXcgTW92ZU5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gbW92ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCB4OiBpbnB1dC54LCB5OiBpbnB1dC55IH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IHJlbmFtZU5vZGUgPSBuZXcgUmVuYW1lTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiByZW5hbWVOb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IGlucHV0Lm5vZGVJZCwgbGFiZWw6IGlucHV0LmxhYmVsIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBkZWxldGVOb2RlID0gbmV3IERlbGV0ZU5vZGUobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdE5vZGVzQWN0aW9uKGlucHV0OiB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgc291cmNlSWQ6IHN0cmluZztcclxuICB0YXJnZXRJZDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBsYWJlbD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBjb25uZWN0Tm9kZXMgPSBuZXcgQ29ubmVjdE5vZGVzKG5vZGVSZXBvc2l0b3J5LCBlZGdlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgeyBlZGdlIH0gPSBhd2FpdCBjb25uZWN0Tm9kZXMuZXhlY3V0ZSh7XHJcbiAgICBzb3VyY2VJZDogaW5wdXQuc291cmNlSWQsXHJcbiAgICB0YXJnZXRJZDogaW5wdXQudGFyZ2V0SWQsXHJcbiAgICB0eXBlOiBpbnB1dC50eXBlLFxyXG4gICAgbGFiZWw6IGlucHV0LmxhYmVsLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBlZGdlOiBjb3JlRWRnZVRvRmxvdyhlZGdlKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRWRnZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgZWRnZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZUVkZ2UgPSBuZXcgRGVsZXRlRWRnZShlZGdlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBkZWxldGVFZGdlLmV4ZWN1dGUoeyBlZGdlSWQ6IGlucHV0LmVkZ2VJZCB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdUQTJGc0IsNkxBQUEifQ==
}),
"[project]/src/app/(protected)/project/[id]/data:9769dd [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveNodeAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4040aa00d86ac5206ca4698f4cfda2904a8fb2d140":"moveNodeAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4040aa00d86ac5206ca4698f4cfda2904a8fb2d140", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "moveNodeAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IGF3YWl0IHByb2plY3RSZXBvc2l0b3J5LmZpbmRCeUlkKFByb2plY3RJZC5mcm9tKHByb2plY3RJZCkpO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SWQgPVxyXG4gIHR5cGVvZiBpbnB1dC5wcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKGlucHV0LnByb2plY3RJZClcclxuICAgIDogaW5wdXQucHJvamVjdElkXHJcblxyXG4gIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogUHJvamVjdElkLmZyb20oaW5wdXQucHJvamVjdElkKSxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgICBkZXNjcmlwdGlvbjogaW5wdXQuZGVzY3JpcHRpb24sXHJcbiAgICB4OiBpbnB1dC54LFxyXG4gICAgeTogaW5wdXQueSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGlucHV0LnBhcmVudElkKSB7XHJcbiAgICBhd2FpdCBuZXN0Tm9kZS5leGVjdXRlKHsgbm9kZUlkOiBub2RlLmlkLnRvU3RyaW5nKCksIHBhcmVudElkOiBpbnB1dC5wYXJlbnRJZCB9KTtcclxuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBhd2FpdCBub2RlUmVwb3NpdG9yeS5maW5kQnlJZChub2RlLmlkKTtcclxuXHJcbiAgICBpZiAoIW5lc3RlZE5vZGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9hZCBjcmVhdGVkIG5vZGUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobmVzdGVkTm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZU5vZGVBY3Rpb24oaW5wdXQ6IHsgcHJvamVjdElkOiBzdHJpbmc7IG5vZGVJZDogc3RyaW5nOyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgbW92ZU5vZGUgPSBuZXcgTW92ZU5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gbW92ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCB4OiBpbnB1dC54LCB5OiBpbnB1dC55IH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IHJlbmFtZU5vZGUgPSBuZXcgUmVuYW1lTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiByZW5hbWVOb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IGlucHV0Lm5vZGVJZCwgbGFiZWw6IGlucHV0LmxhYmVsIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBkZWxldGVOb2RlID0gbmV3IERlbGV0ZU5vZGUobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdE5vZGVzQWN0aW9uKGlucHV0OiB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgc291cmNlSWQ6IHN0cmluZztcclxuICB0YXJnZXRJZDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBsYWJlbD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBjb25uZWN0Tm9kZXMgPSBuZXcgQ29ubmVjdE5vZGVzKG5vZGVSZXBvc2l0b3J5LCBlZGdlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgeyBlZGdlIH0gPSBhd2FpdCBjb25uZWN0Tm9kZXMuZXhlY3V0ZSh7XHJcbiAgICBzb3VyY2VJZDogaW5wdXQuc291cmNlSWQsXHJcbiAgICB0YXJnZXRJZDogaW5wdXQudGFyZ2V0SWQsXHJcbiAgICB0eXBlOiBpbnB1dC50eXBlLFxyXG4gICAgbGFiZWw6IGlucHV0LmxhYmVsLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBlZGdlOiBjb3JlRWRnZVRvRmxvdyhlZGdlKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRWRnZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgZWRnZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZUVkZ2UgPSBuZXcgRGVsZXRlRWRnZShlZGdlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBkZWxldGVFZGdlLmV4ZWN1dGUoeyBlZGdlSWQ6IGlucHV0LmVkZ2VJZCB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhTQTZFc0IsMkxBQUEifQ==
}),
"[project]/src/app/(protected)/project/[id]/data:3d1ff6 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renameNodeAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4066bb889675452b110e56705ad69a9a42dd154522":"renameNodeAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4066bb889675452b110e56705ad69a9a42dd154522", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "renameNodeAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IGF3YWl0IHByb2plY3RSZXBvc2l0b3J5LmZpbmRCeUlkKFByb2plY3RJZC5mcm9tKHByb2plY3RJZCkpO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SWQgPVxyXG4gIHR5cGVvZiBpbnB1dC5wcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKGlucHV0LnByb2plY3RJZClcclxuICAgIDogaW5wdXQucHJvamVjdElkXHJcblxyXG4gIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogUHJvamVjdElkLmZyb20oaW5wdXQucHJvamVjdElkKSxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgICBkZXNjcmlwdGlvbjogaW5wdXQuZGVzY3JpcHRpb24sXHJcbiAgICB4OiBpbnB1dC54LFxyXG4gICAgeTogaW5wdXQueSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGlucHV0LnBhcmVudElkKSB7XHJcbiAgICBhd2FpdCBuZXN0Tm9kZS5leGVjdXRlKHsgbm9kZUlkOiBub2RlLmlkLnRvU3RyaW5nKCksIHBhcmVudElkOiBpbnB1dC5wYXJlbnRJZCB9KTtcclxuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSBhd2FpdCBub2RlUmVwb3NpdG9yeS5maW5kQnlJZChub2RlLmlkKTtcclxuXHJcbiAgICBpZiAoIW5lc3RlZE5vZGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9hZCBjcmVhdGVkIG5vZGUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobmVzdGVkTm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbm9kZTogY29yZU5vZGVUb0Zsb3cobm9kZSwgaW5wdXQucHJvamVjdElkKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZU5vZGVBY3Rpb24oaW5wdXQ6IHsgcHJvamVjdElkOiBzdHJpbmc7IG5vZGVJZDogc3RyaW5nOyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgbW92ZU5vZGUgPSBuZXcgTW92ZU5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gbW92ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCB4OiBpbnB1dC54LCB5OiBpbnB1dC55IH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IHJlbmFtZU5vZGUgPSBuZXcgUmVuYW1lTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiByZW5hbWVOb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IGlucHV0Lm5vZGVJZCwgbGFiZWw6IGlucHV0LmxhYmVsIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBkZWxldGVOb2RlID0gbmV3IERlbGV0ZU5vZGUobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdE5vZGVzQWN0aW9uKGlucHV0OiB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgc291cmNlSWQ6IHN0cmluZztcclxuICB0YXJnZXRJZDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBsYWJlbD86IHN0cmluZztcclxufSkge1xyXG4gIGNvbnN0IHsgbm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBjb25uZWN0Tm9kZXMgPSBuZXcgQ29ubmVjdE5vZGVzKG5vZGVSZXBvc2l0b3J5LCBlZGdlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgeyBlZGdlIH0gPSBhd2FpdCBjb25uZWN0Tm9kZXMuZXhlY3V0ZSh7XHJcbiAgICBzb3VyY2VJZDogaW5wdXQuc291cmNlSWQsXHJcbiAgICB0YXJnZXRJZDogaW5wdXQudGFyZ2V0SWQsXHJcbiAgICB0eXBlOiBpbnB1dC50eXBlLFxyXG4gICAgbGFiZWw6IGlucHV0LmxhYmVsLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBlZGdlOiBjb3JlRWRnZVRvRmxvdyhlZGdlKSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRWRnZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgZWRnZUlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZUVkZ2UgPSBuZXcgRGVsZXRlRWRnZShlZGdlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBkZWxldGVFZGdlLmV4ZWN1dGUoeyBlZGdlSWQ6IGlucHV0LmVkZ2VJZCB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdUQW9Gc0IsNkxBQUEifQ==
}),
"[project]/src/presentation/canvas/hooks/useAutosave.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAutosave",
    ()=>useAutosave
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$ae7887__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:ae7887 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$8c7502__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:8c7502 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$fa1eeb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:fa1eeb [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$9769dd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:9769dd [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$3d1ff6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:3d1ff6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DEBOUNCE_MS = 1000;
async function processChange(change, projectId) {
    if (change.type === 'move') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$9769dd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["moveNodeAction"])({
            projectId,
            nodeId: change.nodeId,
            x: change.x,
            y: change.y
        });
        return;
    }
    if (change.type === 'rename') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$3d1ff6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["renameNodeAction"])({
            projectId,
            nodeId: change.nodeId,
            label: change.label
        });
        return;
    }
    if (change.type === 'delete-node') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$fa1eeb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteNodeAction"])({
            projectId,
            nodeId: change.nodeId
        });
        return;
    }
    if (change.type === 'connect-edge') {
        const { edge } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$ae7887__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["connectNodesAction"])({
            projectId,
            sourceId: change.sourceId,
            targetId: change.targetId,
            type: change.edgeType,
            label: change.label
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().replaceEdgeId(change.tempEdgeId, edge.id);
        return;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$8c7502__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteEdgeAction"])({
        projectId,
        edgeId: change.edgeId
    });
}
function useAutosave() {
    _s();
    const projectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "useAutosave.useScopeStore[projectId]": (state)=>state.projectId
    }["useAutosave.useScopeStore[projectId]"]);
    const pendingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "useAutosave.useCanvasStore[pendingChanges]": (state)=>state.pendingChanges
    }["useAutosave.useCanvasStore[pendingChanges]"]);
    const isSaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "useAutosave.useCanvasStore[isSaving]": (state)=>state.isSaving
    }["useAutosave.useCanvasStore[isSaving]"]);
    const setSaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "useAutosave.useCanvasStore[setSaving]": (state)=>state.setSaving
    }["useAutosave.useCanvasStore[setSaving]"]);
    const clearPendingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "useAutosave.useCanvasStore[clearPendingChanges]": (state)=>state.clearPendingChanges
    }["useAutosave.useCanvasStore[clearPendingChanges]"]);
    const addPendingChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "useAutosave.useCanvasStore[addPendingChange]": (state)=>state.addPendingChange
    }["useAutosave.useCanvasStore[addPendingChange]"]);
    const markSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "useAutosave.useCanvasStore[markSaved]": (state)=>state.markSaved
    }["useAutosave.useCanvasStore[markSaved]"]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAutosave.useEffect": ()=>{
            if (!projectId || pendingChanges.length === 0 || isSaving) {
                return;
            }
            timerRef.current = window.setTimeout({
                "useAutosave.useEffect": async ()=>{
                    const snapshot = [
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().pendingChanges
                    ];
                    if (snapshot.length === 0) {
                        return;
                    }
                    setSaving(true);
                    clearPendingChanges();
                    try {
                        for (const change of snapshot){
                            await processChange(change, projectId);
                        }
                        markSaved();
                    } catch (error) {
                        snapshot.forEach({
                            "useAutosave.useEffect": (change)=>addPendingChange(change)
                        }["useAutosave.useEffect"]);
                        setSaving(false);
                        console.error('Autosave failed', error);
                    }
                }
            }["useAutosave.useEffect"], DEBOUNCE_MS);
            return ({
                "useAutosave.useEffect": ()=>{
                    if (timerRef.current) {
                        window.clearTimeout(timerRef.current);
                    }
                }
            })["useAutosave.useEffect"];
        }
    }["useAutosave.useEffect"], [
        addPendingChange,
        clearPendingChanges,
        isSaving,
        markSaved,
        pendingChanges,
        projectId,
        setSaving
    ]);
}
_s(useAutosave, "DT1gth+jqey5qZkRyAtbpZf/CiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/navigation/Breadcrumb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Breadcrumb() {
    _s();
    const projectName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "Breadcrumb.useScopeStore[projectName]": (state)=>state.projectName
    }["Breadcrumb.useScopeStore[projectName]"]);
    const scopeStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "Breadcrumb.useScopeStore[scopeStack]": (state)=>state.scopeStack
    }["Breadcrumb.useScopeStore[scopeStack]"]);
    const resetScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "Breadcrumb.useScopeStore[resetScope]": (state)=>state.resetScope
    }["Breadcrumb.useScopeStore[resetScope]"]);
    const jumpTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "Breadcrumb.useScopeStore[jumpTo]": (state)=>state.jumpTo
    }["Breadcrumb.useScopeStore[jumpTo]"]);
    const drillOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "Breadcrumb.useScopeStore[drillOut]": (state)=>state.drillOut
    }["Breadcrumb.useScopeStore[drillOut]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Hierarchy navigation",
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '10px 12px',
            borderBottom: '1px solid #e5e7eb',
            background: '#fff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        style: {
                            color: '#2563eb',
                            textDecoration: 'none',
                            fontWeight: 600
                        },
                        children: "← Проєкти"
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/navigation/Breadcrumb.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: resetScope,
                        style: {
                            border: 'none',
                            background: 'transparent',
                            padding: 0,
                            fontWeight: scopeStack.length === 0 ? 700 : 500,
                            color: '#111827',
                            cursor: 'pointer'
                        },
                        children: projectName
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/navigation/Breadcrumb.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    scopeStack.map((scope, index)=>{
                        const isActive = index === scopeStack.length - 1;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#9ca3af'
                                    },
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/navigation/Breadcrumb.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>jumpTo(index),
                                    style: {
                                        border: 'none',
                                        background: 'transparent',
                                        padding: 0,
                                        fontWeight: isActive ? 700 : 500,
                                        color: isActive ? '#111827' : '#4b5563',
                                        cursor: 'pointer'
                                    },
                                    "aria-current": isActive ? 'page' : undefined,
                                    children: scope.label
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/navigation/Breadcrumb.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, scope.id, true, {
                            fileName: "[project]/src/presentation/navigation/Breadcrumb.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/navigation/Breadcrumb.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: drillOut,
                disabled: scopeStack.length === 0,
                style: {
                    border: '1px solid #d1d5db',
                    background: scopeStack.length === 0 ? '#f9fafb' : '#fff',
                    color: scopeStack.length === 0 ? '#9ca3af' : '#111827',
                    borderRadius: 8,
                    padding: '6px 10px',
                    cursor: scopeStack.length === 0 ? 'not-allowed' : 'pointer'
                },
                children: "↑ up"
            }, void 0, false, {
                fileName: "[project]/src/presentation/navigation/Breadcrumb.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/navigation/Breadcrumb.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Breadcrumb, "wkwYa9eR7iQpopV3lbyAU4aIvj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"]
    ];
});
_c = Breadcrumb;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/canvas/CanvasInitializer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasInitializer",
    ()=>CanvasInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$FlowCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/FlowCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$hooks$2f$useAutosave$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/hooks/useAutosave.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$navigation$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/navigation/Breadcrumb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function CanvasContent() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$hooks$2f$useAutosave$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutosave"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$navigation$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Breadcrumb"], {}, void 0, false, {
                fileName: "[project]/src/presentation/canvas/CanvasInitializer.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$FlowCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlowCanvas"], {}, void 0, false, {
                fileName: "[project]/src/presentation/canvas/CanvasInitializer.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/canvas/CanvasInitializer.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(CanvasContent, "sPYB6oGchOZlLPmi+fY2JFsWjx4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$hooks$2f$useAutosave$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutosave"]
    ];
});
_c = CanvasContent;
function CanvasInitializer({ projectId, projectName, initialNodes, initialEdges }) {
    _s1();
    const initCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "CanvasInitializer.useCanvasStore[initCanvas]": (state)=>state.initCanvas
    }["CanvasInitializer.useCanvasStore[initCanvas]"]);
    const setProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "CanvasInitializer.useScopeStore[setProjectId]": (state)=>state.setProjectId
    }["CanvasInitializer.useScopeStore[setProjectId]"]);
    const setProjectName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"])({
        "CanvasInitializer.useScopeStore[setProjectName]": (state)=>state.setProjectName
    }["CanvasInitializer.useScopeStore[setProjectName]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasInitializer.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"].getState().resetScope();
            setProjectId(projectId);
            setProjectName(projectName);
            initCanvas(initialNodes, initialEdges);
        }
    }["CanvasInitializer.useEffect"], [
        projectId,
        projectName,
        initialNodes,
        initialEdges,
        initCanvas,
        setProjectId,
        setProjectName
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlowProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasContent, {}, void 0, false, {
            fileName: "[project]/src/presentation/canvas/CanvasInitializer.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/presentation/canvas/CanvasInitializer.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s1(CanvasInitializer, "ArcAkCm1MdJRf0wnZPIUo4pISSc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScopeStore"]
    ];
});
_c1 = CanvasInitializer;
var _c, _c1;
__turbopack_context__.k.register(_c, "CanvasContent");
__turbopack_context__.k.register(_c1, "CanvasInitializer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f82f864f._.js.map