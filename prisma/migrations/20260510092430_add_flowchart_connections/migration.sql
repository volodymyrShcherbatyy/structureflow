-- CreateTable
CREATE TABLE "FlowchartConnection" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "scopeId" TEXT,
    "sourceKind" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "sourceAnchor" TEXT,
    "targetKind" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "targetAnchor" TEXT,
    "type" TEXT NOT NULL,
    "label" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FlowchartConnection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FlowchartConnection_projectId_idx" ON "FlowchartConnection"("projectId");

-- CreateIndex
CREATE INDEX "FlowchartConnection_scopeId_idx" ON "FlowchartConnection"("scopeId");

-- CreateIndex
CREATE INDEX "FlowchartConnection_sourceKind_sourceId_idx" ON "FlowchartConnection"("sourceKind", "sourceId");

-- CreateIndex
CREATE INDEX "FlowchartConnection_targetKind_targetId_idx" ON "FlowchartConnection"("targetKind", "targetId");

-- AddForeignKey
ALTER TABLE "FlowchartConnection" ADD CONSTRAINT "FlowchartConnection_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
