import { ThreeDMarqueeDemo } from "@/components/original_ui/3DMarquee";
import { CarouselSize } from "@/components/original_ui/Carousel";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";

const Homepage = () => {
  return (
    <>
      <div className="max-w-screen mx-auto relative">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
          <h2 className="text-7xl font-black text-white drop-shadow-lg">
            Tech Shop
          </h2>
          <span className="text-3xl font-medium text-white drop-shadow-md">
            "Join the
            <span className="text-orange-400"> digital revolution"</span>
          </span>
          <Button
            effect="shineHover"
            className="bg-orange-500 backdrop-blur-sm hover:bg-orange-500"
          >
            Explore more
          </Button>
        </div>
        <div className="relative z-0">
          <ThreeDMarqueeDemo />
        </div>
      </div>

      <div className="max-w-screen-xl  mx-auto px-4 py-4 my-6 bg-[#063A88] rounded-2xl">
        <div className="grid grid-cols-3">
          <div className="col-span-1 p-4">
            <div className="flex flex-col items-center justify-center gap-8 text-white">
              <h2 className="text-5xl">Categories</h2>
              <span className="text-4xl">Shop now!</span>
            </div>
          </div>
          <div className="col-span-2">
            <CarouselSize className="px-13" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
