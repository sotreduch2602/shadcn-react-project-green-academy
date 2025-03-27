import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Brand from "@/components/original_ui/brand";

import SearchIcon from "@/assets/navbar/search.svg";
import CartIcon from "@/assets/navbar/bag.svg";
import UserIcon from "@/assets/navbar/profile.svg";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Icons = {
  search: SearchIcon,
  cart: CartIcon,
  user: UserIcon,
};

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 py-3 bg-white/70 backdrop-blur-md">
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-sky-800 to-transparent"></div>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between gap-7 text-lightColor">
          {/* Mobile Menu */}
          <div className="w-auto md:w-1/3 flex justify-start gap-2.5 md:gap-0">
            <Sheet className="flex items-center">
              <SheetTrigger className="mr-1 lg:hidden ">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <Brand className={"ml-0"} />
                  <NavigationMenu orientation="vertical" className="w-full">
                    <NavigationMenuList
                      className={"flex-col justify-start items-start my-4"}
                    >
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="/blog"
                          className="font-medium"
                        >
                          Blog
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="/blog"
                          className="font-medium"
                        >
                          Blog
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink href="/faq" className="font-medium">
                          FAQ
                        </NavigationMenuLink>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="/contact"
                          className="font-medium"
                        >
                          Contact Us
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </SheetContent>
            </Sheet>

            {/* Brand */}
            <Brand />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block lg:col-span-8">
            <NavigationMenu>
              <NavigationMenuList className="flex justify-center gap-8">
                <NavigationMenuItem>
                  <Button variant="link" effect="hoverUnderline">
                    <NavigationMenuLink href="/" className="font-medium">
                      Home
                    </NavigationMenuLink>
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="link" effect="hoverUnderline">
                    <NavigationMenuTrigger className="font-medium">
                      Products
                    </NavigationMenuTrigger>
                  </Button>

                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[450px]">
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder-image-1.jpg"
                          alt="Product 1"
                          className="h-16 w-16 rounded-md object-cover"
                        />
                        <div>
                          <h4 className="text-sm font-medium">Product 1</h4>
                          <p className="text-sm text-muted-foreground">
                            Description for Product 1
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder-image-2.jpg"
                          alt="Product 2"
                          className="h-16 w-16 rounded-md object-cover"
                        />
                        <div>
                          <h4 className="text-sm font-medium">Product 2</h4>
                          <p className="text-sm text-muted-foreground">
                            Description for Product 2
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="link" effect="hoverUnderline">
                    <NavigationMenuLink href="/" className="font-medium">
                      Blog
                    </NavigationMenuLink>
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="link" effect="hoverUnderline">
                    <NavigationMenuLink href="/" className="font-medium">
                      Home
                    </NavigationMenuLink>
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="link" effect="hoverUnderline">
                    <NavigationMenuLink
                      href="/contact"
                      className="font-medium whitespace-nowrap"
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Icons */}
          <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
            <img
              src={Icons.search}
              alt="Search"
              className="size-8 cursor-pointer"
            />
            <img
              src={Icons.cart}
              alt="Cart"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src={Icons.user}
              alt="User"
              className="size-9 cursor-pointer"
            />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
