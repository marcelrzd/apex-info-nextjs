import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchData } from "@/api/newsApi";

export default async function Home() {
  const newsData = await fetchData();
  console.log("news", newsData);

  return (
    <main className="flex container flex-col items-center h-custom-height flex-grow w-full py-4 overflow-auto">
      <h1 className="text-3xl font-bold uppercase">Latest News</h1>
      <div className="flex justify-center items-center h-screen w-[90%] 2xl:w-[97%]">
        <Carousel
          className="w-full p-4"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {newsData.slice(0, 5).map((newsItem: any, index: number) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex h-[70vh] bg-blue-400 items-center justify-center p-6">
                    <span className="text-4xl font-semibold">
                      {newsItem.title}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}

            {/* {newsData.map((new: number, index: number) => (
              <CarouselItem key={index}>
                <div className="p-1 ">
                  <div className="flex h-[70vh] bg-blue-400 items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </CarouselItem>
            ))} */}
          </CarouselContent>
          <CarouselPrevious className="hover:bg-black/20" />
          <CarouselNext className="hover:bg-black/20" />
        </Carousel>
      </div>
    </main>
  );
}
