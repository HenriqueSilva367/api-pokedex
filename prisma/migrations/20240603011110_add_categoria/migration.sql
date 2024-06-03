/*
  Warnings:

  - You are about to drop the column `created_at` on the `pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `pokemon` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pokemon" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pokemon" ADD CONSTRAINT "pokemon_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
