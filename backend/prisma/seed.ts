import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

import usersSeed from '../src/helpers/seeders/usersSeed';
import projectsSeed from '../src/helpers/seeders/projectsSeed';

async function main() {
  usersSeed();
  projectsSeed();
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })