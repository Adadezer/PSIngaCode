import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default async function projects() {
  const projetoA = await prisma.projects.create({
    data: {
      name: 'projeto A',
      Tasks: {
        create: [
          {
            name: 'tarefa 1 - proj.A',
            description: 'descrição da tarefa 1 - proj.A',
            collaboratorName: 'adadezer'
          },
          {
            name: 'tarefa 2 - proj.A',
            description: 'descrição da tarefa 2 - proj.A',
          },
          {
            name: 'tarefa 3 - proj.A',
            description: 'descrição da tarefa 3 - proj.A',
          },
        ]
      }
    },
  })

  const projetoB = await prisma.projects.create({
    data: {
      name: 'projeto B',
      Tasks: {
        create: [
          {
            name: 'tarefa 1 - proj.B',
            description: 'descrição da tarefa 1 - proj.B',
          },
          {
            name: 'tarefa 2 - proj.B',
            description: 'descrição da tarefa 2 - proj.B',
            collaboratorName: 'arthur'
          },
          {
            name: 'tarefa 3 - proj.B',
            description: 'descrição da tarefa 3 - proj.B',
          },
        ]
      }
    },
  })

  const projetoC = await prisma.projects.create({
    data: {
      name: 'projeto C',
      Tasks: {
        create: [
          {
            name: 'tarefa 1 - proj.C',
            description: 'descrição da tarefa 1 - proj.C',
          },
          {
            name: 'tarefa 2 - proj.C',
            description: 'descrição da tarefa 2 - proj.C',
          },
          {
            name: 'tarefa 3 - proj.C',
            description: 'descrição da tarefa 3 - proj.C',
            collaboratorName: 'fernando'
          },
        ]
      }
    },
  })

  console.log({ projetoA, projetoB, projetoC })
}