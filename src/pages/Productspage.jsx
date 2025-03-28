import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button"; // Import the Button component
import { useState } from "react";
import {
  Laptop,
  Smartphone,
  Camera,
  Headphones,
  Watch,
  Briefcase,
} from "lucide-react"; // Import icons from lucide-react

const ProductsPage = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const [priceRange, setPriceRange] = useState([20, 80]);

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-4 mt-5">
        <div className="mx-0">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className={"text-[18px]"} href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className={"size-4"} />
              <BreadcrumbItem>
                <BreadcrumbPage className={"text-[18px]"}>
                  Products
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="sticky top-0 z-10 mb-5">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-2xl text-sky-700 uppercase tracking-wide">
              Get the products as your needs
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-5 border-t border-t-[#1b5a7e]/50">
            <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 scrollbar-hide border-r border-r-[#1b5a7e]/50 ">
              <div className="w-full bg-white p-5">
                <h2 className="text-base font-black">Categories</h2>
                <div className="grid grid-cols-2 gap-2 mt-2 space-y-1">
                  {[
                    { name: "Laptops", icon: <Laptop /> },
                    { name: "Phones", icon: <Smartphone /> },
                    { name: "Cameras", icon: <Camera /> },
                    { name: "Headphones", icon: <Headphones /> },
                    { name: "Watches", icon: <Watch /> },
                    { name: "Accessories", icon: <Briefcase /> },
                  ].map((category) => (
                    <Button
                      key={category.name}
                      variant={
                        selectedCategory === category.name
                          ? "default"
                          : "outline"
                      }
                      className={`w-full text-left flex items-center gap-2 ${
                        selectedCategory === category.name
                          ? "bg-sky-700 text-white"
                          : "text-gray-700"
                      }`}
                      onClick={() => handleCategorySelect(category.name)}
                    >
                      <span className="w-5 h-5">{category.icon}</span>
                      {category.name}
                    </Button>
                  ))}
                </div>
                {selectedCategory && (
                  <Button
                    variant="link"
                    className="w-full mt-3 text-gray-700"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Reset Category
                  </Button>
                )}
              </div>

              <div className="w-full bg-white p-5">
                <h2 className="text-base font-black">Brands</h2>
                <div className="grid grid-cols-2 gap-2 mt-2 space-y-1">
                  {[
                    "Apple",
                    "Samsung",
                    "Sony",
                    "Canon",
                    "Huawei",
                    "Lenovo",
                  ].map((brand) => (
                    <Button
                      key={brand}
                      variant={selectedBrand === brand ? "default" : "outline"}
                      className={`w-full text-left ${
                        selectedBrand === brand
                          ? "bg-sky-700 text-white"
                          : "text-gray-700"
                      }`}
                      onClick={() => handleBrandSelect(brand)}
                    >
                      {brand}
                    </Button>
                  ))}
                </div>
                {selectedBrand && (
                  <Button
                    variant="link"
                    className="w-full mt-3 text-gray-700"
                    onClick={() => setSelectedBrand(null)}
                  >
                    Reset Brand
                  </Button>
                )}
              </div>

              <div className="w-full bg-white p-5">
                <h2 className="text-base font-black">Price</h2>
                <div className="grid gap-2 mt-2 space-y-1">
                  <Slider
                    defaultValue={priceRange}
                    max={100}
                    step={1}
                    onValueChange={handlePriceChange}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
