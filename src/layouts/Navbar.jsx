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

export const Icons = {
  search: SearchIcon,
  cart: CartIcon,
  user: UserIcon,
};

const Navbar = () => {
  return (
    <div className="p-4 border-b-sky-300 border-b flex justify-center">
      <div className="container grid grid-cols-12 gap-6">
        {/* Mobile Menu */}
        <div className="lg:hidden col-span-2">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left">
              <NavigationMenu orientation="vertical" className="w-full">
                <NavigationMenuList className="flex-col space-y-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/" className="font-medium">
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/products"
                      className="font-medium"
                    >
                      Products
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/blog" className="font-medium">
                      Blog
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/faq" className="font-medium">
                      FAQ
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/contact" className="font-medium">
                      Contact Us
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>

        {/* Brand */}
        <Brand className="col-span-8 lg:col-span-2" />

        {/* Desktop Navigation */}
        <div className="hidden lg:block lg:col-span-8">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center w-full gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="font-medium">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
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
                <NavigationMenuLink href="/blog" className="font-medium">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/faq" className="font-medium">
                  FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="font-medium">
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Icons */}
        <div className="col-span-2 flex items-center justify-end gap-4">
          <img
            src={Icons.search}
            alt="Search"
            className="w-6 h-6 cursor-pointer"
          />
          <img src={Icons.cart} alt="Cart" className="w-6 h-6 cursor-pointer" />
          <img src={Icons.user} alt="User" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
