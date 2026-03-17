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
        initCanvas: (nodes, edges)=>set({
                nodes,
                edges
            }),
        onNodesChange: (changes)=>set((state)=>({
                    nodes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyNodeChanges"])(changes, state.nodes)
                })),
        onEdgesChange: (changes)=>set((state)=>({
                    edges: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyEdgeChanges"])(changes, state.edges)
                })),
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
        }
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
    const updateNodeLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.updateNodeLabel);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draftLabel, setDraftLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(data.label);
    const color = TYPE_COLORS[data.nodeType] ?? TYPE_COLORS.external;
    const commitLabel = ()=>{
        const trimmed = draftLabel.trim();
        if (!trimmed) {
            setDraftLabel(data.label);
            setEditing(false);
            return;
        }
        updateNodeLabel(id, trimmed);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minWidth: 180,
            border: `1px solid ${color.border}`,
            borderRadius: 10,
            overflow: 'hidden',
            background: color.background,
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Top
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Left
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Bottom
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Right
            }, void 0, false, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 62,
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
                lineNumber: 64,
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
                        lineNumber: 80,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onDoubleClick: ()=>setEditing(true),
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
                        lineNumber: 94,
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
                        lineNumber: 111,
                        columnNumber: 29
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/canvas/nodes/BlockNode.tsx",
        lineNumber: 49,
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
"[project]/src/core/domain/errors/DomainError.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DomainError",
    ()=>DomainError
]);
class DomainError extends Error {
    code;
    constructor(message, code = 'DOMAIN_ERROR'){
        super(message);
        this.name = new.target.name;
        this.code = code;
    }
}
}),
"[project]/src/core/domain/errors/InvalidNestingError.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidNestingError",
    ()=>InvalidNestingError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class InvalidNestingError extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(parentType, childType){
        super(`Invalid nesting: ${parentType} cannot contain ${childType}`, 'INVALID_NESTING');
    }
}
}),
"[project]/src/core/domain/entities/Node.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Node",
    ()=>Node
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$InvalidNestingError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/InvalidNestingError.ts [app-ssr] (ecmascript)");
;
class Node {
    id;
    type;
    label;
    description;
    position;
    parentId;
    constructor(props){
        this.id = props.id;
        this.type = props.type;
        this.label = props.label;
        this.description = props.description;
        this.position = props.position;
        this.parentId = props.parentId;
    }
    rename(newLabel) {
        const label = newLabel.trim();
        if (!label) {
            throw new Error('Node label cannot be empty');
        }
        return new Node({
            ...this,
            label
        });
    }
    moveTo(position) {
        return new Node({
            ...this,
            position
        });
    }
    nestUnder(parentNode) {
        if (!parentNode.type.canContain(this.type)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$InvalidNestingError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidNestingError"](parentNode.type.toString(), this.type.toString());
        }
        return new Node({
            ...this,
            parentId: parentNode.id
        });
    }
    detach() {
        return new Node({
            ...this,
            parentId: undefined
        });
    }
}
}),
"[project]/src/core/domain/value-objects/NodeId.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeId",
    ()=>NodeId
]);
const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
class NodeId {
    value;
    constructor(value){
        this.value = value;
    }
    static create() {
        return new NodeId(crypto.randomUUID());
    }
    static from(value) {
        if (!UUID_V4_REGEX.test(value)) {
            throw new Error(`Invalid NodeId: ${value}`);
        }
        return new NodeId(value);
    }
    equals(other) {
        return this.value === other.value;
    }
    toString() {
        return this.value;
    }
}
}),
"[project]/src/core/domain/value-objects/NodeType.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeType",
    ()=>NodeType
]);
const ALLOWED_CHILDREN = {
    system: [
        'container',
        'external'
    ],
    container: [
        'component',
        'page'
    ],
    component: [],
    page: [],
    external: []
};
class NodeType {
    value;
    constructor(value){
        this.value = value;
    }
    static from(value) {
        const lower = value.toLowerCase();
        if (!(lower in ALLOWED_CHILDREN)) {
            throw new Error(`Invalid NodeType: ${value}`);
        }
        return new NodeType(lower);
    }
    canContain(childType) {
        return ALLOWED_CHILDREN[this.value].includes(childType.value);
    }
    equals(other) {
        return this.value === other.value;
    }
    toString() {
        return this.value;
    }
}
}),
"[project]/src/core/domain/value-objects/Position.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Position",
    ()=>Position
]);
class Position {
    x;
    y;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static from(x, y) {
        return new Position(x, y);
    }
    static origin() {
        return new Position(0, 0);
    }
    translate(dx, dy) {
        return new Position(this.x + dx, this.y + dy);
    }
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
}
}),
"[project]/src/presentation/canvas/mappers/nodeMapper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coreNodeToFlow",
    ()=>coreNodeToFlow,
    "flowNodeToCore",
    ()=>flowNodeToCore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeType.ts [app-ssr] (ecmascript)");
;
;
const coreNodeToFlow = (node, projectId)=>({
        id: node.id.toString(),
        type: 'blockNode',
        position: {
            x: node.position.x,
            y: node.position.y
        },
        parentId: node.parentId?.toString(),
        data: {
            label: node.label,
            nodeType: node.type.toString(),
            description: node.description,
            projectId
        }
    });
const flowNodeToCore = (node)=>({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeId"].from(node.id).toString(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeType"].from(node.data.nodeType).toString(),
        label: node.data.label,
        description: node.data.description,
        parentId: node.parentId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeId"].from(node.parentId).toString() : undefined,
        position: {
            x: node.position.x,
            y: node.position.y
        }
    });
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
        setProjectId: (projectId)=>set({
                projectId
            })
    }));
}),
"[project]/src/presentation/sidebar/NodePalette.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodePalette",
    ()=>NodePalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Node$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/entities/Node.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$Position$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/Position.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$nodeMapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/mappers/nodeMapper.ts [app-ssr] (ecmascript)");
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
    const handleCreateNode = (type)=>{
        if (!projectId) {
            return;
        }
        const coreNode = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Node$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"]({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeId"].create(),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeType"].from(type),
            label: `${type} node`,
            description: '',
            position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$Position$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].from(Math.floor(Math.random() * 260), Math.floor(Math.random() * 260))
        });
        addNode((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$nodeMapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["coreNodeToFlow"])(coreNode, projectId));
    };
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
                lineNumber: 43,
                columnNumber: 7
            }, this),
            NODE_TYPES.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>handleCreateNode(type),
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
                    lineNumber: 45,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/sidebar/NodePalette.tsx",
        lineNumber: 34,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$edges$2f$EdgeTypeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/edges/EdgeTypeSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$nodeTypes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/nodeTypes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$sidebar$2f$NodePalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/sidebar/NodePalette.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function FlowCanvas() {
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect, removeNode, removeEdge, pendingConnection, setPendingConnection, addTypedEdgeFromPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            display: 'flex',
            height: '100vh',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$sidebar$2f$NodePalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodePalette"], {}, void 0, false, {
                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    position: 'relative'
                },
                children: [
                    pendingConnection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$edges$2f$EdgeTypeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgeTypeSelector"], {
                        onSelect: (edgeType)=>addTypedEdgeFromPending(edgeType),
                        onCancel: ()=>setPendingConnection(null)
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
                        nodes: nodes,
                        edges: edges,
                        onNodesChange: onNodesChange,
                        onEdgesChange: onEdgesChange,
                        onConnect: onConnect,
                        onNodesDelete: (deletedNodes)=>{
                            deletedNodes.forEach((node)=>removeNode(node.id));
                        },
                        onEdgesDelete: (deletedEdges)=>{
                            deletedEdges.forEach((edge)=>removeEdge(edge.id));
                        },
                        nodeTypes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$nodeTypes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nodeTypes"],
                        fitView: true,
                        deleteKeyCode: [
                            'Backspace',
                            'Delete'
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {}, void 0, false, {
                                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {}, void 0, false, {
                                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {
                                gap: 18,
                                size: 1
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/canvas/FlowCanvas.tsx",
        lineNumber: 27,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/canvasStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/stores/scopeStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CanvasInitializer({ projectId, initialNodes, initialEdges }) {
    const initCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$canvasStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"])((state)=>state.initCanvas);
    const setProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$stores$2f$scopeStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScopeStore"])((state)=>state.setProjectId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setProjectId(projectId);
        initCanvas(initialNodes, initialEdges);
    }, [
        projectId,
        initialNodes,
        initialEdges,
        initCanvas,
        setProjectId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlowProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$FlowCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowCanvas"], {}, void 0, false, {
            fileName: "[project]/src/presentation/canvas/CanvasInitializer.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/presentation/canvas/CanvasInitializer.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__488afb48._.js.map