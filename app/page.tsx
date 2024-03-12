// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="flex container flex-col items-center flex-grow w-full py-4 overflow-auto">
      <h1 className="text-3xl font-bold uppercase">Latest News</h1>
      <div className="flex justify-center items-center h-custom-height">
        <Carousel
          className="w-full max-w-xs"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 ">
                  <div className="flex aspect-square bg-blue-400 items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </div>
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
