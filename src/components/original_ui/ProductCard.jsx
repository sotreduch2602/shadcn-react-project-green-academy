import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ProductCard = ({
  image,
  title,
  description,
  originalPrice,
  salePrice,
  className,
}) => {
  let discountPercentage;

  if (salePrice) {
    discountPercentage = Math.round(
      ((originalPrice - salePrice) / originalPrice) * 100
    );
  }

  return (
    <Card className={cn("relative overflow-hidden", className)}>
      {/* Sale Badge */}
      {discountPercentage && (
        <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg font-bold z-10">
          -{discountPercentage}%
        </div>
      )}

      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <div className=" flex items-center justify-center h-[154px]">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-full object-contain h-auto"
            />
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center p-2 gap-2">
        <h3 className="font-semibold text-base text-center">{title}</h3>
        <CardDescription className={"text-center"}>
          {description}
        </CardDescription>

        <div className="flex items-center gap-2 mt-2">
          {discountPercentage ? (
            <>
              <span className="text-red-500 font-bold">${salePrice}</span>
              <span className="text-gray-400 line-through text-sm">
                ${originalPrice}
              </span>
            </>
          ) : (
            <span className="text-sky-700 font-bold">${originalPrice}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
