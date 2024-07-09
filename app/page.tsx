import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchNews } from "@/api/newsApi";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const newsData = await fetchNews();

  return (
    <main className="flex container flex-col items-center h-custom-height flex-grow w-full py-4 overflow-auto">
      <div className="flex justify-center flex-col items-center h-screen w-[90%] 2xl:w-[97%]">
        <h1 className="text-5xl font-bold uppercase pb-8">Latest News</h1>
        <Carousel
          className="w-full p-3"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {newsData.map((newsItem: any, index: number) => (
              <CarouselItem key={index}>
                <div className="flex justify-center w-full flex-col gap-2">
                  <span className="text-4xl font-semibold">
                    {newsItem.title}
                  </span>
                  <span className="text-xl font-semibold">
                    {newsItem.short_desc}
                    <Link
                      href={newsItem.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 font-bold text-primary rounded-md"
                    >
                      Read more{" ->"}
                    </Link>
                  </span>
                </div>
                <div className=" relative w-full flex h-[60vh] items-center justify-center">
                  <Image
                    src={newsItem.img}
                    alt="News Image"
                    width={1000}
                    height={1000}
                    className="w-full"
                  />
                  {/* <div className="absolute flex flex-row justify-end bottom-0 right-0 pr-1 pb-6">
                    <p className="p-2 bg-primary text-white rounded-md">
                      Read more
                    </p>
                  </div> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:bg-black/20" />
          <CarouselNext className="hover:bg-black/20" />
        </Carousel>
      </div>
    </main>
  );
}
