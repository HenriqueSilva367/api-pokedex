/*
  Warnings:

  - Added the required column `imgUrl` to the `pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pokemon" ADD COLUMN     "imgUrl" TEXT NOT NULL;
