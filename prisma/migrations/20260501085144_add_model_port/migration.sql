-- CreateTable
CREATE TABLE "Port" (
    "id" TEXT NOT NULL,
    "side" TEXT NOT NULL,
    "positionX" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "positionY" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "nodeId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Port_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Port_nodeId_idx" ON "Port"("nodeId");

-- CreateIndex
CREATE INDEX "Port_projectId_idx" ON "Port"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Port_nodeId_side_key" ON "Port"("nodeId", "side");

-- AddForeignKey
ALTER TABLE "Port" ADD CONSTRAINT "Port_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Port" ADD CONSTRAINT "Port_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
