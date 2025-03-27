import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import ProductCard from "./ProductCard";

const CarouselSize = ({ images, className, products }) => {
  // Default product data if not provided
  const defaultProducts = [
    {
      title: "Logitech G502 Gaming Mouse",
      description: "Logitech G502 Gaming Mouse",
      originalPrice: 79.99,
      salePrice: 49.99,
    },
  ];

  // Use provided products or default to the sample product repeated for each image
  const items = products || images.map(() => defaultProducts[0]);
  return (
    <div className={cn("", className)}>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ProductCard
                  image={image}
                  title={items[index].title}
                  description={items[index].description}
                  originalPrice={items[index].originalPrice}
                  salePrice={items[index].salePrice}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSize;
