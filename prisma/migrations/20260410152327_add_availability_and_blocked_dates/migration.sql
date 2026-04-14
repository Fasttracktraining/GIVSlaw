-- CreateTable
CREATE TABLE "advisor_availability" (
    "id" TEXT NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "slotMinutes" INTEGER NOT NULL DEFAULT 30,
    "advisorId" TEXT NOT NULL,

    CONSTRAINT "advisor_availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blocked_dates" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT,
    "advisorId" TEXT NOT NULL,

    CONSTRAINT "blocked_dates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "advisor_availability_advisorId_dayOfWeek_key" ON "advisor_availability"("advisorId", "dayOfWeek");

-- CreateIndex
CREATE UNIQUE INDEX "blocked_dates_advisorId_date_key" ON "blocked_dates"("advisorId", "date");

-- AddForeignKey
ALTER TABLE "advisor_availability" ADD CONSTRAINT "advisor_availability_advisorId_fkey" FOREIGN KEY ("advisorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocked_dates" ADD CONSTRAINT "blocked_dates_advisorId_fkey" FOREIGN KEY ("advisorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
