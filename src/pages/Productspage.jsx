import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slider } from "@/components/ui/slider";

const ProductsPage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 mt-5">
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
            <h2 class="font-semibold text-lg uppercase tracking-wide">
              Get the products as your needs
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-5 border-t border-t-[#1b5a7e]/50">
            <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 scrollbar-hide border-r border-r-[#1b5a7e]/50">
              <div class="w-full bg-white p-5">
                <h2 class="text-base font-black">Brands</h2>
                <div role="radiogroup" className="grid gap-2 mt-2 space-y-1">
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                    ></button>
                    <label
                      class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      for="hi-tech-limited"
                    >
                      Hi-Tech Limited
                    </label>
                  </div>
                </div>
              </div>
              <div class="w-full bg-white p-5">
                <h2 class="text-base font-black">Price</h2>
                <div className="grid gap-2 mt-2 space-y-1">
                  <Slider defaultValue={[33]} max={100} step={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
