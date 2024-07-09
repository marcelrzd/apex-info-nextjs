// components

import { fetchMap } from "@/api/mapApi";
import MapCard from "./components/MapCard";

export default async function Map() {
  const mapData = await fetchMap();
  // console.log(mapData.battle_royale);
  const br = mapData.battle_royale;

  if (!mapData || mapData.error) {
    return (
      <div className="flex flex-col items-center justify-center flex-grow w-full py-12 overflow-auto">
        Error loading map data
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center flex-grow w-full overflow-auto container">
      <h1 className=" text-4xl text-muted-foreground font-semibold pb-8">
        Map Rotation
      </h1>
      <MapCard mode={br} />
    </main>
  );
}
