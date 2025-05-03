import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import ProductManagement from "./ProductManagement";
import OrderManagement from "./OrderManagement";

export default function AdminPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-5">
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-full max-w-[1440px] min-h-[1024px] relative">
          <div className="container px-4">
            <Breadcrumb className="mb-3 ml-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="text-neutralgray-717171 font-web-body-lg"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <ChevronRight className="h-4 w-4 text-neutralgray-717171" />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="text-neutralgray-717171 font-web-body-lg"
                  >
                    Admin
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Tabs defaultValue="products" className={"w-full"}>
              <TabsList className={"grid w-full grid-cols-2"}>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
              </TabsList>
              <TabsContent value="products">
                <ProductManagement />
              </TabsContent>
              <TabsContent value="orders">
                <OrderManagement />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
