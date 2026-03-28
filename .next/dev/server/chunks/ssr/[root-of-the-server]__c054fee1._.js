module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(protected)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(protected)/layout.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/core/domain/value-objects/NodeType.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/presentation/canvas/CanvasInitializer.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasInitializer",
    ()=>CanvasInitializer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CanvasInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CanvasInitializer() from the server but CanvasInitializer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/presentation/canvas/CanvasInitializer.tsx <module evaluation>", "CanvasInitializer");
}),
"[project]/src/presentation/canvas/CanvasInitializer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasInitializer",
    ()=>CanvasInitializer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CanvasInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CanvasInitializer() from the server but CanvasInitializer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/presentation/canvas/CanvasInitializer.tsx", "CanvasInitializer");
}),
"[project]/src/presentation/canvas/CanvasInitializer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$CanvasInitializer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/presentation/canvas/CanvasInitializer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$CanvasInitializer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/CanvasInitializer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$CanvasInitializer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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
"[project]/src/app/(protected)/project/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/ProjectId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$auth$2f$getUserId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/auth/getUserId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaEdgeRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/repositories/PrismaEdgeRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaNodeRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/repositories/PrismaNodeRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaProjectRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/repositories/PrismaProjectRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$CanvasInitializer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/CanvasInitializer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$edgeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/mappers/edgeMapper.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$nodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/canvas/mappers/nodeMapper.ts [app-rsc] (ecmascript)");
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
async function ProjectPage({ params }) {
    const { id } = await params;
    const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$auth$2f$getUserId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserId"])();
    let projectId;
    try {
        projectId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectId"].from(id);
    } catch  {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const projectRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaProjectRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaProjectRepository"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]);
    const nodeRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaNodeRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaNodeRepository"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]);
    const edgeRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaEdgeRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaEdgeRepository"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]);
    const project = await projectRepository.findById(projectId);
    if (!project || project.ownerId !== userId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const [nodes, edges] = await Promise.all([
        nodeRepository.findAllByProject(projectId),
        edgeRepository.findAllByProject(projectId)
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$CanvasInitializer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CanvasInitializer"], {
        projectId: id,
        projectName: project.name,
        initialNodes: nodes.map((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$nodeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coreNodeToFlow"])(node, id)),
        initialEdges: edges.map((edge)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$canvas$2f$mappers$2f$edgeMapper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coreEdgeToFlow"])(edge))
    }, void 0, false, {
        fileName: "[project]/src/app/(protected)/project/[id]/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(protected)/project/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(protected)/project/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c054fee1._.js.map