/*
  Warnings:

  - Added the required column `repository_name` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repository_url` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "assignee" STRING;
ALTER TABLE "Issue" ADD COLUMN     "assignees" STRING[];
ALTER TABLE "Issue" ADD COLUMN     "license" STRING;
ALTER TABLE "Issue" ADD COLUMN     "repository_description" STRING;
ALTER TABLE "Issue" ADD COLUMN     "repository_name" STRING NOT NULL;
ALTER TABLE "Issue" ADD COLUMN     "repository_url" STRING NOT NULL;
ALTER TABLE "Issue" ALTER COLUMN "description" DROP NOT NULL;
