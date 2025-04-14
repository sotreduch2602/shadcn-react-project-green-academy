import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Brand from "@/components/original_ui/brand";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SearchIcon from "@/assets/navbar/search.svg";
import CartIcon from "@/assets/navbar/bag.svg";
import UserIcon from "@/assets/navbar/profile.svg";
import { Outlet } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useContext } from "react";
import { UserContext } from "@/contexts/user/UserContext";
import { CartContext } from "@/contexts/CartContext";
import SearchBarDialog from "@/components/original_ui/SearchBarDialog";
import { Dashboard, LayoutBoard } from "tabler-icons-react";
import { toast } from "sonner";

export const Icons = {
  search: SearchIcon,
  cart: CartIcon,
  user: UserIcon,
};

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { cartCount } = useContext(CartContext);

  const handleLogOut = () => {
    setCurrentUser(null); // This will remove from localStorage
    navigate("/login");
    toast.success("Logged out successfully");
  };

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
                  <Link to="/">
                    <Brand className={"ml-0"} />
                  </Link>
                  <NavigationMenu orientation="vertical" className="w-full">
                    <NavigationMenuList
                      className={"flex-col justify-start items-start my-4"}
                    >
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="/"
                          className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-800 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                          Products
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="/blog"
                          className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-800 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                          Blog
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="/faq"
                          className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-800 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                          FAQ
                        </NavigationMenuLink>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuLink
                          href="/contact"
                          className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-800 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
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
            <Link to="/">
              <Brand />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block lg:col-span-8">
            <NavigationMenu>
              <NavigationMenuList className="flex justify-center gap-8">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    onClick={() => navigate("/")}
                    className="font-medium cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-800 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    onClick={() => navigate("/products")}
                    className="font-medium cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-800 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Products
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    onClick={() => navigate("/blog")}
                    className="font-medium cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-800 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    onClick={() => navigate("/faq")}
                    className="font-medium cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-800 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    FAQ
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    onClick={() => navigate("/contact")}
                    className="font-medium cursor-pointer whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-800 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Icons */}
          <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
            <div>
              <SearchBarDialog icon={Icons.search} />
            </div>

            <div className="relative" onClick={() => navigate("/cart")}>
              <img
                src={Icons.cart}
                alt="Cart"
                className="w-6 h-6 cursor-pointer"
              />
              <Badge className=" absolute -top-2 -right-2 bg-red-500 text-white text px-1.5 py-0.5 rounded-full">
                {cartCount}
              </Badge>
            </div>

            <div>
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <img
                      src={Icons.user}
                      alt="User"
                      className="w-9 h-9 cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48" align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => navigate("/profile")}
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => navigate("/admin")}
                    >
                      <LayoutBoard className="mr-2 h-4 w-4" />
                      <span>Admin</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer text-red-600"
                      onClick={handleLogOut}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to="/login"
                  className="pb-2 font-medium whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-800 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
