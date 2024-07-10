// api
import { fetchMap } from "@/api/mapApi";
// components
import MapCard from "./components/MapCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Map() {
  const mapData = await fetchMap();

  if (!mapData || mapData.error) {
    return (
      <div className="flex flex-col items-center justify-center flex-grow w-full py-12 overflow-auto">
        Error loading map data
      </div>
    );
  }

  // format title
  const formatTitle = (key: string) => {
    if (key === "ltm") {
      return key.toUpperCase();
    }
    return key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <main className="flex flex-col items-center flex-grow w-full overflow-auto container">
      <h1 className=" text-4xl text-muted-foreground font-semibold pb-8">
        Map Rotation
      </h1>
      <Tabs
        className="w-full flex flex-col items-center"
        defaultValue="battle_royale"
      >
        <TabsList className="w-[700px] p-8 max-w-[700px] flex justify-between items-center">
          {Object.entries(mapData).map(([key, value]) => (
            <TabsTrigger key={key} value={`${key}`}>
              {formatTitle(key)}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(mapData).map(([key, value]) => (
          <TabsContent key={key} value={`${key}`}>
            <MapCard mode={value} />
          </TabsContent>
        ))}

        <TabsContent value="account"></TabsContent>
      </Tabs>
    </main>
  );
}
