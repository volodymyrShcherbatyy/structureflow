module.exports = [
"[project]/src/infrastructure/auth/getUserId.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserId",
    ()=>getUserId
]);
async function getUserId() {
    const userId = process.env.DEV_USER_ID;
    if (!userId) {
        throw new Error('DEV_USER_ID is not configured');
    }
    return userId;
}
}),
"[project]/src/app/(protected)/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProtectedLayout,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$auth$2f$getUserId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/auth/getUserId.ts [app-rsc] (ecmascript)");
const dynamic = 'force-dynamic';
;
async function ProtectedLayout({ children }) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$auth$2f$getUserId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserId"])();
    return children;
}
}),
];

//# sourceMappingURL=src_cfad25cc._.js.map