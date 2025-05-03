import {
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, ShoppingBag, X } from "lucide-react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

const SearchBarDialog = ({ icon }) => {
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchField, setSearchField] = useState();
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("https://my-green-api-iugw.onrender.com/products").then((res) => {
      setProductsList(res.data);
      setFilteredProducts(res.data);
    });
  }, []);

  const handleSearchProducts = (e) => {
    e.preventDefault();
    if (!searchField || searchField.trim() === "") {
      setFilteredProducts(productsList);
      return;
    }

    const filtered = productsList.filter((product) =>
      product.name.toLowerCase().includes(searchField.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const handleOnChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchField(value);
    console.log(searchField);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <img
          src={icon}
          alt="Search"
          className="size-6 sm:size-8 cursor-pointer"
        />
      </AlertDialogTrigger>
      <AlertDialogContent
        className="gap-4 border bg-background p-4 sm:p-6 shadow-lg duration-200 
        sm:rounded-lg 
        w-[98vw] 
        sm:w-[90vw] 
        md:min-w-[600px] 
        lg:min-w-[900px] 
        min-h-[90vh] 
        max-h-[90vh] 
        flex 
        flex-col 
        overflow-hidden"
      >
        <AlertDialogHeader className="relative">
          <AlertDialogTitle className="text-xl sm:text-2xl lg:text-3xl">
            Product Search
          </AlertDialogTitle>
          <AlertDialogTrigger asChild className="absolute right-0 top-0">
            <Button variant="ghost" className="h-9 w-9 p-0 hover:bg-slate-100">
              <X className="h-5 w-5" />
            </Button>
          </AlertDialogTrigger>
        </AlertDialogHeader>

        <form className="relative flex w-full items-center justify-between gap-2 mb-4">
          <Input
            onChange={(e) => handleOnChange(e)}
            name="searchField"
            placeholder="Search for products..."
            className="pr-12 focus-visible:ring-sky-700/20 transition-all text-base sm:text-lg"
          />
          <Button
            className="absolute right-0 top-0 h-full w-12 sm:w-14 bg-sky-700 rounded-l-none hover:bg-sky-800 transition-colors"
            onClick={handleSearchProducts}
          >
            <Search className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </Button>
        </form>

        {/* Product List  */}
        <div className="flex-1 overflow-y-auto border border-darkColor/20 rounded-lg">
          <div className="bg-white">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 lg:p-5 border-b"
              >
                <AlertDialogTrigger asChild>
                  <a
                    className="shrink-0 mb-3 sm:mb-0"
                    onClick={() =>
                      navigate(`/products/detail/${product.product_id}`)
                    }
                  >
                    <img
                      src={product.images[0]}
                      className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 border border-black/20 rounded-lg overflow-hidden"
                    />
                  </a>
                </AlertDialogTrigger>
                <div className="flex-1 w-full sm:px-4 lg:px-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <a className="flex-1">
                      <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 line-clamp-2">
                        {product.name}
                      </h3>
                    </a>
                    <div className="flex items-center gap-2">
                      {product.salePrice ? (
                        <>
                          <span className="text-sm text-destructive md:text-base font-semibold text-shop_dark_green">
                            ${product.salePrice}
                          </span>
                          <span className="text-xs md:text-sm font-normal text-zinc-500 line-through">
                            ${product.price}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm md:text-base font-semibold text-shop_dark_green">
                          {product.price}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-3">
                    <Button
                      onClick={() => addItemToCart(product, 1)}
                      className="w-full sm:w-auto h-9 sm:h-10 bg-sky-700 text-white rounded-md hover:bg-sky-800 transition-all"
                    >
                      <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-2" />
                      <span className="text-sm">Add to Cart</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SearchBarDialog;
