/*
  Warnings:

  - You are about to drop the `Lead` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Lead";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Formulario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "interests" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "birth_date" TEXT NOT NULL,
    "contact_time" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "favorite_color" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
