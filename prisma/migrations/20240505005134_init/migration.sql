-- CreateTable
CREATE TABLE "pokemon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "altura" DOUBLE PRECISION NOT NULL,
    "hp" INTEGER NOT NULL,
    "ataque" INTEGER NOT NULL,
    "defesa" INTEGER NOT NULL,
    "sp_ataque" INTEGER NOT NULL,
    "sp_defesa" INTEGER NOT NULL,
    "velocitade" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pokemon_pkey" PRIMARY KEY ("id")
);
