import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import {
  Laptop,
  Smartphone,
  Camera,
  Headphones,
  Watch,
  Briefcase,
  ShoppingBag,
} from "lucide-react";
import { CategoriesContext } from "@/contexts/CategoriesContext";
import { BrandsContext } from "@/contexts/BrandContext";
import { ProductsContext } from "@/contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "@/contexts/CartContext";
import axiosInstance from "@/api/axios";

const iconComponents = {
  Laptop: Laptop,
  Smartphone: Smartphone,
  Camera: Camera,
  Headphones: Headphones,
  Watch: Watch,
  Briefcase: Briefcase,
};

const FilteredProductList = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 999]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [brandsList, setBrandsList] = useState([]);
  const { selectCategory, setSelectCategory } = useContext(CategoriesContext);
  const { selectBrand, setSelectBrand } = useContext(BrandsContext);
  const { ProductLists } = useContext(ProductsContext);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    Promise.all([
      axiosInstance.get("/categories"),
      axiosInstance.get("/brands"),
    ])
      .then(([categoriesRes, brandsRes]) => {
        setCategoriesList(categoriesRes.data);
        setBrandsList(brandsRes.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    setFilteredProductList(ProductLists); // Start with the full product list

    if (selectCategory.name) {
      setFilteredProductList((prev) =>
        prev.filter((item) => item.category_id === selectCategory.category_id)
      );
    }

    if (selectBrand.name) {
      setFilteredProductList((prev) =>
        prev.filter((item) => item.brand_id === selectBrand.brand_id)
      );
    }

    if (priceRange) {
      setFilteredProductList((prev) =>
        prev.filter(
          (item) =>
            (item.salePrice || item.price) >= priceRange[0] &&
            (item.salePrice || item.price) <= priceRange[1]
        )
      );
    }
  }, [selectCategory, selectBrand, priceRange, ProductLists]);

  const renderIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  const handleCategorySelect = (category) => setSelectCategory(category);
  const handleResetCategorySelect = () => setSelectCategory({});

  const handleBrandSelect = (brand) => setSelectBrand(brand);
  const handleResetBrandSelect = () => setSelectBrand({});

  return (
    <div className="flex flex-col md:flex-row gap-5 border-t border-t-[#1b5a7e]/50">
      <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 scrollbar-hide border-r border-r-[#1b5a7e]/50">
        {/* Categories */}
        <div className="w-full bg-white p-5">
          <h2 className="text-base font-black">Categories</h2>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {categoriesList.map((category) => (
              <Button
                key={category.category_id}
                variant={
                  selectCategory.name === category.name ? "default" : "outline"
                }
                className={`w-full text-left flex items-center gap-2 ${
                  selectCategory.name === category.name
                    ? "bg-sky-700 text-white"
                    : "text-gray-700"
                }`}
                onClick={() => handleCategorySelect(category)}
              >
                <span className="w-5 h-5">{renderIcon(category.icon)}</span>
                {category.name}
              </Button>
            ))}
          </div>
          {selectCategory.name && (
            <Button
              variant="link"
              className="w-full mt-3 text-gray-700"
              onClick={handleResetCategorySelect}
            >
              Reset Category
            </Button>
          )}
        </div>

        {/* Brands */}
        <div className="w-full bg-white p-5">
          <h2 className="text-base font-black">Brands</h2>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {brandsList.map((brand) => (
              <Button
                key={brand.brand_id}
                variant={
                  selectBrand.name === brand.name ? "default" : "outline"
                }
                className={`w-full text-left ${
                  selectBrand.name === brand.name
                    ? "bg-sky-700 text-white"
                    : "text-gray-700"
                }`}
                onClick={() => handleBrandSelect(brand)}
              >
                {brand.name}
              </Button>
            ))}
          </div>
          {selectBrand.name && (
            <Button
              variant="link"
              className="w-full mt-3 text-gray-700"
              onClick={handleResetBrandSelect}
            >
              Reset Brand
            </Button>
          )}
        </div>

        {/* Price Range */}
        <div className="w-full bg-white p-5">
          <h2 className="text-base font-black">Price</h2>
          <div className="grid gap-2 mt-2">
            <Slider
              defaultValue={priceRange}
              max={2000}
              step={1}
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex-1 pt-5">
        <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-hide">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {filteredProductList.map((item) => {
              let discountPercentage;

              if (item.salePrice) {
                discountPercentage = Math.round(
                  ((item.price - item.salePrice) / item.price) * 100
                );
              }

              return (
                <div
                  key={item.product_id}
                  className="text-sm border-[1px] rounded-md border-sky-950/20 group bg-white"
                >
                  <div className="relative group overflow-hidden rounded-md bg-[#f6f6f6]">
                    {/* Sale Badge */}
                    {discountPercentage && (
                      <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg font-bold z-10">
                        -{discountPercentage}%
                      </div>
                    )}

                    <a
                      onClick={() =>
                        navigate(`/products/detail/${item.product_id}`)
                      }
                    >
                      <img
                        className="w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg duration-500 group-hover:scale-105"
                        alt="productImage"
                        loading="lazy"
                        src={item.images[0]}
                      />
                    </a>
                  </div>
                  <div className="p-3 flex flex-col gap-2">
                    <p className="uppercase line-clamp-1 text-xs font-medium text-sky-700">
                      {categoriesList.find(
                        (category) => category.category_id === item.category_id
                      )?.name || "Unknown Category"}
                    </p>
                    <h2 className="font-semibold text-sm line-clamp-1">
                      {item.name}
                    </h2>
                    <div className="flex items-center gap-2.5">
                      <p className="font-medium">In Stock</p>
                      <p className="text-shop_dark_green/80 font-semibold">
                        {item.stock}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex items-center gap-2">
                        {discountPercentage ? (
                          <>
                            <span className="text-red-500 font-bold">
                              ${item.salePrice}
                            </span>
                            <span className="text-gray-400 line-through text-sm">
                              ${item.price}
                            </span>
                          </>
                        ) : (
                          <span className="text-sky-700 font-bold">
                            ${item.price}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="w-full h-12 flex items-center">
                      <Button
                        variant="skyblue"
                        effect="shineHover"
                        onClick={() => addItemToCart(item, 1)}
                      >
                        <ShoppingBag />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredProductList;
