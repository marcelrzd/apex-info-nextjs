import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

export default function MapCard({ mode }: { mode: any }) {
  console.log(mode.next);
  // format dates
  const formatDate = (date: Date) => {
    const formattedDate = date.toLocaleString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    return formattedDate;
  };
  const startDate = formatDate(new Date(mode.current.readableDate_start));
  const endDate = formatDate(new Date(mode.current.readableDate_end));
  return (
    <Card className="w-full shadow-md p-4">
      <CardContent>
        <CardDescription>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold pb-4">
                <span className="text-primary">Current: </span>
                {mode.current.map}
              </h1>
              <h1 className="text-3xl font-bold pb-4">
                <span className="text-primary">Mode: </span>Battle Royale
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">
                <span className="text-primary">Start time:</span>{" "}
                {startDate.toLocaleString()}
              </h1>
              <h1 className="text-xl font-bold">
                <span className="text-primary">End time:</span>{" "}
                {endDate.toLocaleString()}
              </h1>
              <h1 className="text-xl font-bold">
                <span className="text-primary">Remaining time:</span>{" "}
                {mode.current.remainingTimer}
              </h1>
              <h1 className="text-xl font-bold">
                <span className="text-primary">Next:</span> {mode.next.map}
              </h1>
            </div>
          </div>
          <div className="pt-4">
            <Image
              className="w-full rounded-md"
              src={mode.current.asset}
              width={1000}
              height={1000}
              alt="map image"
            />
          </div>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <span className="text-sm text-center">
          Last updated: {new Date().toLocaleString()}
        </span>
      </CardFooter>
    </Card>
  );
}
