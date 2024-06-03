/*
  Warnings:

  - You are about to drop the column `velocitade` on the `pokemon` table. All the data in the column will be lost.
  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pokemon` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `velocidade` to the `pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_categoriaId_fkey";

-- AlterTable
ALTER TABLE "pokemon" DROP COLUMN "velocitade",
ADD COLUMN     "velocidade" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Categoria";

-- DropTable
DROP TABLE "Pokemon";
