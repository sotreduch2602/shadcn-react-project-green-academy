import BlogCard from "@/components/original_ui/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { useNavigate } from "react-router-dom";

const Blogpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="max-w-screen-xl mx-auto my-6">
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
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

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
    </>
  );
};

export default Blogpage;
