/*
  Warnings:

  - The `deletedAt` column on the `Collaborators` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedAt` column on the `Projects` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedAt` column on the `Tasks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedAt` column on the `TimeTrackers` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `Collaborators` DROP COLUMN `deletedAt`,
    ADD COLUMN `deletedAt` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Projects` DROP COLUMN `deletedAt`,
    ADD COLUMN `deletedAt` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Tasks` DROP COLUMN `deletedAt`,
    ADD COLUMN `deletedAt` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `TimeTrackers` DROP COLUMN `deletedAt`,
    ADD COLUMN `deletedAt` BOOLEAN NOT NULL DEFAULT false;
