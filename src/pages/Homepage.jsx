import { ThreeDMarqueeDemo } from "@/components/original_ui/3DMarquee";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GitCompareArrowsIcon,
  HeadsetIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react";

import image1 from "@/assets/images/image-1.png";
import image2 from "@/assets/images/image-2.png";
import image3 from "@/assets/images/image-3.png";
import image4 from "@/assets/images/image-4.png";
import image5 from "@/assets/images/image-5.png";
import image from "@/assets/images/image.png";
import frame from "@/assets/images/Frame 26086938.png";

import { BrandImages } from "@/assets/brand_devices";

import CategoryCarousel from "@/components/original_ui/CategoryCarousel";
import CarouselSizeSale from "@/components/original_ui/CarouselSizeSale";
import ProductCard from "@/components/original_ui/ProductCard";

const ImagesList = [image1, image2, image3, image4, image5, image, frame];
const CategoriesList = [image1, image2, image3, image4, image5];
const NewProductList = [image1, image2, image3, image4];

const Homepage = () => {
  return (
    <>
      <section className="max-w-screen mx-auto relative">
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
      </section>

      <section className="max-w-screen-xl mx-auto px-4 my-6">
        <div className="grid grid-cols-2 lg:grid-cols-5">
          <CategoryCarousel images={CategoriesList} />
        </div>
      </section>

      <section className="max-w-screen-xl  mx-auto px-4 py-4 my-6 bg-[#063A88] rounded-2xl">
        <div className="grid grid-cols-3">
          <div className="col-span-1 p-4 flex flex-col items-center h-full mt-8 py-8">
            <div className="flex flex-col items-center justify-center gap-8 text-white w-full">
              <h2 className="text-5xl text-center">Products On Sale</h2>
              <span className="text-4xl text-center">Shop now!</span>
            </div>

            <Button
              className="bg-orange-500 backdrop-blur-sm hover:bg-orange-500 mt-12 text-md"
              effect="expandIcon"
              icon={ArrowRight}
              iconPlacement="right"
            >
              Explore more
            </Button>
          </div>

          <div className="col-span-2">
            <CarouselSizeSale className="px-13" images={ImagesList} />
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto  my-6">
        <div className="flex items-center justify-between border-b-2 pb-6">
          <h2 className="text-4xl font-medium">New Product</h2>
          <Button
            variant="ghost1"
            effect="expandIcon"
            icon={ArrowRight}
            iconPlacement="right"
          >
            View all
          </Button>
        </div>

        {/* ! Remember create component NewProductList */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-10 mt-3">
          {NewProductList.map((item, index) => (
            <ProductCard
              key={index}
              className="m-2 group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
              image={item}
              title={"title"}
              description={"items[index].description"}
              salePrice={123}
              originalPrice={123}
            />
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto  my-6">
        <div className="flex items-center justify-between border-b-2 pb-6">
          <h2 className="text-4xl font-medium">Best Sellers</h2>
          <Button
            variant="ghost1"
            effect="expandIcon"
            icon={ArrowRight}
            iconPlacement="right"
          >
            View all
          </Button>
        </div>

        {/* ! Remember create component NewProductList */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4  mx-10 mt-3">
          {NewProductList.map((item, index) => (
            <ProductCard
              className={
                "m-2 group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
              }
              key={index}
              image={item}
              title={"title"}
              description={"items[index].description"}
              salePrice={123}
              originalPrice={123}
            />
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto mt-10 lg:mt-8 bg-[#f8f8fa] p-5 lg:p-7 rounded-md">
        <div className="flex items-center gap-5 justify-between mb-10">
          <h2 className="font-semibold text-2xl">Shop By Brands</h2>
          <Button
            variant="ghost1"
            effect="expandIcon"
            icon={ArrowRight}
            iconPlacement="right"
            className="text-sm font-semibold tracking-wide"
          >
            View all
          </Button>
        </div>

        <div className="flex items-center gap-2.5 justify-between">
          {BrandImages.map((i, index) => (
            <div key={index}>
              <a className="bg-white w-48 h-24 flex items-center justify-center rounded-md overflow-hidden group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl">
                <img
                  alt="brandImage"
                  src={i}
                  className="max-w-[80%] h-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-2 shadow-sm shadow-shop_light_green/20 py-5">
          <div className="flex items-center gap-3 group text-lightColor hover:text-sky-600 transition-colors duration-300">
            <span className="inline-flex scale-100 group-hover:scale-90 transition-transform duration-300 ease-in-out">
              <TruckIcon className="size-10" />
            </span>
            <div className="text-md">
              <p className="text-black/80 font-bold capitalize transition-colors duration-300">
                Free Delivery
              </p>
              <p className="text-sky-700 font-medium transition-colors duration-300">
                Free shipping over $100
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 group text-lightColor hover:text-sky-600 transition-colors duration-300">
            <span className="inline-flex scale-100 group-hover:scale-90 transition-transform duration-300 ease-in-out">
              <GitCompareArrowsIcon className="size-10" />
            </span>
            <div className="text-md">
              <p className="text-black/80 font-bold capitalize transition-colors duration-300">
                Easy Returns
              </p>
              <p className="text-sky-700 font-medium transition-colors duration-300">
                Easy return policy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 group text-black hover:text-sky-600 transition-colors duration-300">
            <span className="inline-flex scale-100 group-hover:scale-90 transition-transform duration-300 ease-in-out">
              <HeadsetIcon className="size-10" />
            </span>
            <div className="text-md">
              <p className="text-black/80 font-bold capitalize transition-colors duration-300">
                Customer Support
              </p>
              <p className="text-sky-700 font-medium transition-colors duration-300">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 group text-lightColor hover:text-sky-600 transition-colors duration-300">
            <span className="inline-flex scale-100 group-hover:scale-90 transition-transform duration-300 ease-in-out">
              <ShieldCheckIcon className="size-10" />
            </span>
            <div className="text-sm">
              <p className="text-black/80 font-bold capitalize transition-colors duration-300">
                Money Back guarantee
              </p>
              <p className="text-sky-700 font-medium transition-colors duration-300">
                Quality checked by our team
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
