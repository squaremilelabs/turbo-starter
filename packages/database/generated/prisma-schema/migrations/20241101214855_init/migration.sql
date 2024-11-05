-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "x_clerk_user" (
    "id" TEXT NOT NULL,
    "banned" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "lastSignInAt" TIMESTAMP(3),
    "primaryEmailAddress" TEXT,
    "primaryPhoneNumber" TEXT,

    CONSTRAINT "x_clerk_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "x_clerk_user_private_metadata" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "x_clerk_user_private_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "x_clerk_user_public_metadata" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isAdmin" BOOLEAN,
    "isAuthorized" BOOLEAN,

    CONSTRAINT "x_clerk_user_public_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "x_clerk_user_unsafe_metadata" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "x_clerk_user_unsafe_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_title_key" ON "Item"("title");

-- CreateIndex
CREATE UNIQUE INDEX "x_clerk_user_private_metadata_userId_key" ON "x_clerk_user_private_metadata"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "x_clerk_user_public_metadata_userId_key" ON "x_clerk_user_public_metadata"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "x_clerk_user_unsafe_metadata_userId_key" ON "x_clerk_user_unsafe_metadata"("userId");

-- AddForeignKey
ALTER TABLE "x_clerk_user_private_metadata" ADD CONSTRAINT "x_clerk_user_private_metadata_userId_fkey" FOREIGN KEY ("userId") REFERENCES "x_clerk_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "x_clerk_user_public_metadata" ADD CONSTRAINT "x_clerk_user_public_metadata_userId_fkey" FOREIGN KEY ("userId") REFERENCES "x_clerk_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "x_clerk_user_unsafe_metadata" ADD CONSTRAINT "x_clerk_user_unsafe_metadata_userId_fkey" FOREIGN KEY ("userId") REFERENCES "x_clerk_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
