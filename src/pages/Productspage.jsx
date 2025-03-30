import FilteredProductList from "@/components/original_ui/FilteredProductList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/layouts/Footer";

const ProductsPage = () => {
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
          <FilteredProductList />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductsPage;
