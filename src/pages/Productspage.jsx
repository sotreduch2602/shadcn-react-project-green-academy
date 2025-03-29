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
            <div className="flex-1 pt-5">
              <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-hide">
                {/* FilteredProductList */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  <div className="text-sm border-[1px] rounded-md border-sky-950/20 group bg-white">
                    <div className="relative group overflow-hidden rounded-md bg-[#f6f6f6]">
                      <a>
                        <img
                          className="w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg duration-500 group-hover:scale-105"
                          alt="productImage"
                          loading="lazy"
                          src="https://cdn.sanity.io/images/oe6m9gg8/production/1a4548882b7288ab4e9eebd38123cb18e704c701-500x500.png?rect=0,34,500,433&w=900&h=780&auto=format"
                        ></img>
                      </a>
                    </div>
                    <div className="p-3 flex flex-col gap-2">
                      <p className="uppercase line-clamp-1 text-xs font-medium text-lightText">
                        Television
                      </p>
                      <h2 className="font-semibold text-sm line-clamp-1">
                        43″ Class TU7000 Series Crystal UHD 4K Smart TV
                      </h2>
                      <div className="flex items-center gap-2.5">
                        <p className="font-medium">In Stock</p>
                        <p className="text-shop_dark_green/80 font-semibold">
                          6
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-5">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-red-600 text-sm">
                            $1,599.00
                          </span>
                          <span className="line-through font-normal text-zinc-500 text-sm">
                            $1,678.95
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-12 flex items-center">
                        <Button effect="gooeyLeft">Add to Cart</Button>
                      </div>
                    </div>
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
