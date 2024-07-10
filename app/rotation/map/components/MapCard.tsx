"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

interface ModeItem {
  start: number;
  end: number;
  readableDate_start: string;
  readableDate_end: string;
  map: string;
  code: string;
  DurationInSecs: number;
  DurationInMinutes: number;
  asset: string;
  remainingSecs: number;
  remainingMins: number;
  remainingTimer: string;
  eventName?: string;
}

interface MapCardProps {
  mode: {
    current: ModeItem;
    next: ModeItem;
  };
}

export default function MapCard({ mode }: MapCardProps) {
  //   console.log(mode);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());
  // Timer state
  const [timeLeft, setTimeLeft] = useState(mode.current.remainingTimer);

  useEffect(() => {
    const [initialHours, initialMinutes, initialSeconds] = timeLeft
      .split(":")
      .map(Number);
    let totalSeconds =
      initialHours * 3600 + initialMinutes * 60 + initialSeconds;

    const timerId = setInterval(() => {
      totalSeconds -= 1;

      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
        2,
        "0"
      );
      const seconds = String(totalSeconds % 60).padStart(2, "0");

      setTimeLeft(`${hours}:${minutes}:${seconds}`);

      if (totalSeconds <= 0) {
        clearInterval(timerId);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Format dates
  const formatDate = (date: Date) => {
    return date.toLocaleString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <Card className="w-full shadow-md p-4 max-h-[70vh]">
      <CardContent className="h-auto">
        <CardDescription>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold pb-4">
                <span className="text-primary">Current: </span>
                {mode.current.map}
              </h1>
              <h1 className="text-3xl font-bold pb-4">
                <span className="text-primary">Next:</span> {mode.next.map}
              </h1>
            </div>
            <div className="flex justify-between">
              {mode.current.eventName && (
                <h1 className="text-xl font-bold">
                  <span className="text-primary">Mode: </span>{" "}
                  {mode.current.eventName}
                </h1>
              )}
              <h1 className="text-xl font-bold">
                <span className="text-primary">Start time:</span>{" "}
                {formatDate(new Date(mode.current.readableDate_start))}
              </h1>
              <h1 className="text-xl font-bold">
                <span className="text-primary">End time:</span>{" "}
                {formatDate(new Date(mode.current.readableDate_end))}
              </h1>
              <h1 className="text-xl font-bold">
                <span className="text-primary">Remaining time:</span> {timeLeft}
              </h1>
            </div>
          </div>
          <div className="pt-4">
            <Image
              className="w-full object-cover rounded-md"
              src={mode.current.asset}
              width={1000}
              height={1000}
              alt="map image"
            />
          </div>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <span className="text-sm text-center">Last updated: {lastUpdated}</span>
      </CardFooter>
    </Card>
  );
}
