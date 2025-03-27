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

const CarouselSizeSale = ({ images, className, products }) => {
  const defaultProducts = [
    {
      title: "Logitech G502 Gaming Mouse",
      description: "Logitech G502 Gaming Mouse",
      originalPrice: 79.99,
      salePrice: 49.99,
    },
  ];

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

export default CarouselSizeSale;
