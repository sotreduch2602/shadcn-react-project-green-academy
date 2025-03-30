import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import axios from "axios";

const CategoryCarousel = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => setCategoriesList(res.data));
  }, []);

  return (
    <>
      {categoriesList.map((category) => (
        <Card
          key={category.category_id}
          className={
            "m-2 group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-105"
          }
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <div className="size-[112px] flex items-center justify-center">
                <img
                  src={category.imageURL}
                  alt={category.name}
                  className="max-w-full max-h-full object-contain h-auto"
                />
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col items-center justify-center gap-2">
            <h3 className="font-semibold text-base text-center">
              {category.name}
            </h3>
            <CardDescription className={"text-center"}>
              {category.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CategoryCarousel;
