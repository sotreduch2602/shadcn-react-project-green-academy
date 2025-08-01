import FilteredProductList from "@/components/original_ui/FilteredProductList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

const ProductsPage = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-4 mt-5">
        <div className="mx-0">
          <Breadcrumb className="mb-8 ml-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <ChevronRight className="h-4 w-4 " />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="">
                  Products
                </BreadcrumbLink>
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
          <FilteredProductList />
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
