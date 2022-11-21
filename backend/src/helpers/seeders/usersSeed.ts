import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default async function users() {
  const adadezer = await prisma.users.create({
    data: {
      userName: 'adadezer',
      password: 'adadezer123',
      Collaborators: {
        create: {
          name: 'adadezer'
        }
      }
    },
  })

  const arthur = await prisma.users.create({
    data: {
      userName: 'arthur',
      password: 'arthur123',
      Collaborators: {
        create: {
          name: 'arthur'
        }
      }
    },
  })

  const fernando = await prisma.users.create({
    data: {
      userName: 'fernando',
      password: 'fernando123',
      Collaborators: {
        create: {
          name: 'fernando'
        }
      }
    },
  })

  const breno = await prisma.users.create({
    data: {
      userName: 'breno',
      password: 'breno123',
      Collaborators: {
        create: {
          name: 'breno'
        }
      }
    },
  })

  const rafael = await prisma.users.create({
    data: {
      userName: 'rafael',
      password: 'rafael123',
      Collaborators: {
        create: {
          name: 'rafael'
        }
      }
    },
  })

  const thiago = await prisma.users.create({
    data: {
      userName: 'thiago',
      password: 'thiago123',
      Collaborators: {
        create: {
          name: 'thiago'
        }
      }
    },
  })

  console.log({ adadezer, arthur, fernando, breno, rafael, thiago })
}