module.exports = [
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
"[project]/src/core/application/use-cases/project/CreateProject.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateProject",
    ()=>CreateProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Project$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/entities/Project.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/ProjectId.ts [app-rsc] (ecmascript)");
;
;
class CreateProject {
    projectRepository;
    constructor(projectRepository){
        this.projectRepository = projectRepository;
    }
    async execute(input) {
        const now = new Date();
        const project = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$entities$2f$Project$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Project"]({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectId"].create(),
            name: input.name,
            ownerId: input.ownerId,
            createdAt: now,
            updatedAt: now
        });
        await this.projectRepository.save(project);
        return {
            project
        };
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
"[project]/src/core/application/use-cases/project/DeleteProject.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteProject",
    ()=>DeleteProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$ProjectNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/ProjectNotFoundError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/ProjectId.ts [app-rsc] (ecmascript)");
;
;
class DeleteProject {
    projectRepository;
    constructor(projectRepository){
        this.projectRepository = projectRepository;
    }
    async execute(input) {
        const projectId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectId"].from(input.projectId);
        const project = await this.projectRepository.findById(projectId);
        if (!project) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$ProjectNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectNotFoundError"](projectId.toString());
        }
        await this.projectRepository.delete(projectId);
        return {
            deleted: true
        };
    }
}
}),
"[project]/src/core/application/use-cases/project/RenameProject.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenameProject",
    ()=>RenameProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$ProjectNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/errors/ProjectNotFoundError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/ProjectId.ts [app-rsc] (ecmascript)");
;
;
class RenameProject {
    projectRepository;
    constructor(projectRepository){
        this.projectRepository = projectRepository;
    }
    async execute(input) {
        const projectId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectId"].from(input.projectId);
        const project = await this.projectRepository.findById(projectId);
        if (!project) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$errors$2f$ProjectNotFoundError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectNotFoundError"](projectId.toString());
        }
        const renamed = project.rename(input.name);
        await this.projectRepository.save(renamed);
        return {
            projectId: renamed.id.toString(),
            name: renamed.name
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
"[project]/src/app/(protected)/dashboard/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4029549912489dcb060c987618e50b99cf40f3495d":"deleteProjectAction","409d68d0a77bca241c1e230542136e849df4f2ae32":"createProjectAction","603913719bff86c189810b4cd0501c49ebd23ef879":"renameProjectAction"},"",""] */ __turbopack_context__.s([
    "createProjectAction",
    ()=>createProjectAction,
    "deleteProjectAction",
    ()=>deleteProjectAction,
    "renameProjectAction",
    ()=>renameProjectAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$project$2f$CreateProject$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/application/use-cases/project/CreateProject.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$project$2f$DeleteProject$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/application/use-cases/project/DeleteProject.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$project$2f$RenameProject$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/application/use-cases/project/RenameProject.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/domain/value-objects/ProjectId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$auth$2f$getUserId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/auth/getUserId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaProjectRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/persistence/prisma/repositories/PrismaProjectRepository.ts [app-rsc] (ecmascript)");
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
const MAX_PROJECT_NAME_LENGTH = 100;
function validateName(name) {
    const normalizedName = name.trim();
    if (!normalizedName) {
        throw new Error('Project name is required.');
    }
    if (normalizedName.length > MAX_PROJECT_NAME_LENGTH) {
        throw new Error(`Project name must be ${MAX_PROJECT_NAME_LENGTH} characters or fewer.`);
    }
    return normalizedName;
}
async function assertOwnership(projectId, userId) {
    const projectRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaProjectRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaProjectRepository"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]);
    const project = await projectRepository.findById(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$domain$2f$value$2d$objects$2f$ProjectId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectId"].from(projectId));
    if (!project) {
        throw new Error('Project not found.');
    }
    if (project.ownerId !== userId) {
        throw new Error('You do not have access to this project.');
    }
    return {
        projectRepository,
        project
    };
}
async function createProjectAction(formData) {
    const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$auth$2f$getUserId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserId"])();
    let name;
    try {
        name = validateName(String(formData.get('name') ?? ''));
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'Unable to create project.'
        };
    }
    const projectRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$repositories$2f$PrismaProjectRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaProjectRepository"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$persistence$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]);
    const createProject = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$project$2f$CreateProject$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreateProject"](projectRepository);
    const { project } = await createProject.execute({
        name,
        ownerId: userId
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/project/${project.id.toString()}`);
}
async function renameProjectAction(projectId, newName) {
    const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$auth$2f$getUserId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserId"])();
    try {
        const name = validateName(newName);
        const { projectRepository } = await assertOwnership(projectId, userId);
        const renameProject = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$project$2f$RenameProject$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenameProject"](projectRepository);
        await renameProject.execute({
            projectId,
            name
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        return {
            success: true
        };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'Unable to rename project.'
        };
    }
}
async function deleteProjectAction(projectId) {
    const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$auth$2f$getUserId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserId"])();
    try {
        const { projectRepository } = await assertOwnership(projectId, userId);
        const deleteProject = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$application$2f$use$2d$cases$2f$project$2f$DeleteProject$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DeleteProject"](projectRepository);
        await deleteProject.execute({
            projectId
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        return {
            success: true
        };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'Unable to delete project.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createProjectAction,
    renameProjectAction,
    deleteProjectAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProjectAction, "409d68d0a77bca241c1e230542136e849df4f2ae32", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(renameProjectAction, "603913719bff86c189810b4cd0501c49ebd23ef879", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProjectAction, "4029549912489dcb060c987618e50b99cf40f3495d", null);
}),
"[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(protected)/dashboard/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protected)/dashboard/actions.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(protected)/dashboard/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4029549912489dcb060c987618e50b99cf40f3495d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProjectAction"],
    "409d68d0a77bca241c1e230542136e849df4f2ae32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProjectAction"],
    "603913719bff86c189810b4cd0501c49ebd23ef879",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renameProjectAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(protected)/dashboard/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protected)/dashboard/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_d05ca320._.js.map