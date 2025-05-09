import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import ProductCard from "./ProductCard";
import { useContext, useEffect } from "react";
import { ProductsContext } from "@/contexts/ProductContext";
import axios from "axios";

const CarouselSizeSale = ({ className }) => {
  const { ProductLists, setProductLists } = useContext(ProductsContext);

  useEffect(() => {
    axios
      .get("https://my-green-api-iugw.onrender.com/products")
      .then((res) => setProductLists(res.data));
  }, []);

  const filterSaleProductsList = ProductLists.filter(
    (product) => product.salePrice
  );

  return (
    <div className={cn("", className)}>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {filterSaleProductsList.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div>
                <ProductCard
                  image={product.images[0]}
                  title={product.name}
                  description={product.description}
                  originalPrice={product.price}
                  salePrice={product.salePrice}
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
