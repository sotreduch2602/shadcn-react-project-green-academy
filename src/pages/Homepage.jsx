import { ThreeDMarqueeDemo } from "@/components/original_ui/3DMarquee";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock12Icon,
  LucideComputer,
  MapPin,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react";

import CategoryCarousel from "@/components/original_ui/CategoryCarousel";
import CarouselSizeSale from "@/components/original_ui/CarouselSizeSale";
import ProductCard from "@/components/original_ui/ProductCard";
import ShopByBrandIcon from "@/components/original_ui/ShopByBrandIcon";
import BlogCard from "@/components/original_ui/BlogCard";
import Footer from "@/layouts/Footer";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BrandsContext } from "@/contexts/BrandContext";
import { ProductsContext } from "@/contexts/ProductContext";
import axios from "axios";

const Homepage = () => {
  const navigate = useNavigate();
  const { BrandLists, setSelectBrand } = useContext(BrandsContext);
  const { ProductLists, setProductLists } = useContext(ProductsContext);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProductLists(res.data));
  }, []);

  function MoveToProductsPageWithBrand(brand) {
    setSelectBrand(brand);
    navigate("/products");
  }

  const filterNewProductsList = ProductLists.filter(
    (product) => product.isNewProduct === 1
  );

  const filterBestProductsList = ProductLists.filter(
    (product) => product.isBestSellerProduct === 1
  );

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
            className="bg-orange-500 backdrop-blur-sm hover:bg-orange-500 cursor-pointer"
            onClick={() => navigate("/products")} // Replaced "as={Link}" with "onClick"
          >
            Explore more
          </Button>
        </div>
        <div className="relative z-0">
          <ThreeDMarqueeDemo />
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 my-6">
        <div className="grid grid-cols-3 lg:grid-cols-6">
          <CategoryCarousel />
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
              className="bg-orange-500 backdrop-blur-sm hover:bg-orange-500 mt-12 text-md cursor-pointer"
              effect="expandIcon"
              icon={ArrowRight}
              iconPlacement="right"
              onClick={() => navigate("/products")}
            >
              Explore more
            </Button>
          </div>

          <div className="col-span-2">
            <CarouselSizeSale className="px-13" />
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto  my-6">
        <div className="flex items-center justify-between border-b-2 pb-6">
          <h2 className="text-3xl font-medium">New Product</h2>
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
          {filterNewProductsList.map((item, index) => (
            <a onClick={() => navigate(`/products/detail/${item.product_id}`)}>
              <ProductCard
                key={index}
                className="m-2 group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
                image={item.images[0]}
                title={item.name}
                description={item.description}
                salePrice={item.salePrice}
                originalPrice={item.price}
              />
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto  my-6">
        <div className="flex items-center justify-between border-b-2 pb-6">
          <h2 className="text-3xl font-medium">Best Sellers</h2>
          <Button
            variant="ghost1"
            effect="expandIcon"
            icon={ArrowRight}
            iconPlacement="right"
            onClick={() => navigate("/products")}
            className="cursor-pointer"
          >
            View all
          </Button>
        </div>

        {/* ! Remember create component NewProductList */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-10 mt-3">
          {filterBestProductsList.map((item) => (
            <a>
              <ProductCard
                className={
                  "m-2 group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
                }
                key={item.product_id}
                image={item.images[0]}
                title={item.name}
                description={item.description}
                salePrice={item.salePrice}
                originalPrice={item.price}
              />
            </a>
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
            className="text-sm font-semibold tracking-wide cursor-pointer"
            onClick={() => navigate("/products")}
          >
            View all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2.5 justify-between">
          {BrandLists.map((brand, index) => (
            <div
              key={index}
              className="col-span-1 flex justify-center cursor-pointer"
              onClick={() => MoveToProductsPageWithBrand(brand)}
            >
              <a className="bg-white w-48 h-24 flex items-center justify-center rounded-md overflow-hidden group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl">
                <img
                  alt="brandImage"
                  src={brand.logo}
                  className="max-w-[80%] h-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-2 shadow-sm shadow-shop_light_green/20 py-5">
          <ShopByBrandIcon></ShopByBrandIcon>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto my-6">
        <div className="flex items-center justify-between border-b-2 pb-6">
          <h2 className="text-3xl font-medium">Our Blog</h2>
          <Button
            variant="ghost1"
            effect="expandIcon"
            icon={ArrowRight}
            iconPlacement="right"
            onClick={() => navigate("/products")}
            className="cursor-pointer"
          >
            View all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          <BlogCard className="cursor-pointer"></BlogCard>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Homepage;
