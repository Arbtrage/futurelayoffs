-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;
ALTER TABLE "User" ALTER COLUMN "followers" DROP NOT NULL;
ALTER TABLE "User" ALTER COLUMN "following" DROP NOT NULL;
ALTER TABLE "User" ALTER COLUMN "public_repos" DROP NOT NULL;
