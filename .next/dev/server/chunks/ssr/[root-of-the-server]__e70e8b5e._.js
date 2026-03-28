module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/presentation/canvas/edges/EdgeTypeSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EdgeTypeSelector",
    ()=>EdgeTypeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const EDGE_TYPES = [
    'dependency',
    'data-flow',
    'navigation',
    'api'
];
function EdgeTypeSelector({ onSelect, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            EDGE_TYPES.map((edgeType)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/presentation/stores/canvasStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasStore",
    ()=>useCanvasStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/system/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
;
const useCanvasStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
                const nextNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyNodeChanges"])(changes, state.nodes);
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
                const nextEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyEdgeChanges"])(changes, state.edges);
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
                edges: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addEdge"])(typedEdge, edges),
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
}),
"[project]/src/presentation/canvas/SaveStatusIndicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveStatusIndicator",
    ()=>SaveStatusIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function SaveStatusIndicator() {
    const isSaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.isSaving);
    const pendingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.pendingChanges);
    const lastSavedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.lastSavedAt);
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
    }, [
        isSaving,
        lastSavedAt,
        pendingChanges.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/presentation/stores/scopeStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScopeStore",
    ()=>useScopeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useScopeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
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
}),
"[project]/src/presentation/canvas/nodes/BlockNode.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlockNode",
    ()=>BlockNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/system/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-ssr] (ecmascript)");
'use client';
;
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
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.nodes);
    const updateNodeLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.updateNodeLabel);
    const addPendingChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.addPendingChange);
    const drillInto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.drillInto);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draftLabel, setDraftLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(data.label);
    const color = TYPE_COLORS[data.nodeType] ?? TYPE_COLORS.external;
    const hasChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>nodes.some((node)=>node.parentId === id), [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Top
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Left
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Bottom
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Right
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 10,
                    display: 'grid',
                    gap: 8
                },
                children: [
                    editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    data.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/presentation/canvas/nodeTypes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeTypes",
    ()=>nodeTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$nodes$2f$BlockNode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/nodes/BlockNode.tsx [app-ssr] (ecmascript)");
;
const nodeTypes = {
    blockNode: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$nodes$2f$BlockNode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlockNode"]
};
}),
"[project]/src/app/(protected)/project/[id]/data:400e8a [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addNodeAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40c97509045613d758a035df0a690fb1a6bc964a4a":"addNodeAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40c97509045613d758a035df0a690fb1a6bc964a4a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addNodeAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdElkVk8gPVxyXG4gIHR5cGVvZiBwcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKHByb2plY3RJZClcclxuICAgIDogcHJvamVjdElkO1xyXG5cclxuICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgcHJvamVjdFJlcG9zaXRvcnkuZmluZEJ5SWQocHJvamVjdElkVk8pO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICAgIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogaW5wdXQucHJvamVjdElkLFxyXG4gICAgdHlwZTogaW5wdXQudHlwZSxcclxuICAgIGxhYmVsOiBpbnB1dC5sYWJlbCxcclxuICAgIGRlc2NyaXB0aW9uOiBpbnB1dC5kZXNjcmlwdGlvbixcclxuICAgIHg6IGlucHV0LngsXHJcbiAgICB5OiBpbnB1dC55LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoaW5wdXQucGFyZW50SWQpIHtcclxuICAgIGF3YWl0IG5lc3ROb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IG5vZGUuaWQudG9TdHJpbmcoKSwgcGFyZW50SWQ6IGlucHV0LnBhcmVudElkIH0pO1xyXG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IGF3YWl0IG5vZGVSZXBvc2l0b3J5LmZpbmRCeUlkKG5vZGUuaWQpO1xyXG5cclxuICAgIGlmICghbmVzdGVkTm9kZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2FkIGNyZWF0ZWQgbm9kZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhuZXN0ZWROb2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhub2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBtb3ZlTm9kZSA9IG5ldyBNb3ZlTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBtb3ZlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQsIHg6IGlucHV0LngsIHk6IGlucHV0LnkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgcmVuYW1lTm9kZSA9IG5ldyBSZW5hbWVOb2RlKG5vZGVSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIHJlbmFtZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCBsYWJlbDogaW5wdXQubGFiZWwgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZU5vZGUgPSBuZXcgRGVsZXRlTm9kZShub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gZGVsZXRlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0Tm9kZXNBY3Rpb24oaW5wdXQ6IHtcclxuICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICBzb3VyY2VJZDogc3RyaW5nO1xyXG4gIHRhcmdldElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGNvbm5lY3ROb2RlcyA9IG5ldyBDb25uZWN0Tm9kZXMobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuICBjb25zdCB7IGVkZ2UgfSA9IGF3YWl0IGNvbm5lY3ROb2Rlcy5leGVjdXRlKHtcclxuICAgIHNvdXJjZUlkOiBpbnB1dC5zb3VyY2VJZCxcclxuICAgIHRhcmdldElkOiBpbnB1dC50YXJnZXRJZCxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IGVkZ2U6IGNvcmVFZGdlVG9GbG93KGVkZ2UpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFZGdlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBlZGdlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBlZGdlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgZGVsZXRlRWRnZSA9IG5ldyBEZWxldGVFZGdlKGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZUVkZ2UuZXhlY3V0ZSh7IGVkZ2VJZDogaW5wdXQuZWRnZUlkIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlNBaURzQiwwTEFBQSJ9
}),
"[project]/src/presentation/sidebar/NodePalette.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodePalette",
    ()=>NodePalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$400e8a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:400e8a [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-ssr] (ecmascript)");
'use client';
;
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
    const addNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.addNode);
    const projectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.projectId);
    const currentScopeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.currentScopeId);
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.nodes);
    const parentNode = currentScopeId ? nodes.find((n)=>n.id === currentScopeId) : null;
    const parentType = parentNode?.data.nodeType ?? null;
    const handleCreateNode = async (type)=>{
        if (!projectId) {
            return;
        }
        const { node } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$400e8a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addNodeAction"])({
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
    const ALLOWED_CHILDREN = {
        system: [
            'container',
            'component',
            'page',
            'external'
        ],
        container: [
            'component',
            'page',
            'external'
        ],
        component: [
            'page',
            'external'
        ],
        page: [
            'external'
        ],
        external: []
    };
    const allowedTypes = parentType ? ALLOWED_CHILDREN[parentType] ?? [] : [
        'system'
    ]; // root level
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        style: {
            width: 220,
            borderRight: '1px solid #e5e7eb',
            padding: 12,
            display: 'grid',
            gap: 8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                style: {
                    fontSize: 12,
                    textTransform: 'uppercase'
                },
                children: "Node palette"
            }, void 0, false, {
                fileName: "[project]/src/presentation/sidebar/NodePalette.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            allowedTypes.map((type)=>{
                const typed = type;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>void handleCreateNode(typed),
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
                    lineNumber: 65,
                    columnNumber: 11
                }, this);
            }),
            allowedTypes.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 12,
                    color: '#9ca3af'
                },
                children: "This node cannot contain children"
            }, void 0, false, {
                fileName: "[project]/src/presentation/sidebar/NodePalette.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/sidebar/NodePalette.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/presentation/canvas/FlowCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowCanvas",
    ()=>FlowCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$edges$2f$EdgeTypeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/edges/EdgeTypeSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$SaveStatusIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/SaveStatusIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$nodeTypes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/nodeTypes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$sidebar$2f$NodePalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/sidebar/NodePalette.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-ssr] (ecmascript)");
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
;
function FlowCanvasContent() {
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect, pendingConnection, setPendingConnection, addTypedEdgeFromPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])();
    const currentScopeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.currentScopeId);
    const scopeStackLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.scopeStack.length);
    const drillOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.drillOut);
    const { fitView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const visibleNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>nodes.filter((node)=>currentScopeId ? node.parentId === currentScopeId : !node.parentId), [
        currentScopeId,
        nodes
    ]);
    const visibleNodeIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Set(visibleNodes.map((node)=>node.id)), [
        visibleNodes
    ]);
    const visibleEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>edges.filter((edge)=>visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)), [
        edges,
        visibleNodeIds
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timeoutId = window.setTimeout(()=>{
            fitView({
                duration: 300,
                padding: 0.2
            });
        }, 50);
        return ()=>window.clearTimeout(timeoutId);
    }, [
        currentScopeId,
        fitView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (event)=>{
            if (event.key !== 'Escape' || scopeStackLength === 0) {
                return;
            }
            const activeElement = document.activeElement;
            if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement || activeElement instanceof HTMLSelectElement || activeElement?.getAttribute('contenteditable') === 'true') {
                return;
            }
            event.preventDefault();
            drillOut();
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        drillOut,
        scopeStackLength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            display: 'flex',
            height: '100%',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$sidebar$2f$NodePalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodePalette"], {}, void 0, false, {
                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$SaveStatusIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SaveStatusIndicator"], {}, void 0, false, {
                        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    pendingConnection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$edges$2f$EdgeTypeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgeTypeSelector"], {
                        onSelect: (edgeType)=>addTypedEdgeFromPending(edgeType),
                        onCancel: ()=>setPendingConnection(null)
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this) : null,
                    currentScopeId && visibleNodes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            display: 'grid',
                            placeItems: 'center',
                            zIndex: 5,
                            pointerEvents: 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
                        nodes: visibleNodes,
                        edges: visibleEdges,
                        onNodesChange: onNodesChange,
                        onEdgesChange: onEdgesChange,
                        onConnect: onConnect,
                        nodeTypes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$nodeTypes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nodeTypes"],
                        fitView: true,
                        deleteKeyCode: [
                            'Backspace',
                            'Delete'
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {}, void 0, false, {
                                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {}, void 0, false, {
                                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {
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
function FlowCanvas() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowCanvasContent, {}, void 0, false, {
        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
        lineNumber: 137,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/(protected)/project/[id]/data:dafac0 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectNodesAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4032e5b36e93d74db78e1ad5d5d0543d101eeefae1":"connectNodesAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4032e5b36e93d74db78e1ad5d5d0543d101eeefae1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "connectNodesAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdElkVk8gPVxyXG4gIHR5cGVvZiBwcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKHByb2plY3RJZClcclxuICAgIDogcHJvamVjdElkO1xyXG5cclxuICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgcHJvamVjdFJlcG9zaXRvcnkuZmluZEJ5SWQocHJvamVjdElkVk8pO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICAgIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogaW5wdXQucHJvamVjdElkLFxyXG4gICAgdHlwZTogaW5wdXQudHlwZSxcclxuICAgIGxhYmVsOiBpbnB1dC5sYWJlbCxcclxuICAgIGRlc2NyaXB0aW9uOiBpbnB1dC5kZXNjcmlwdGlvbixcclxuICAgIHg6IGlucHV0LngsXHJcbiAgICB5OiBpbnB1dC55LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoaW5wdXQucGFyZW50SWQpIHtcclxuICAgIGF3YWl0IG5lc3ROb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IG5vZGUuaWQudG9TdHJpbmcoKSwgcGFyZW50SWQ6IGlucHV0LnBhcmVudElkIH0pO1xyXG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IGF3YWl0IG5vZGVSZXBvc2l0b3J5LmZpbmRCeUlkKG5vZGUuaWQpO1xyXG5cclxuICAgIGlmICghbmVzdGVkTm9kZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2FkIGNyZWF0ZWQgbm9kZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhuZXN0ZWROb2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhub2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBtb3ZlTm9kZSA9IG5ldyBNb3ZlTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBtb3ZlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQsIHg6IGlucHV0LngsIHk6IGlucHV0LnkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgcmVuYW1lTm9kZSA9IG5ldyBSZW5hbWVOb2RlKG5vZGVSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIHJlbmFtZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCBsYWJlbDogaW5wdXQubGFiZWwgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZU5vZGUgPSBuZXcgRGVsZXRlTm9kZShub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gZGVsZXRlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0Tm9kZXNBY3Rpb24oaW5wdXQ6IHtcclxuICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICBzb3VyY2VJZDogc3RyaW5nO1xyXG4gIHRhcmdldElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGNvbm5lY3ROb2RlcyA9IG5ldyBDb25uZWN0Tm9kZXMobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuICBjb25zdCB7IGVkZ2UgfSA9IGF3YWl0IGNvbm5lY3ROb2Rlcy5leGVjdXRlKHtcclxuICAgIHNvdXJjZUlkOiBpbnB1dC5zb3VyY2VJZCxcclxuICAgIHRhcmdldElkOiBpbnB1dC50YXJnZXRJZCxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IGVkZ2U6IGNvcmVFZGdlVG9GbG93KGVkZ2UpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFZGdlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBlZGdlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBlZGdlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgZGVsZXRlRWRnZSA9IG5ldyBEZWxldGVFZGdlKGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZUVkZ2UuZXhlY3V0ZSh7IGVkZ2VJZDogaW5wdXQuZWRnZUlkIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoia1RBa0dzQiwrTEFBQSJ9
}),
"[project]/src/app/(protected)/project/[id]/data:10352e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteEdgeAction",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4045b13b674227779ed724cab26c9066fce5ad5473":"deleteEdgeAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4045b13b674227779ed724cab26c9066fce5ad5473", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteEdgeAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdElkVk8gPVxyXG4gIHR5cGVvZiBwcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKHByb2plY3RJZClcclxuICAgIDogcHJvamVjdElkO1xyXG5cclxuICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgcHJvamVjdFJlcG9zaXRvcnkuZmluZEJ5SWQocHJvamVjdElkVk8pO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICAgIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogaW5wdXQucHJvamVjdElkLFxyXG4gICAgdHlwZTogaW5wdXQudHlwZSxcclxuICAgIGxhYmVsOiBpbnB1dC5sYWJlbCxcclxuICAgIGRlc2NyaXB0aW9uOiBpbnB1dC5kZXNjcmlwdGlvbixcclxuICAgIHg6IGlucHV0LngsXHJcbiAgICB5OiBpbnB1dC55LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoaW5wdXQucGFyZW50SWQpIHtcclxuICAgIGF3YWl0IG5lc3ROb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IG5vZGUuaWQudG9TdHJpbmcoKSwgcGFyZW50SWQ6IGlucHV0LnBhcmVudElkIH0pO1xyXG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IGF3YWl0IG5vZGVSZXBvc2l0b3J5LmZpbmRCeUlkKG5vZGUuaWQpO1xyXG5cclxuICAgIGlmICghbmVzdGVkTm9kZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2FkIGNyZWF0ZWQgbm9kZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhuZXN0ZWROb2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhub2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBtb3ZlTm9kZSA9IG5ldyBNb3ZlTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBtb3ZlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQsIHg6IGlucHV0LngsIHk6IGlucHV0LnkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgcmVuYW1lTm9kZSA9IG5ldyBSZW5hbWVOb2RlKG5vZGVSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIHJlbmFtZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCBsYWJlbDogaW5wdXQubGFiZWwgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZU5vZGUgPSBuZXcgRGVsZXRlTm9kZShub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gZGVsZXRlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0Tm9kZXNBY3Rpb24oaW5wdXQ6IHtcclxuICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICBzb3VyY2VJZDogc3RyaW5nO1xyXG4gIHRhcmdldElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGNvbm5lY3ROb2RlcyA9IG5ldyBDb25uZWN0Tm9kZXMobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuICBjb25zdCB7IGVkZ2UgfSA9IGF3YWl0IGNvbm5lY3ROb2Rlcy5leGVjdXRlKHtcclxuICAgIHNvdXJjZUlkOiBpbnB1dC5zb3VyY2VJZCxcclxuICAgIHRhcmdldElkOiBpbnB1dC50YXJnZXRJZCxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IGVkZ2U6IGNvcmVFZGdlVG9GbG93KGVkZ2UpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFZGdlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBlZGdlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBlZGdlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgZGVsZXRlRWRnZSA9IG5ldyBEZWxldGVFZGdlKGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZUVkZ2UuZXhlY3V0ZSh7IGVkZ2VJZDogaW5wdXQuZWRnZUlkIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1RBcUhzQiw2TEFBQSJ9
}),
"[project]/src/app/(protected)/project/[id]/data:42e7b4 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteNodeAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40a40a41f0f6cbb463d87110b5e80b33e301568866":"deleteNodeAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40a40a41f0f6cbb463d87110b5e80b33e301568866", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteNodeAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdElkVk8gPVxyXG4gIHR5cGVvZiBwcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKHByb2plY3RJZClcclxuICAgIDogcHJvamVjdElkO1xyXG5cclxuICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgcHJvamVjdFJlcG9zaXRvcnkuZmluZEJ5SWQocHJvamVjdElkVk8pO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICAgIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogaW5wdXQucHJvamVjdElkLFxyXG4gICAgdHlwZTogaW5wdXQudHlwZSxcclxuICAgIGxhYmVsOiBpbnB1dC5sYWJlbCxcclxuICAgIGRlc2NyaXB0aW9uOiBpbnB1dC5kZXNjcmlwdGlvbixcclxuICAgIHg6IGlucHV0LngsXHJcbiAgICB5OiBpbnB1dC55LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoaW5wdXQucGFyZW50SWQpIHtcclxuICAgIGF3YWl0IG5lc3ROb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IG5vZGUuaWQudG9TdHJpbmcoKSwgcGFyZW50SWQ6IGlucHV0LnBhcmVudElkIH0pO1xyXG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IGF3YWl0IG5vZGVSZXBvc2l0b3J5LmZpbmRCeUlkKG5vZGUuaWQpO1xyXG5cclxuICAgIGlmICghbmVzdGVkTm9kZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2FkIGNyZWF0ZWQgbm9kZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhuZXN0ZWROb2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhub2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBtb3ZlTm9kZSA9IG5ldyBNb3ZlTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBtb3ZlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQsIHg6IGlucHV0LngsIHk6IGlucHV0LnkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgcmVuYW1lTm9kZSA9IG5ldyBSZW5hbWVOb2RlKG5vZGVSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIHJlbmFtZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCBsYWJlbDogaW5wdXQubGFiZWwgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZU5vZGUgPSBuZXcgRGVsZXRlTm9kZShub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gZGVsZXRlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0Tm9kZXNBY3Rpb24oaW5wdXQ6IHtcclxuICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICBzb3VyY2VJZDogc3RyaW5nO1xyXG4gIHRhcmdldElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGNvbm5lY3ROb2RlcyA9IG5ldyBDb25uZWN0Tm9kZXMobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuICBjb25zdCB7IGVkZ2UgfSA9IGF3YWl0IGNvbm5lY3ROb2Rlcy5leGVjdXRlKHtcclxuICAgIHNvdXJjZUlkOiBpbnB1dC5zb3VyY2VJZCxcclxuICAgIHRhcmdldElkOiBpbnB1dC50YXJnZXRJZCxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IGVkZ2U6IGNvcmVFZGdlVG9GbG93KGVkZ2UpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFZGdlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBlZGdlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBlZGdlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgZGVsZXRlRWRnZSA9IG5ldyBEZWxldGVFZGdlKGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZUVkZ2UuZXhlY3V0ZSh7IGVkZ2VJZDogaW5wdXQuZWRnZUlkIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1RBMkZzQiw2TEFBQSJ9
}),
"[project]/src/app/(protected)/project/[id]/data:618f7d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveNodeAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4040aa00d86ac5206ca4698f4cfda2904a8fb2d140":"moveNodeAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4040aa00d86ac5206ca4698f4cfda2904a8fb2d140", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "moveNodeAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdElkVk8gPVxyXG4gIHR5cGVvZiBwcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKHByb2plY3RJZClcclxuICAgIDogcHJvamVjdElkO1xyXG5cclxuICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgcHJvamVjdFJlcG9zaXRvcnkuZmluZEJ5SWQocHJvamVjdElkVk8pO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICAgIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogaW5wdXQucHJvamVjdElkLFxyXG4gICAgdHlwZTogaW5wdXQudHlwZSxcclxuICAgIGxhYmVsOiBpbnB1dC5sYWJlbCxcclxuICAgIGRlc2NyaXB0aW9uOiBpbnB1dC5kZXNjcmlwdGlvbixcclxuICAgIHg6IGlucHV0LngsXHJcbiAgICB5OiBpbnB1dC55LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoaW5wdXQucGFyZW50SWQpIHtcclxuICAgIGF3YWl0IG5lc3ROb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IG5vZGUuaWQudG9TdHJpbmcoKSwgcGFyZW50SWQ6IGlucHV0LnBhcmVudElkIH0pO1xyXG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IGF3YWl0IG5vZGVSZXBvc2l0b3J5LmZpbmRCeUlkKG5vZGUuaWQpO1xyXG5cclxuICAgIGlmICghbmVzdGVkTm9kZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2FkIGNyZWF0ZWQgbm9kZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhuZXN0ZWROb2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhub2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBtb3ZlTm9kZSA9IG5ldyBNb3ZlTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBtb3ZlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQsIHg6IGlucHV0LngsIHk6IGlucHV0LnkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgcmVuYW1lTm9kZSA9IG5ldyBSZW5hbWVOb2RlKG5vZGVSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIHJlbmFtZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCBsYWJlbDogaW5wdXQubGFiZWwgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZU5vZGUgPSBuZXcgRGVsZXRlTm9kZShub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gZGVsZXRlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0Tm9kZXNBY3Rpb24oaW5wdXQ6IHtcclxuICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICBzb3VyY2VJZDogc3RyaW5nO1xyXG4gIHRhcmdldElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGNvbm5lY3ROb2RlcyA9IG5ldyBDb25uZWN0Tm9kZXMobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuICBjb25zdCB7IGVkZ2UgfSA9IGF3YWl0IGNvbm5lY3ROb2Rlcy5leGVjdXRlKHtcclxuICAgIHNvdXJjZUlkOiBpbnB1dC5zb3VyY2VJZCxcclxuICAgIHRhcmdldElkOiBpbnB1dC50YXJnZXRJZCxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IGVkZ2U6IGNvcmVFZGdlVG9GbG93KGVkZ2UpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFZGdlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBlZGdlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBlZGdlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgZGVsZXRlRWRnZSA9IG5ldyBEZWxldGVFZGdlKGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZUVkZ2UuZXhlY3V0ZSh7IGVkZ2VJZDogaW5wdXQuZWRnZUlkIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFNBNkVzQiwyTEFBQSJ9
}),
"[project]/src/app/(protected)/project/[id]/data:c66341 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renameNodeAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4066bb889675452b110e56705ad69a9a42dd154522":"renameNodeAction"},"src/app/(protected)/project/[id]/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4066bb889675452b110e56705ad69a9a42dd154522", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "renameNodeAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBBZGROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9BZGROb2RlJztcclxuaW1wb3J0IHsgRGVsZXRlTm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBwbGljYXRpb24vdXNlLWNhc2VzL25vZGUvRGVsZXRlTm9kZSc7XHJcbmltcG9ydCB7IE1vdmVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9Nb3ZlTm9kZSc7XHJcbmltcG9ydCB7IE5lc3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHBsaWNhdGlvbi91c2UtY2FzZXMvbm9kZS9OZXN0Tm9kZSc7XHJcbmltcG9ydCB7IFJlbmFtZU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9ub2RlL1JlbmFtZU5vZGUnO1xyXG5pbXBvcnQgeyBDb25uZWN0Tm9kZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0Nvbm5lY3ROb2Rlcyc7XHJcbmltcG9ydCB7IERlbGV0ZUVkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9lZGdlL0RlbGV0ZUVkZ2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi92YWx1ZS1vYmplY3RzL1Byb2plY3RJZCc7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhc3RydWN0dXJlL2F1dGgvZ2V0VXNlcklkJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFByaXNtYUVkZ2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFFZGdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYU5vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFOb2RlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFByaXNtYVByb2plY3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvcHJpc21hL3JlcG9zaXRvcmllcy9QcmlzbWFQcm9qZWN0UmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IGNvcmVFZGdlVG9GbG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlc2VudGF0aW9uL2NhbnZhcy9tYXBwZXJzL2VkZ2VNYXBwZXInO1xyXG5pbXBvcnQgeyBjb3JlTm9kZVRvRmxvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3ByZXNlbnRhdGlvbi9jYW52YXMvbWFwcGVycy9ub2RlTWFwcGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFzc2VydE93bmVyc2hpcChwcm9qZWN0SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByaXNtYVByb2plY3RSZXBvc2l0b3J5KHByaXNtYSk7XHJcbiAgY29uc3QgcHJvamVjdElkVk8gPVxyXG4gIHR5cGVvZiBwcm9qZWN0SWQgPT09ICdzdHJpbmcnXHJcbiAgICA/IFByb2plY3RJZC5mcm9tKHByb2plY3RJZClcclxuICAgIDogcHJvamVjdElkO1xyXG5cclxuICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgcHJvamVjdFJlcG9zaXRvcnkuZmluZEJ5SWQocHJvamVjdElkVk8pO1xyXG5cclxuICBpZiAoIXByb2plY3QgfHwgcHJvamVjdC5vd25lcklkICE9PSB1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbm9kZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFOb2RlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgZWRnZVJlcG9zaXRvcnk6IG5ldyBQcmlzbWFFZGdlUmVwb3NpdG9yeShwcmlzbWEpLFxyXG4gICAgcHJvamVjdFJlcG9zaXRvcnksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBBZGROb2RlSW5wdXQgPSB7XHJcbiAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICBwYXJlbnRJZD86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb2RlQWN0aW9uKGlucHV0OiBBZGROb2RlSW5wdXQpIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5LCBwcm9qZWN0UmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgYWRkTm9kZSA9IG5ldyBBZGROb2RlKHByb2plY3RSZXBvc2l0b3J5LCBub2RlUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgbmVzdE5vZGUgPSBuZXcgTmVzdE5vZGUobm9kZVJlcG9zaXRvcnkpO1xyXG5cclxuICAgIGNvbnN0IHsgbm9kZSB9ID0gYXdhaXQgYWRkTm9kZS5leGVjdXRlKHtcclxuICAgIHByb2plY3RJZDogaW5wdXQucHJvamVjdElkLFxyXG4gICAgdHlwZTogaW5wdXQudHlwZSxcclxuICAgIGxhYmVsOiBpbnB1dC5sYWJlbCxcclxuICAgIGRlc2NyaXB0aW9uOiBpbnB1dC5kZXNjcmlwdGlvbixcclxuICAgIHg6IGlucHV0LngsXHJcbiAgICB5OiBpbnB1dC55LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoaW5wdXQucGFyZW50SWQpIHtcclxuICAgIGF3YWl0IG5lc3ROb2RlLmV4ZWN1dGUoeyBub2RlSWQ6IG5vZGUuaWQudG9TdHJpbmcoKSwgcGFyZW50SWQ6IGlucHV0LnBhcmVudElkIH0pO1xyXG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IGF3YWl0IG5vZGVSZXBvc2l0b3J5LmZpbmRCeUlkKG5vZGUuaWQpO1xyXG5cclxuICAgIGlmICghbmVzdGVkTm9kZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2FkIGNyZWF0ZWQgbm9kZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhuZXN0ZWROb2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBub2RlOiBjb3JlTm9kZVRvRmxvdyhub2RlLCBpbnB1dC5wcm9qZWN0SWQpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlTm9kZUFjdGlvbihpbnB1dDogeyBwcm9qZWN0SWQ6IHN0cmluZzsgbm9kZUlkOiBzdHJpbmc7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICBjb25zdCB7IG5vZGVSZXBvc2l0b3J5IH0gPSBhd2FpdCBhc3NlcnRPd25lcnNoaXAoaW5wdXQucHJvamVjdElkKTtcclxuICBjb25zdCBtb3ZlTm9kZSA9IG5ldyBNb3ZlTm9kZShub2RlUmVwb3NpdG9yeSk7XHJcblxyXG4gIHJldHVybiBtb3ZlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQsIHg6IGlucHV0LngsIHk6IGlucHV0LnkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgcmVuYW1lTm9kZSA9IG5ldyBSZW5hbWVOb2RlKG5vZGVSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIHJlbmFtZU5vZGUuZXhlY3V0ZSh7IG5vZGVJZDogaW5wdXQubm9kZUlkLCBsYWJlbDogaW5wdXQubGFiZWwgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVOb2RlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBub2RlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGRlbGV0ZU5vZGUgPSBuZXcgRGVsZXRlTm9kZShub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkpO1xyXG5cclxuICByZXR1cm4gZGVsZXRlTm9kZS5leGVjdXRlKHsgbm9kZUlkOiBpbnB1dC5ub2RlSWQgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0Tm9kZXNBY3Rpb24oaW5wdXQ6IHtcclxuICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICBzb3VyY2VJZDogc3RyaW5nO1xyXG4gIHRhcmdldElkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgeyBub2RlUmVwb3NpdG9yeSwgZWRnZVJlcG9zaXRvcnkgfSA9IGF3YWl0IGFzc2VydE93bmVyc2hpcChpbnB1dC5wcm9qZWN0SWQpO1xyXG4gIGNvbnN0IGNvbm5lY3ROb2RlcyA9IG5ldyBDb25uZWN0Tm9kZXMobm9kZVJlcG9zaXRvcnksIGVkZ2VSZXBvc2l0b3J5KTtcclxuICBjb25zdCB7IGVkZ2UgfSA9IGF3YWl0IGNvbm5lY3ROb2Rlcy5leGVjdXRlKHtcclxuICAgIHNvdXJjZUlkOiBpbnB1dC5zb3VyY2VJZCxcclxuICAgIHRhcmdldElkOiBpbnB1dC50YXJnZXRJZCxcclxuICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICBsYWJlbDogaW5wdXQubGFiZWwsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IGVkZ2U6IGNvcmVFZGdlVG9GbG93KGVkZ2UpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFZGdlQWN0aW9uKGlucHV0OiB7IHByb2plY3RJZDogc3RyaW5nOyBlZGdlSWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBlZGdlUmVwb3NpdG9yeSB9ID0gYXdhaXQgYXNzZXJ0T3duZXJzaGlwKGlucHV0LnByb2plY3RJZCk7XHJcbiAgY29uc3QgZGVsZXRlRWRnZSA9IG5ldyBEZWxldGVFZGdlKGVkZ2VSZXBvc2l0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZUVkZ2UuZXhlY3V0ZSh7IGVkZ2VJZDogaW5wdXQuZWRnZUlkIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1RBb0ZzQiw2TEFBQSJ9
}),
"[project]/src/presentation/canvas/hooks/useAutosave.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAutosave",
    ()=>useAutosave
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$dafac0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:dafac0 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$10352e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:10352e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$42e7b4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:42e7b4 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$618f7d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:618f7d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$c66341__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/data:c66341 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const DEBOUNCE_MS = 1000;
async function processChange(change, projectId) {
    if (change.type === 'move') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$618f7d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["moveNodeAction"])({
            projectId,
            nodeId: change.nodeId,
            x: change.x,
            y: change.y
        });
        return;
    }
    if (change.type === 'rename') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$c66341__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["renameNodeAction"])({
            projectId,
            nodeId: change.nodeId,
            label: change.label
        });
        return;
    }
    if (change.type === 'delete-node') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$42e7b4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteNodeAction"])({
            projectId,
            nodeId: change.nodeId
        });
        return;
    }
    if (change.type === 'connect-edge') {
        const { edge } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$dafac0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["connectNodesAction"])({
            projectId,
            sourceId: change.sourceId,
            targetId: change.targetId,
            type: change.edgeType,
            label: change.label
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().replaceEdgeId(change.tempEdgeId, edge.id);
        return;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$data$3a$10352e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteEdgeAction"])({
        projectId,
        edgeId: change.edgeId
    });
}
function useAutosave() {
    const projectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.projectId);
    const pendingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.pendingChanges);
    const isSaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.isSaving);
    const setSaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.setSaving);
    const clearPendingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.clearPendingChanges);
    const addPendingChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.addPendingChange);
    const markSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.markSaved);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!projectId || pendingChanges.length === 0 || isSaving) {
            return;
        }
        timerRef.current = window.setTimeout(async ()=>{
            const snapshot = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().pendingChanges
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
                snapshot.forEach((change)=>addPendingChange(change));
                setSaving(false);
                console.error('Autosave failed', error);
            }
        }, DEBOUNCE_MS);
        return ()=>{
            if (timerRef.current) {
                window.clearTimeout(timerRef.current);
            }
        };
    }, [
        addPendingChange,
        clearPendingChanges,
        isSaving,
        markSaved,
        pendingChanges,
        projectId,
        setSaving
    ]);
}
}),
"[project]/src/presentation/navigation/Breadcrumb.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Breadcrumb() {
    const projectName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.projectName);
    const scopeStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.scopeStack);
    const resetScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.resetScope);
    const jumpTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.jumpTo);
    const drillOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.drillOut);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#9ca3af'
                                    },
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/navigation/Breadcrumb.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/presentation/canvas/CanvasInitializer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasInitializer",
    ()=>CanvasInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$FlowCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/FlowCanvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$hooks$2f$useAutosave$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/hooks/useAutosave.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$navigation$2f$Breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/navigation/Breadcrumb.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function CanvasContent() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$hooks$2f$useAutosave$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAutosave"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$navigation$2f$Breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Breadcrumb"], {}, void 0, false, {
                fileName: "[project]/src/presentation/canvas/CanvasInitializer.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$FlowCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowCanvas"], {}, void 0, false, {
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
function CanvasInitializer({ projectId, projectName, initialNodes, initialEdges }) {
    const initCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.initCanvas);
    const setProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.setProjectId);
    const setProjectName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.setProjectName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"].getState().resetScope();
        setProjectId(projectId);
        setProjectName(projectName);
        initCanvas(initialNodes, initialEdges);
    }, [
        projectId,
        projectName,
        initialNodes,
        initialEdges,
        initCanvas,
        setProjectId,
        setProjectName
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlowProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasContent, {}, void 0, false, {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e70e8b5e._.js.map