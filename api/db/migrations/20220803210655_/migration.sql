/*
  Warnings:

  - You are about to drop the column `checklistId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the `Checklist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_checklistId_fkey`;

-- AlterTable
ALTER TABLE `Task` DROP COLUMN `checklistId`,
    ADD COLUMN `templateId` INTEGER NULL;

-- DropTable
DROP TABLE `Checklist`;

-- CreateTable
CREATE TABLE `Template` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
