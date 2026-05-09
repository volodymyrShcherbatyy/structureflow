-- CreateTable
CREATE TABLE "FlowchartElement" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "positionX" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "positionY" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "width" DOUBLE PRECISION NOT NULL DEFAULT 160,
    "height" DOUBLE PRECISION NOT NULL DEFAULT 80,
    "scopeId" TEXT,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FlowchartElement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FlowchartElement_projectId_idx" ON "FlowchartElement"("projectId");

-- CreateIndex
CREATE INDEX "FlowchartElement_scopeId_idx" ON "FlowchartElement"("scopeId");

-- AddForeignKey
ALTER TABLE "FlowchartElement" ADD CONSTRAINT "FlowchartElement_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
