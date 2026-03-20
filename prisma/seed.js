// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const userId = 'cmms22mth0000g19csi1blgq4'   // з поточного workaround

  // Проєкт
  const project = await prisma.project.create({
    data: { name: 'StructureFlow Demo', ownerId: userId },
  })

  // System рівень
  const system = await prisma.node.create({
    data: {
      type: 'system', label: 'StructureFlow', projectId: project.id,
      positionX: 300, positionY: 200,
    },
  })

  // Container рівень
  const frontend = await prisma.node.create({
    data: {
      type: 'container', label: 'Frontend (Next.js)',
      projectId: project.id, parentId: system.id,
      positionX: 100, positionY: 100,
    },
  })
  const backend = await prisma.node.create({
    data: {
      type: 'container', label: 'Backend (API)',
      projectId: project.id, parentId: system.id,
      positionX: 400, positionY: 100,
    },
  })
  const database = await prisma.node.create({
    data: {
      type: 'container', label: 'PostgreSQL',
      projectId: project.id, parentId: system.id,
      positionX: 700, positionY: 100,
    },
  })

  // Component рівень — Frontend
  const authModule = await prisma.node.create({
    data: {
      type: 'component', label: 'AuthModule',
      projectId: project.id, parentId: frontend.id,
      positionX: 50, positionY: 150,
    },
  })
  const canvasModule = await prisma.node.create({
    data: {
      type: 'component', label: 'CanvasModule',
      projectId: project.id, parentId: frontend.id,
      positionX: 300, positionY: 150,
    },
  })

  // Component рівень — Backend
  const projectService = await prisma.node.create({
    data: {
      type: 'component', label: 'ProjectService',
      projectId: project.id, parentId: backend.id,
      positionX: 50, positionY: 150,
    },
  })
  const nodeService = await prisma.node.create({
    data: {
      type: 'component', label: 'NodeService',
      projectId: project.id, parentId: backend.id,
      positionX: 300, positionY: 150,
    },
  })

  // Edges між контейнерами (видимі на System рівні)
  await prisma.edge.create({
    data: {
      type: 'dependency', label: 'uses',
      sourceId: frontend.id, targetId: backend.id,
      projectId: project.id,
    },
  })
  await prisma.edge.create({
    data: {
      type: 'dependency', label: 'reads/writes',
      sourceId: backend.id, targetId: database.id,
      projectId: project.id,
    },
  })

  // Edges між компонентами Frontend (видимі всередині Frontend)
  await prisma.edge.create({
    data: {
      type: 'navigation', label: 'navigates',
      sourceId: authModule.id, targetId: canvasModule.id,
      projectId: project.id,
    },
  })

  console.log('✅ Seed завершено. Проєкт:', project.id)
}

main().catch(console.error).finally(() => prisma.$disconnect())