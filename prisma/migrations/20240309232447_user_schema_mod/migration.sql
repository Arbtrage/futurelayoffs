/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `followers` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_repos` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" STRING;
ALTER TABLE "User" ADD COLUMN     "company" STRING;
ALTER TABLE "User" ADD COLUMN     "followers" INT4 NOT NULL;
ALTER TABLE "User" ADD COLUMN     "following" INT4 NOT NULL;
ALTER TABLE "User" ADD COLUMN     "location" STRING;
ALTER TABLE "User" ADD COLUMN     "public_repos" INT4 NOT NULL;
ALTER TABLE "User" ADD COLUMN     "site" STRING;
ALTER TABLE "User" ADD COLUMN     "username" STRING NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
