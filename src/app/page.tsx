"use client";

import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

const endTime = dayjs("2024-02-16T11:00:00-0700");

export default function Home() {
  const [now, setNow] = useState<Dayjs>();

  const hours = Math.max(endTime?.diff(now, "hours"), 0);
  const minutes = Math.max(endTime?.diff(now, "minutes") - hours * 60, 0);
  const seconds = Math.max(endTime?.diff(now, "seconds") - hours * 3600 - minutes * 60, 0);

  useEffect(() => {
    setInterval(() => {
      setNow(dayjs());
    }, 500);
  }, []);

  return (
    <main className="font-sans w-full h-full flex justify-center items-center">
      {now && (
        <div className="-mt-12 font-extrabold text-9xl flex flex-col md:flex-row items-center justify-around w-full max-w-2xl">
          <div className="flex flex-col items-center w-1/6 my-5">
            <span>{hours}</span>
            <span className="text-3xl">hours</span>
          </div>
          <div className="flex flex-col items-center w-1/6 my-5">
            <span>{minutes}</span>
            <span className="text-3xl">minutes</span>
          </div>
          <div className="flex flex-col items-center w-1/6 my-5">
            <span>{seconds}</span>
            <span className="text-3xl">seconds</span>
          </div>
        </div>
      )}
    </main>
  );
}
