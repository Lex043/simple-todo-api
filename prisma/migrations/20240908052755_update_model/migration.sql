/*
  Warnings:

  - You are about to drop the column `finishTodo` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "finishTodo",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
