module.exports = [
"[project]/src/core/domain/errors/DomainError.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/core/domain/errors/InvalidNestingError.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidNestingError",
    ()=>InvalidNestingError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/DomainError.ts [app-rsc] (ecmascript)");
;
class InvalidNestingError extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(parentType, childType){
        super(`Invalid nesting: ${parentType} cannot contain ${childType}`, 'INVALID_NESTING');
    }
}
}),
"[project]/src/core/domain/entities/Node.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Node",
    ()=>Node
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$InvalidNestingError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/InvalidNestingError.ts [app-rsc] (ecmascript)");
;
class Node {
    id;
    type;
    label;
    description;
    position;
    projectId;
    parentId;
    constructor(props){
        this.id = props.id;
        this.type = props.type;
        this.label = props.label;
        this.description = props.description;
        this.position = props.position;
        this.projectId = props.projectId; // ✅ NEW
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$InvalidNestingError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidNestingError"](parentNode.type.toString(), this.type.toString());
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
"[project]/src/core/domain/errors/ProjectNotFoundError.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectNotFoundError",
    ()=>ProjectNotFoundError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/DomainError.ts [app-rsc] (ecmascript)");
;
class ProjectNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(projectId){
        super(`Project not found: ${projectId}`, 'PROJECT_NOT_FOUND');
    }
}
}),
"[project]/src/core/domain/value-objects/NodeId.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/core/domain/value-objects/NodeType.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeType",
    ()=>NodeType
]);
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
"[project]/src/core/domain/value-objects/Position.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/core/domain/value-objects/ProjectId.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectId",
    ()=>ProjectId
]);
const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
class ProjectId {
    value;
    constructor(value){
        this.value = value;
    }
    static create() {
        return new ProjectId(crypto.randomUUID());
    }
    static from(value) {
        if (!UUID_V4_REGEX.test(value)) {
            throw new Error(`Invalid ProjectId: ${value}`);
        }
        return new ProjectId(value);
    }
    equals(other) {
        return this.value === other.value;
    }
    toString() {
        return this.value;
    }
}
}),
"[project]/src/core/application/use-cases/node/AddNode.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddNode",
    ()=>AddNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Node$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/entities/Node.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$ProjectNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/ProjectNotFoundError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeType.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$Position$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/Position.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/ProjectId.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
class AddNode {
    projectRepository;
    nodeRepository;
    constructor(projectRepository, nodeRepository){
        this.projectRepository = projectRepository;
        this.nodeRepository = nodeRepository;
    }
    async execute(input) {
        const projectId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectId"].from(input.projectId);
        const project = await this.projectRepository.findById(projectId);
        if (!project) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$ProjectNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectNotFoundError"](projectId.toString());
        }
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Node$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Node"]({
            projectId,
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].create(),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeType"].from(input.type),
            label: input.label,
            description: input.description,
            position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$Position$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Position"].from(input.x ?? 0, input.y ?? 0)
        });
        await this.nodeRepository.save(node, projectId);
        return {
            node
        };
    }
}
}),
"[project]/src/core/domain/errors/NodeNotFoundError.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeNotFoundError",
    ()=>NodeNotFoundError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/DomainError.ts [app-rsc] (ecmascript)");
;
class NodeNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(nodeId){
        super(`Node not found: ${nodeId}`, 'NODE_NOT_FOUND');
    }
}
}),
"[project]/src/core/application/use-cases/node/DeleteNode.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteNode",
    ()=>DeleteNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/NodeNotFoundError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-rsc] (ecmascript)");
;
;
class DeleteNode {
    nodeRepository;
    edgeRepository;
    constructor(nodeRepository, edgeRepository){
        this.nodeRepository = nodeRepository;
        this.edgeRepository = edgeRepository;
    }
    async execute(input) {
        const nodeId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(input.nodeId);
        const existing = await this.nodeRepository.findById(nodeId);
        if (!existing) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNotFoundError"](nodeId.toString());
        }
        if (this.edgeRepository) {
            const connectedEdges = await this.edgeRepository.findByNode(nodeId);
            await Promise.all(connectedEdges.map((edge)=>this.edgeRepository.delete(edge.id)));
        }
        await this.nodeRepository.delete(nodeId);
        return {
            deleted: true
        };
    }
}
}),
"[project]/src/core/application/use-cases/node/MoveNode.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveNode",
    ()=>MoveNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/NodeNotFoundError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$Position$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/Position.ts [app-rsc] (ecmascript)");
;
;
;
class MoveNode {
    nodeRepository;
    constructor(nodeRepository){
        this.nodeRepository = nodeRepository;
    }
    async execute(input) {
        const nodeId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(input.nodeId);
        const node = await this.nodeRepository.findById(nodeId);
        if (!node) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNotFoundError"](nodeId.toString());
        }
        const moved = node.moveTo(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$Position$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Position"].from(input.x, input.y));
        await this.nodeRepository.save(moved, node.projectId);
        return {
            nodeId: moved.id.toString(),
            x: moved.position.x,
            y: moved.position.y
        };
    }
}
}),
"[project]/src/core/application/use-cases/node/NestNode.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NestNode",
    ()=>NestNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/NodeNotFoundError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-rsc] (ecmascript)");
;
;
class NestNode {
    nodeRepository;
    constructor(nodeRepository){
        this.nodeRepository = nodeRepository;
    }
    async execute(input) {
        const nodeId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(input.nodeId);
        const parentId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(input.parentId);
        const node = await this.nodeRepository.findById(nodeId);
        if (!node) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNotFoundError"](nodeId.toString());
        }
        const parent = await this.nodeRepository.findById(parentId);
        if (!parent) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNotFoundError"](parentId.toString());
        }
        const nested = node.nestUnder(parent);
        await this.nodeRepository.save(nested, node.projectId);
        return {
            nodeId: nested.id.toString(),
            parentId: parent.id.toString()
        };
    }
}
}),
"[project]/src/core/application/use-cases/node/RenameNode.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenameNode",
    ()=>RenameNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/NodeNotFoundError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-rsc] (ecmascript)");
;
;
class RenameNode {
    nodeRepository;
    constructor(nodeRepository){
        this.nodeRepository = nodeRepository;
    }
    async execute(input) {
        const nodeId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(input.nodeId);
        const node = await this.nodeRepository.findById(nodeId);
        if (!node) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNotFoundError"](nodeId.toString());
        }
        const renamed = node.rename(input.label);
        await this.nodeRepository.save(renamed);
        return {
            nodeId: renamed.id.toString(),
            label: renamed.label
        };
    }
}
}),
"[project]/src/core/domain/entities/Edge.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Edge",
    ()=>Edge
]);
class Edge {
    id;
    type;
    sourceId;
    targetId;
    label;
    constructor(props){
        if (props.sourceId.equals(props.targetId)) {
            throw new Error('Edge cannot connect node to itself');
        }
        this.id = props.id;
        this.type = props.type;
        this.sourceId = props.sourceId;
        this.targetId = props.targetId;
        this.label = props.label;
    }
    relabel(label) {
        return new Edge({
            ...this,
            label: label?.trim() || undefined
        });
    }
    connectsNode(nodeId) {
        return this.sourceId.equals(nodeId) || this.targetId.equals(nodeId);
    }
}
}),
"[project]/src/core/domain/value-objects/EdgeId.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EdgeId",
    ()=>EdgeId
]);
const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
class EdgeId {
    value;
    constructor(value){
        this.value = value;
    }
    static create() {
        return new EdgeId(crypto.randomUUID());
    }
    static from(value) {
        if (!UUID_V4_REGEX.test(value)) {
            throw new Error(`Invalid EdgeId: ${value}`);
        }
        return new EdgeId(value);
    }
    equals(other) {
        return this.value === other.value;
    }
    toString() {
        return this.value;
    }
}
}),
"[project]/src/core/domain/value-objects/EdgeType.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EdgeType",
    ()=>EdgeType
]);
const EDGE_TYPES = [
    'dependency',
    'data-flow',
    'navigation',
    'api'
];
class EdgeType {
    value;
    constructor(value){
        this.value = value;
    }
    static from(value) {
        const normalized = value.toLowerCase();
        if (!EDGE_TYPES.includes(normalized)) {
            throw new Error(`Invalid EdgeType: ${value}`);
        }
        return new EdgeType(normalized);
    }
    equals(other) {
        return this.value === other.value;
    }
    toString() {
        return this.value;
    }
}
}),
"[project]/src/core/application/use-cases/edge/ConnectNodes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectNodes",
    ()=>ConnectNodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Edge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/entities/Edge.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/NodeNotFoundError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/EdgeId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/EdgeType.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-rsc] (ecmascript)");
;
;
;
;
;
class ConnectNodes {
    nodeRepository;
    edgeRepository;
    constructor(nodeRepository, edgeRepository){
        this.nodeRepository = nodeRepository;
        this.edgeRepository = edgeRepository;
    }
    async execute(input) {
        const sourceId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(input.sourceId);
        const targetId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(input.targetId);
        const source = await this.nodeRepository.findById(sourceId);
        if (!source) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNotFoundError"](sourceId.toString());
        }
        const target = await this.nodeRepository.findById(targetId);
        if (!target) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$NodeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNotFoundError"](targetId.toString());
        }
        const edge = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Edge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Edge"]({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeId"].create(),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeType"].from(input.type),
            sourceId,
            targetId,
            label: input.label
        });
        await this.edgeRepository.save(edge);
        return {
            edge
        };
    }
}
}),
"[project]/src/core/domain/errors/EdgeNotFoundError.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EdgeNotFoundError",
    ()=>EdgeNotFoundError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/DomainError.ts [app-rsc] (ecmascript)");
;
class EdgeNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(edgeId){
        super(`Edge not found: ${edgeId}`, 'EDGE_NOT_FOUND');
    }
}
}),
"[project]/src/core/application/use-cases/edge/DeleteEdge.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteEdge",
    ()=>DeleteEdge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$EdgeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/EdgeNotFoundError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/EdgeId.ts [app-rsc] (ecmascript)");
;
;
class DeleteEdge {
    edgeRepository;
    constructor(edgeRepository){
        this.edgeRepository = edgeRepository;
    }
    async execute(input) {
        const edgeId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeId"].from(input.edgeId);
        const edge = await this.edgeRepository.findById(edgeId);
        if (!edge) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$EdgeNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeNotFoundError"](edgeId.toString());
        }
        await this.edgeRepository.delete(edgeId);
        return {
            deleted: true
        };
    }
}
}),
"[project]/src/infrastructure/persistence/prisma/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const prisma = globalThis.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        'query',
        'error',
        'warn'
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) {
    globalThis.prisma = prisma;
}
}),
"[project]/src/infrastructure/persistence/prisma/mappers/EdgeMapper.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EdgeMapper",
    ()=>EdgeMapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Edge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/entities/Edge.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/EdgeId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/EdgeType.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-rsc] (ecmascript)");
;
;
;
;
class EdgeMapper {
    static toDomain(record) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Edge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Edge"]({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeId"].from(record.id),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeType"].from(record.type),
            sourceId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(record.sourceId),
            targetId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(record.targetId),
            label: record.label ?? undefined
        });
    }
    static toPrismaCreate(edge, projectId) {
        return {
            id: edge.id.value,
            type: edge.type.value,
            label: edge.label ?? null,
            projectId: projectId,
            sourceId: edge.sourceId.value,
            targetId: edge.targetId.value
        };
    }
    static toPrismaUpdate(edge) {
        return {
            type: edge.type.value,
            label: edge.label ?? null,
            sourceId: edge.sourceId.value,
            targetId: edge.targetId.value
        };
    }
}
}),
"[project]/src/infrastructure/persistence/prisma/repositories/PrismaEdgeRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrismaEdgeRepository",
    ()=>PrismaEdgeRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$EdgeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/mappers/EdgeMapper.ts [app-rsc] (ecmascript)");
;
class PrismaEdgeRepository {
    prisma;
    constructor(prisma){
        this.prisma = prisma;
    }
    async findById(id) {
        const record = await this.prisma.edge.findUnique({
            where: {
                id: id.value
            }
        });
        return record ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$EdgeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeMapper"].toDomain(record) : null;
    }
    async findAllByProject(projectId) {
        const records = await this.prisma.edge.findMany({
            where: {
                projectId: projectId.value
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        return records.map((record)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$EdgeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeMapper"].toDomain(record));
    }
    async findByNode(nodeId) {
        const records = await this.prisma.edge.findMany({
            where: {
                OR: [
                    {
                        sourceId: nodeId.value
                    },
                    {
                        targetId: nodeId.value
                    }
                ]
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        return records.map((record)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$EdgeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeMapper"].toDomain(record));
    }
    async save(edge, projectId) {
        await this.prisma.edge.create({
            data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$EdgeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeMapper"].toPrismaCreate(edge, projectId.value)
        });
    }
    async delete(id) {
        await this.prisma.edge.delete({
            where: {
                id: id.value
            }
        });
    }
}
}),
"[project]/src/infrastructure/persistence/prisma/mappers/NodeMapper.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMapper",
    ()=>NodeMapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Node$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/entities/Node.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeType.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$Position$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/Position.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/ProjectId.ts [app-rsc] (ecmascript)");
;
;
;
;
;
class NodeMapper {
    static toDomain(record) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Node$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Node"]({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(record.id),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeType"].from(record.type),
            label: record.label,
            description: record.description ?? undefined,
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$Position$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Position"](record.positionX, record.positionY),
            projectId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectId"].from(record.projectId),
            parentId: record.parentId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(record.parentId) : undefined
        });
    }
    static toPrismaCreate(node, projectId) {
        return {
            id: node.id.value,
            type: node.type.value,
            label: node.label,
            description: node.description ?? null,
            positionX: node.position.x,
            positionY: node.position.y,
            parentId: node.parentId?.value ?? null,
            projectId: projectId
        };
    }
    static toPrismaUpdate(node) {
        return {
            type: node.type.value,
            label: node.label,
            description: node.description ?? null,
            positionX: node.position.x,
            positionY: node.position.y,
            parentId: node.parentId?.value ?? null
        };
    }
}
}),
"[project]/src/infrastructure/persistence/prisma/repositories/PrismaNodeRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrismaNodeRepository",
    ()=>PrismaNodeRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$NodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/mappers/NodeMapper.ts [app-rsc] (ecmascript)");
;
class PrismaNodeRepository {
    prisma;
    constructor(prisma){
        this.prisma = prisma;
    }
    async findById(id) {
        const record = await this.prisma.node.findUnique({
            where: {
                id: id.value
            }
        });
        return record ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$NodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeMapper"].toDomain(record) : null;
    }
    async findAllByProject(projectId) {
        const records = await this.prisma.node.findMany({
            where: {
                projectId: projectId.value
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        return records.map((record)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$NodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeMapper"].toDomain(record));
    }
    async save(node, projectId) {
        await this.prisma.node.upsert({
            where: {
                id: node.id.value
            },
            create: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$NodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeMapper"].toPrismaCreate(node, projectId.value),
            update: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$NodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeMapper"].toPrismaUpdate(node)
        });
    }
    async saveMany(nodes, projectId) {
        await this.prisma.$transaction(nodes.map((node)=>this.prisma.node.upsert({
                where: {
                    id: node.id.value
                },
                create: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$NodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeMapper"].toPrismaCreate(node, projectId.value),
                update: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$NodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeMapper"].toPrismaUpdate(node)
            })));
    }
    async delete(id) {
        await this.prisma.node.delete({
            where: {
                id: id.value
            }
        });
    }
}
}),
"[project]/src/core/domain/entities/Project.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Project",
    ()=>Project
]);
class Project {
    id;
    name;
    ownerId;
    createdAt;
    updatedAt;
    constructor(props){
        const name = props.name.trim();
        if (!name) {
            throw new Error('Project name cannot be empty');
        }
        this.id = props.id;
        this.name = name;
        this.ownerId = props.ownerId;
        this.createdAt = new Date(props.createdAt);
        this.updatedAt = new Date(props.updatedAt);
    }
    rename(name) {
        const nextName = name.trim();
        if (!nextName) {
            throw new Error('Project name cannot be empty');
        }
        return new Project({
            ...this,
            name: nextName,
            updatedAt: new Date()
        });
    }
}
}),
"[project]/src/infrastructure/persistence/prisma/mappers/ProjectMapper.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectMapper",
    ()=>ProjectMapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Project$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/entities/Project.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/ProjectId.ts [app-rsc] (ecmascript)");
;
;
class ProjectMapper {
    static toDomain(record) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Project$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Project"]({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectId"].from(record.id),
            name: record.name,
            ownerId: record.ownerId,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt
        });
    }
    static toPrismaCreate(project) {
        return {
            id: project.id.value,
            name: project.name,
            ownerId: project.ownerId
        };
    }
    static toPrismaUpdate(project) {
        return {
            name: project.name,
            ownerId: project.ownerId
        };
    }
}
}),
"[project]/src/infrastructure/persistence/prisma/repositories/PrismaProjectRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrismaProjectRepository",
    ()=>PrismaProjectRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$ProjectMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/mappers/ProjectMapper.ts [app-rsc] (ecmascript)");
;
class PrismaProjectRepository {
    prisma;
    constructor(prisma){
        this.prisma = prisma;
    }
    async findById(id) {
        const record = await this.prisma.project.findUnique({
            where: {
                id: id.value
            }
        });
        return record ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$ProjectMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectMapper"].toDomain(record) : null;
    }
    async findAllByOwner(ownerId) {
        const records = await this.prisma.project.findMany({
            where: {
                ownerId
            },
            orderBy: {
                updatedAt: 'desc'
            }
        });
        return records.map((record)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$ProjectMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectMapper"].toDomain(record));
    }
    async save(project) {
        await this.prisma.project.upsert({
            where: {
                id: project.id.value
            },
            create: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$ProjectMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectMapper"].toPrismaCreate(project),
            update: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$mappers$2f$ProjectMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectMapper"].toPrismaUpdate(project)
        });
    }
    async delete(id) {
        await this.prisma.project.delete({
            where: {
                id: id.value
            }
        });
    }
}
}),
"[project]/src/presentation/canvas/mappers/edgeMapper.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coreEdgeToFlow",
    ()=>coreEdgeToFlow,
    "flowEdgeToCore",
    ()=>flowEdgeToCore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/EdgeType.ts [app-rsc] (ecmascript)");
;
;
const EDGE_STYLES = {
    dependency: {
        stroke: '#6b7280'
    },
    'data-flow': {
        stroke: '#2563eb',
        strokeDasharray: '6 4'
    },
    navigation: {
        stroke: '#7c3aed'
    },
    api: {
        stroke: '#dc2626'
    }
};
const coreEdgeToFlow = (edge)=>{
    const edgeType = edge.type.toString();
    const style = EDGE_STYLES[edgeType] ?? EDGE_STYLES.dependency;
    return {
        id: edge.id.toString(),
        source: edge.sourceId.toString(),
        target: edge.targetId.toString(),
        label: edge.label,
        animated: edgeType === 'data-flow',
        markerEnd: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
            color: style.stroke
        },
        style,
        data: {
            edgeType
        }
    };
};
const flowEdgeToCore = (edge)=>({
        id: edge.id,
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$EdgeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EdgeType"].from(edge.data?.edgeType ?? 'dependency').toString(),
        sourceId: edge.source,
        targetId: edge.target,
        label: edge.label ? String(edge.label) : undefined
    });
}),
"[project]/src/presentation/canvas/mappers/nodeMapper.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coreNodeToFlow",
    ()=>coreNodeToFlow,
    "flowNodeToCore",
    ()=>flowNodeToCore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/NodeType.ts [app-rsc] (ecmascript)");
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
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(node.id).toString(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeType"].from(node.data.nodeType).toString(),
        label: node.data.label,
        description: node.data.description,
        parentId: node.parentId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$NodeId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeId"].from(node.parentId).toString() : undefined,
        position: {
            x: node.position.x,
            y: node.position.y
        }
    });
}),
"[project]/src/app/(protected)/project/[id]/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4032e5b36e93d74db78e1ad5d5d0543d101eeefae1":"connectNodesAction","4040aa00d86ac5206ca4698f4cfda2904a8fb2d140":"moveNodeAction","4045b13b674227779ed724cab26c9066fce5ad5473":"deleteEdgeAction","4066bb889675452b110e56705ad69a9a42dd154522":"renameNodeAction","40a40a41f0f6cbb463d87110b5e80b33e301568866":"deleteNodeAction","40c97509045613d758a035df0a690fb1a6bc964a4a":"addNodeAction"},"",""] */ __turbopack_context__.s([
    "addNodeAction",
    ()=>addNodeAction,
    "connectNodesAction",
    ()=>connectNodesAction,
    "deleteEdgeAction",
    ()=>deleteEdgeAction,
    "deleteNodeAction",
    ()=>deleteNodeAction,
    "moveNodeAction",
    ()=>moveNodeAction,
    "renameNodeAction",
    ()=>renameNodeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$node$2f$AddNode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/application/use-cases/node/AddNode.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$node$2f$DeleteNode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/application/use-cases/node/DeleteNode.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$node$2f$MoveNode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/application/use-cases/node/MoveNode.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$node$2f$NestNode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/application/use-cases/node/NestNode.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$node$2f$RenameNode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/application/use-cases/node/RenameNode.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$edge$2f$ConnectNodes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/application/use-cases/edge/ConnectNodes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$edge$2f$DeleteEdge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/application/use-cases/edge/DeleteEdge.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/ProjectId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$auth$2f$getUserId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/auth/getUserId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaEdgeRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/repositories/PrismaEdgeRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaNodeRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/repositories/PrismaNodeRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaProjectRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/repositories/PrismaProjectRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$edgeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/mappers/edgeMapper.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$nodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/mappers/nodeMapper.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
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
;
;
;
;
;
;
async function assertOwnership(projectId) {
    const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$auth$2f$getUserId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserId"])();
    const projectRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaProjectRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaProjectRepository"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]);
    const projectIdVO = typeof projectId === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectId"].from(projectId) : projectId;
    const project = await projectRepository.findById(projectIdVO);
    if (!project || project.ownerId !== userId) {
        throw new Error('You do not have access to this project.');
    }
    return {
        nodeRepository: new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaNodeRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaNodeRepository"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]),
        edgeRepository: new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaEdgeRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaEdgeRepository"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]),
        projectRepository
    };
}
async function addNodeAction(input) {
    const { nodeRepository, projectRepository } = await assertOwnership(input.projectId);
    const addNode = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$node$2f$AddNode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AddNode"](projectRepository, nodeRepository);
    const nestNode = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$node$2f$NestNode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NestNode"](nodeRepository);
    const { node } = await addNode.execute({
        projectId: input.projectId,
        type: input.type,
        label: input.label,
        description: input.description,
        x: input.x,
        y: input.y
    });
    if (input.parentId) {
        await nestNode.execute({
            nodeId: node.id.toString(),
            parentId: input.parentId
        });
        const nestedNode = await nodeRepository.findById(node.id);
        if (!nestedNode) {
            throw new Error('Unable to load created node.');
        }
        return {
            node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$nodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coreNodeToFlow"])(nestedNode, input.projectId)
        };
    }
    return {
        node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$nodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coreNodeToFlow"])(node, input.projectId)
    };
}
async function moveNodeAction(input) {
    const { nodeRepository } = await assertOwnership(input.projectId);
    const moveNode = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$node$2f$MoveNode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MoveNode"](nodeRepository);
    return moveNode.execute({
        nodeId: input.nodeId,
        x: input.x,
        y: input.y
    });
}
async function renameNodeAction(input) {
    const { nodeRepository } = await assertOwnership(input.projectId);
    const renameNode = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$node$2f$RenameNode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenameNode"](nodeRepository);
    return renameNode.execute({
        nodeId: input.nodeId,
        label: input.label
    });
}
async function deleteNodeAction(input) {
    const { nodeRepository, edgeRepository } = await assertOwnership(input.projectId);
    const deleteNode = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$node$2f$DeleteNode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DeleteNode"](nodeRepository, edgeRepository);
    return deleteNode.execute({
        nodeId: input.nodeId
    });
}
async function connectNodesAction(input) {
    const { nodeRepository, edgeRepository } = await assertOwnership(input.projectId);
    const connectNodes = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$edge$2f$ConnectNodes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectNodes"](nodeRepository, edgeRepository);
    const { edge } = await connectNodes.execute({
        sourceId: input.sourceId,
        targetId: input.targetId,
        type: input.type,
        label: input.label
    });
    return {
        edge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$edgeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coreEdgeToFlow"])(edge)
    };
}
async function deleteEdgeAction(input) {
    const { edgeRepository } = await assertOwnership(input.projectId);
    const deleteEdge = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$edge$2f$DeleteEdge$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DeleteEdge"](edgeRepository);
    return deleteEdge.execute({
        edgeId: input.edgeId
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addNodeAction,
    moveNodeAction,
    renameNodeAction,
    deleteNodeAction,
    connectNodesAction,
    deleteEdgeAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addNodeAction, "40c97509045613d758a035df0a690fb1a6bc964a4a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(moveNodeAction, "4040aa00d86ac5206ca4698f4cfda2904a8fb2d140", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(renameNodeAction, "4066bb889675452b110e56705ad69a9a42dd154522", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNodeAction, "40a40a41f0f6cbb463d87110b5e80b33e301568866", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(connectNodesAction, "4032e5b36e93d74db78e1ad5d5d0543d101eeefae1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEdgeAction, "4045b13b674227779ed724cab26c9066fce5ad5473", null);
}),
"[project]/.next-internal/server/app/(protected)/project/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(protected)/project/[id]/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/(protected)/project/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(protected)/project/[id]/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4032e5b36e93d74db78e1ad5d5d0543d101eeefae1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectNodesAction"],
    "4040aa00d86ac5206ca4698f4cfda2904a8fb2d140",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["moveNodeAction"],
    "4045b13b674227779ed724cab26c9066fce5ad5473",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEdgeAction"],
    "4066bb889675452b110e56705ad69a9a42dd154522",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renameNodeAction"],
    "40a40a41f0f6cbb463d87110b5e80b33e301568866",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteNodeAction"],
    "40c97509045613d758a035df0a690fb1a6bc964a4a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addNodeAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(protected)/project/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(protected)/project/[id]/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$project$2f5b$id$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protected)/project/[id]/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client-2c3a283f134fdcb6", () => require("@prisma/client-2c3a283f134fdcb6"));

module.exports = mod;
}),
"[project]/node_modules/@xyflow/react/dist/esm/index.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Background",
    ()=>Background,
    "BackgroundVariant",
    ()=>BackgroundVariant,
    "BaseEdge",
    ()=>BaseEdge,
    "BezierEdge",
    ()=>BezierEdge,
    "ConnectionLineType",
    ()=>ConnectionLineType,
    "ConnectionMode",
    ()=>ConnectionMode,
    "ControlButton",
    ()=>ControlButton,
    "Controls",
    ()=>Controls,
    "EdgeLabelRenderer",
    ()=>EdgeLabelRenderer,
    "EdgeText",
    ()=>EdgeText,
    "EdgeToolbar",
    ()=>EdgeToolbar,
    "Handle",
    ()=>Handle,
    "MarkerType",
    ()=>MarkerType,
    "MiniMap",
    ()=>MiniMap,
    "MiniMapNode",
    ()=>MiniMapNode,
    "NodeResizeControl",
    ()=>NodeResizeControl,
    "NodeResizer",
    ()=>NodeResizer,
    "NodeToolbar",
    ()=>NodeToolbar,
    "PanOnScrollMode",
    ()=>PanOnScrollMode,
    "Panel",
    ()=>Panel,
    "Position",
    ()=>Position,
    "ReactFlow",
    ()=>ReactFlow,
    "ReactFlowProvider",
    ()=>ReactFlowProvider,
    "ResizeControlVariant",
    ()=>ResizeControlVariant,
    "SelectionMode",
    ()=>SelectionMode,
    "SimpleBezierEdge",
    ()=>SimpleBezierEdge,
    "SmoothStepEdge",
    ()=>SmoothStepEdge,
    "StepEdge",
    ()=>StepEdge,
    "StraightEdge",
    ()=>StraightEdge,
    "ViewportPortal",
    ()=>ViewportPortal,
    "addEdge",
    ()=>addEdge,
    "applyEdgeChanges",
    ()=>applyEdgeChanges,
    "applyNodeChanges",
    ()=>applyNodeChanges,
    "experimental_useOnEdgesChangeMiddleware",
    ()=>experimental_useOnEdgesChangeMiddleware,
    "experimental_useOnNodesChangeMiddleware",
    ()=>experimental_useOnNodesChangeMiddleware,
    "getBezierEdgeCenter",
    ()=>getBezierEdgeCenter,
    "getBezierPath",
    ()=>getBezierPath,
    "getConnectedEdges",
    ()=>getConnectedEdges,
    "getEdgeCenter",
    ()=>getEdgeCenter,
    "getIncomers",
    ()=>getIncomers,
    "getNodesBounds",
    ()=>getNodesBounds,
    "getOutgoers",
    ()=>getOutgoers,
    "getSimpleBezierPath",
    ()=>getSimpleBezierPath,
    "getSmoothStepPath",
    ()=>getSmoothStepPath,
    "getStraightPath",
    ()=>getStraightPath,
    "getViewportForBounds",
    ()=>getViewportForBounds,
    "isEdge",
    ()=>isEdge,
    "isNode",
    ()=>isNode,
    "reconnectEdge",
    ()=>reconnectEdge,
    "useConnection",
    ()=>useConnection,
    "useEdges",
    ()=>useEdges,
    "useEdgesState",
    ()=>useEdgesState,
    "useHandleConnections",
    ()=>useHandleConnections,
    "useInternalNode",
    ()=>useInternalNode,
    "useKeyPress",
    ()=>useKeyPress,
    "useNodeConnections",
    ()=>useNodeConnections,
    "useNodeId",
    ()=>useNodeId,
    "useNodes",
    ()=>useNodes,
    "useNodesData",
    ()=>useNodesData,
    "useNodesInitialized",
    ()=>useNodesInitialized,
    "useNodesState",
    ()=>useNodesState,
    "useOnSelectionChange",
    ()=>useOnSelectionChange,
    "useOnViewportChange",
    ()=>useOnViewportChange,
    "useReactFlow",
    ()=>useReactFlow,
    "useStore",
    ()=>useStore,
    "useStoreApi",
    ()=>useStoreApi,
    "useUpdateNodeInternals",
    ()=>useUpdateNodeInternals,
    "useViewport",
    ()=>useViewport
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Background = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Background() from the server but Background is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "Background");
const BackgroundVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BackgroundVariant() from the server but BackgroundVariant is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "BackgroundVariant");
const BaseEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BaseEdge() from the server but BaseEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "BaseEdge");
const BezierEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BezierEdge() from the server but BezierEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "BezierEdge");
const ConnectionLineType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConnectionLineType() from the server but ConnectionLineType is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "ConnectionLineType");
const ConnectionMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConnectionMode() from the server but ConnectionMode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "ConnectionMode");
const ControlButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ControlButton() from the server but ControlButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "ControlButton");
const Controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Controls() from the server but Controls is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "Controls");
const EdgeLabelRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EdgeLabelRenderer() from the server but EdgeLabelRenderer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "EdgeLabelRenderer");
const EdgeText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EdgeText() from the server but EdgeText is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "EdgeText");
const EdgeToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EdgeToolbar() from the server but EdgeToolbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "EdgeToolbar");
const Handle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Handle() from the server but Handle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "Handle");
const MarkerType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MarkerType() from the server but MarkerType is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "MarkerType");
const MiniMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MiniMap() from the server but MiniMap is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "MiniMap");
const MiniMapNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MiniMapNode() from the server but MiniMapNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "MiniMapNode");
const NodeResizeControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NodeResizeControl() from the server but NodeResizeControl is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "NodeResizeControl");
const NodeResizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NodeResizer() from the server but NodeResizer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "NodeResizer");
const NodeToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NodeToolbar() from the server but NodeToolbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "NodeToolbar");
const PanOnScrollMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PanOnScrollMode() from the server but PanOnScrollMode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "PanOnScrollMode");
const Panel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Panel() from the server but Panel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "Panel");
const Position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Position() from the server but Position is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "Position");
const ReactFlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ReactFlow() from the server but ReactFlow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "ReactFlow");
const ReactFlowProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ReactFlowProvider() from the server but ReactFlowProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "ReactFlowProvider");
const ResizeControlVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ResizeControlVariant() from the server but ResizeControlVariant is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "ResizeControlVariant");
const SelectionMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectionMode() from the server but SelectionMode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "SelectionMode");
const SimpleBezierEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SimpleBezierEdge() from the server but SimpleBezierEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "SimpleBezierEdge");
const SmoothStepEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SmoothStepEdge() from the server but SmoothStepEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "SmoothStepEdge");
const StepEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StepEdge() from the server but StepEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "StepEdge");
const StraightEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StraightEdge() from the server but StraightEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "StraightEdge");
const ViewportPortal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ViewportPortal() from the server but ViewportPortal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "ViewportPortal");
const addEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call addEdge() from the server but addEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "addEdge");
const applyEdgeChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call applyEdgeChanges() from the server but applyEdgeChanges is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "applyEdgeChanges");
const applyNodeChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call applyNodeChanges() from the server but applyNodeChanges is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "applyNodeChanges");
const experimental_useOnEdgesChangeMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call experimental_useOnEdgesChangeMiddleware() from the server but experimental_useOnEdgesChangeMiddleware is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "experimental_useOnEdgesChangeMiddleware");
const experimental_useOnNodesChangeMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call experimental_useOnNodesChangeMiddleware() from the server but experimental_useOnNodesChangeMiddleware is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "experimental_useOnNodesChangeMiddleware");
const getBezierEdgeCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getBezierEdgeCenter() from the server but getBezierEdgeCenter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getBezierEdgeCenter");
const getBezierPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getBezierPath() from the server but getBezierPath is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getBezierPath");
const getConnectedEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getConnectedEdges() from the server but getConnectedEdges is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getConnectedEdges");
const getEdgeCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getEdgeCenter() from the server but getEdgeCenter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getEdgeCenter");
const getIncomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getIncomers() from the server but getIncomers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getIncomers");
const getNodesBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getNodesBounds() from the server but getNodesBounds is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getNodesBounds");
const getOutgoers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getOutgoers() from the server but getOutgoers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getOutgoers");
const getSimpleBezierPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getSimpleBezierPath() from the server but getSimpleBezierPath is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getSimpleBezierPath");
const getSmoothStepPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getSmoothStepPath() from the server but getSmoothStepPath is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getSmoothStepPath");
const getStraightPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getStraightPath() from the server but getStraightPath is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getStraightPath");
const getViewportForBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getViewportForBounds() from the server but getViewportForBounds is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "getViewportForBounds");
const isEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isEdge() from the server but isEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "isEdge");
const isNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isNode() from the server but isNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "isNode");
const reconnectEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call reconnectEdge() from the server but reconnectEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "reconnectEdge");
const useConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useConnection() from the server but useConnection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useConnection");
const useEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useEdges() from the server but useEdges is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useEdges");
const useEdgesState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useEdgesState() from the server but useEdgesState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useEdgesState");
const useHandleConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useHandleConnections() from the server but useHandleConnections is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useHandleConnections");
const useInternalNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useInternalNode() from the server but useInternalNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useInternalNode");
const useKeyPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useKeyPress() from the server but useKeyPress is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useKeyPress");
const useNodeConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodeConnections() from the server but useNodeConnections is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useNodeConnections");
const useNodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodeId() from the server but useNodeId is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useNodeId");
const useNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodes() from the server but useNodes is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useNodes");
const useNodesData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodesData() from the server but useNodesData is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useNodesData");
const useNodesInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodesInitialized() from the server but useNodesInitialized is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useNodesInitialized");
const useNodesState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodesState() from the server but useNodesState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useNodesState");
const useOnSelectionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useOnSelectionChange() from the server but useOnSelectionChange is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useOnSelectionChange");
const useOnViewportChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useOnViewportChange() from the server but useOnViewportChange is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useOnViewportChange");
const useReactFlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useReactFlow() from the server but useReactFlow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useReactFlow");
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useStore() from the server but useStore is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useStore");
const useStoreApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useStoreApi() from the server but useStoreApi is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useStoreApi");
const useUpdateNodeInternals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useUpdateNodeInternals() from the server but useUpdateNodeInternals is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useUpdateNodeInternals");
const useViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useViewport() from the server but useViewport is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js <module evaluation>", "useViewport");
}),
"[project]/node_modules/@xyflow/react/dist/esm/index.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Background",
    ()=>Background,
    "BackgroundVariant",
    ()=>BackgroundVariant,
    "BaseEdge",
    ()=>BaseEdge,
    "BezierEdge",
    ()=>BezierEdge,
    "ConnectionLineType",
    ()=>ConnectionLineType,
    "ConnectionMode",
    ()=>ConnectionMode,
    "ControlButton",
    ()=>ControlButton,
    "Controls",
    ()=>Controls,
    "EdgeLabelRenderer",
    ()=>EdgeLabelRenderer,
    "EdgeText",
    ()=>EdgeText,
    "EdgeToolbar",
    ()=>EdgeToolbar,
    "Handle",
    ()=>Handle,
    "MarkerType",
    ()=>MarkerType,
    "MiniMap",
    ()=>MiniMap,
    "MiniMapNode",
    ()=>MiniMapNode,
    "NodeResizeControl",
    ()=>NodeResizeControl,
    "NodeResizer",
    ()=>NodeResizer,
    "NodeToolbar",
    ()=>NodeToolbar,
    "PanOnScrollMode",
    ()=>PanOnScrollMode,
    "Panel",
    ()=>Panel,
    "Position",
    ()=>Position,
    "ReactFlow",
    ()=>ReactFlow,
    "ReactFlowProvider",
    ()=>ReactFlowProvider,
    "ResizeControlVariant",
    ()=>ResizeControlVariant,
    "SelectionMode",
    ()=>SelectionMode,
    "SimpleBezierEdge",
    ()=>SimpleBezierEdge,
    "SmoothStepEdge",
    ()=>SmoothStepEdge,
    "StepEdge",
    ()=>StepEdge,
    "StraightEdge",
    ()=>StraightEdge,
    "ViewportPortal",
    ()=>ViewportPortal,
    "addEdge",
    ()=>addEdge,
    "applyEdgeChanges",
    ()=>applyEdgeChanges,
    "applyNodeChanges",
    ()=>applyNodeChanges,
    "experimental_useOnEdgesChangeMiddleware",
    ()=>experimental_useOnEdgesChangeMiddleware,
    "experimental_useOnNodesChangeMiddleware",
    ()=>experimental_useOnNodesChangeMiddleware,
    "getBezierEdgeCenter",
    ()=>getBezierEdgeCenter,
    "getBezierPath",
    ()=>getBezierPath,
    "getConnectedEdges",
    ()=>getConnectedEdges,
    "getEdgeCenter",
    ()=>getEdgeCenter,
    "getIncomers",
    ()=>getIncomers,
    "getNodesBounds",
    ()=>getNodesBounds,
    "getOutgoers",
    ()=>getOutgoers,
    "getSimpleBezierPath",
    ()=>getSimpleBezierPath,
    "getSmoothStepPath",
    ()=>getSmoothStepPath,
    "getStraightPath",
    ()=>getStraightPath,
    "getViewportForBounds",
    ()=>getViewportForBounds,
    "isEdge",
    ()=>isEdge,
    "isNode",
    ()=>isNode,
    "reconnectEdge",
    ()=>reconnectEdge,
    "useConnection",
    ()=>useConnection,
    "useEdges",
    ()=>useEdges,
    "useEdgesState",
    ()=>useEdgesState,
    "useHandleConnections",
    ()=>useHandleConnections,
    "useInternalNode",
    ()=>useInternalNode,
    "useKeyPress",
    ()=>useKeyPress,
    "useNodeConnections",
    ()=>useNodeConnections,
    "useNodeId",
    ()=>useNodeId,
    "useNodes",
    ()=>useNodes,
    "useNodesData",
    ()=>useNodesData,
    "useNodesInitialized",
    ()=>useNodesInitialized,
    "useNodesState",
    ()=>useNodesState,
    "useOnSelectionChange",
    ()=>useOnSelectionChange,
    "useOnViewportChange",
    ()=>useOnViewportChange,
    "useReactFlow",
    ()=>useReactFlow,
    "useStore",
    ()=>useStore,
    "useStoreApi",
    ()=>useStoreApi,
    "useUpdateNodeInternals",
    ()=>useUpdateNodeInternals,
    "useViewport",
    ()=>useViewport
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Background = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Background() from the server but Background is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "Background");
const BackgroundVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BackgroundVariant() from the server but BackgroundVariant is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "BackgroundVariant");
const BaseEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BaseEdge() from the server but BaseEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "BaseEdge");
const BezierEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BezierEdge() from the server but BezierEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "BezierEdge");
const ConnectionLineType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConnectionLineType() from the server but ConnectionLineType is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "ConnectionLineType");
const ConnectionMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConnectionMode() from the server but ConnectionMode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "ConnectionMode");
const ControlButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ControlButton() from the server but ControlButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "ControlButton");
const Controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Controls() from the server but Controls is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "Controls");
const EdgeLabelRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EdgeLabelRenderer() from the server but EdgeLabelRenderer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "EdgeLabelRenderer");
const EdgeText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EdgeText() from the server but EdgeText is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "EdgeText");
const EdgeToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EdgeToolbar() from the server but EdgeToolbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "EdgeToolbar");
const Handle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Handle() from the server but Handle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "Handle");
const MarkerType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MarkerType() from the server but MarkerType is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "MarkerType");
const MiniMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MiniMap() from the server but MiniMap is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "MiniMap");
const MiniMapNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MiniMapNode() from the server but MiniMapNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "MiniMapNode");
const NodeResizeControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NodeResizeControl() from the server but NodeResizeControl is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "NodeResizeControl");
const NodeResizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NodeResizer() from the server but NodeResizer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "NodeResizer");
const NodeToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NodeToolbar() from the server but NodeToolbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "NodeToolbar");
const PanOnScrollMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PanOnScrollMode() from the server but PanOnScrollMode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "PanOnScrollMode");
const Panel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Panel() from the server but Panel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "Panel");
const Position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Position() from the server but Position is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "Position");
const ReactFlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ReactFlow() from the server but ReactFlow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "ReactFlow");
const ReactFlowProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ReactFlowProvider() from the server but ReactFlowProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "ReactFlowProvider");
const ResizeControlVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ResizeControlVariant() from the server but ResizeControlVariant is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "ResizeControlVariant");
const SelectionMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectionMode() from the server but SelectionMode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "SelectionMode");
const SimpleBezierEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SimpleBezierEdge() from the server but SimpleBezierEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "SimpleBezierEdge");
const SmoothStepEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SmoothStepEdge() from the server but SmoothStepEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "SmoothStepEdge");
const StepEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StepEdge() from the server but StepEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "StepEdge");
const StraightEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StraightEdge() from the server but StraightEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "StraightEdge");
const ViewportPortal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ViewportPortal() from the server but ViewportPortal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "ViewportPortal");
const addEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call addEdge() from the server but addEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "addEdge");
const applyEdgeChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call applyEdgeChanges() from the server but applyEdgeChanges is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "applyEdgeChanges");
const applyNodeChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call applyNodeChanges() from the server but applyNodeChanges is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "applyNodeChanges");
const experimental_useOnEdgesChangeMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call experimental_useOnEdgesChangeMiddleware() from the server but experimental_useOnEdgesChangeMiddleware is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "experimental_useOnEdgesChangeMiddleware");
const experimental_useOnNodesChangeMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call experimental_useOnNodesChangeMiddleware() from the server but experimental_useOnNodesChangeMiddleware is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "experimental_useOnNodesChangeMiddleware");
const getBezierEdgeCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getBezierEdgeCenter() from the server but getBezierEdgeCenter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getBezierEdgeCenter");
const getBezierPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getBezierPath() from the server but getBezierPath is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getBezierPath");
const getConnectedEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getConnectedEdges() from the server but getConnectedEdges is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getConnectedEdges");
const getEdgeCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getEdgeCenter() from the server but getEdgeCenter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getEdgeCenter");
const getIncomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getIncomers() from the server but getIncomers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getIncomers");
const getNodesBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getNodesBounds() from the server but getNodesBounds is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getNodesBounds");
const getOutgoers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getOutgoers() from the server but getOutgoers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getOutgoers");
const getSimpleBezierPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getSimpleBezierPath() from the server but getSimpleBezierPath is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getSimpleBezierPath");
const getSmoothStepPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getSmoothStepPath() from the server but getSmoothStepPath is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getSmoothStepPath");
const getStraightPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getStraightPath() from the server but getStraightPath is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getStraightPath");
const getViewportForBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call getViewportForBounds() from the server but getViewportForBounds is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "getViewportForBounds");
const isEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isEdge() from the server but isEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "isEdge");
const isNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isNode() from the server but isNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "isNode");
const reconnectEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call reconnectEdge() from the server but reconnectEdge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "reconnectEdge");
const useConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useConnection() from the server but useConnection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useConnection");
const useEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useEdges() from the server but useEdges is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useEdges");
const useEdgesState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useEdgesState() from the server but useEdgesState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useEdgesState");
const useHandleConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useHandleConnections() from the server but useHandleConnections is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useHandleConnections");
const useInternalNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useInternalNode() from the server but useInternalNode is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useInternalNode");
const useKeyPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useKeyPress() from the server but useKeyPress is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useKeyPress");
const useNodeConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodeConnections() from the server but useNodeConnections is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useNodeConnections");
const useNodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodeId() from the server but useNodeId is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useNodeId");
const useNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodes() from the server but useNodes is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useNodes");
const useNodesData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodesData() from the server but useNodesData is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useNodesData");
const useNodesInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodesInitialized() from the server but useNodesInitialized is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useNodesInitialized");
const useNodesState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNodesState() from the server but useNodesState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useNodesState");
const useOnSelectionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useOnSelectionChange() from the server but useOnSelectionChange is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useOnSelectionChange");
const useOnViewportChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useOnViewportChange() from the server but useOnViewportChange is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useOnViewportChange");
const useReactFlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useReactFlow() from the server but useReactFlow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useReactFlow");
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useStore() from the server but useStore is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useStore");
const useStoreApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useStoreApi() from the server but useStoreApi is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useStoreApi");
const useUpdateNodeInternals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useUpdateNodeInternals() from the server but useUpdateNodeInternals is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useUpdateNodeInternals");
const useViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useViewport() from the server but useViewport is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@xyflow/react/dist/esm/index.js", "useViewport");
}),
"[project]/node_modules/@xyflow/react/dist/esm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/@xyflow/react/dist/esm/index.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3ffce9e6._.js.map