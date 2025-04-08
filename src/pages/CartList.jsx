import { ThreeDCardDemo } from "@/components/original_ui/3DCardDemo";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/contexts/CartContext";
import Footer from "@/layouts/Footer";
import { Minus, Plus, ShoppingBag, Trash } from "lucide-react";
import { useContext } from "react";

const CartList = () => {
  const {
    cartItems,
    removeItemToCart,
    clearItemFromCart,
    clearAllItemsFromCart,
    addItemToCart,
    cartTotal,
  } = useContext(CartContext);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex items-center gap-2 py-5">
        <ShoppingBag size={24} className="text-gray-700" />
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <ThreeDCardDemo />
      ) : (
        <div className="grid lg:grid-cols-3 md:gap-8">
          <div className="lg:col-span-2 rounded-lg">
            <div className="border bg-white rounded-md">
              {cartItems?.map((item) => (
                <div
                  key={item.id}
                  className="border-b p-2.5 last:border-b-0 flex items-center justify-between gap-5"
                >
                  <div className="flex flex-1 items-start gap-2 h-36 md:h-44">
                    <img
                      src={item.images[0]}
                      className="w-32 md:w-40 h-32 md:h-40 object-cover group-hover:scale-105 overflow-hidden transition-transform duration-500"
                    />
                    <div className="h-full flex flex-1 flex-col justify-between py-1">
                      <div className="flex flex-col gap-0.5 md:gap-1.5">
                        <h2 className="text-base font-semibold line-clamp-1">
                          {item.name}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          className="hover:border-red-500 transition-colors duration-200"
                          onClick={() => clearItemFromCart(item)}
                        >
                          <Trash className="text-red-500" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between h-36 md:h-44 p-0.5 md:p-1">
                      <div className="flex flex-col items-end">
                        {item.salePrice ? (
                          <>
                            <span className="text-black font-bold text-lg">
                              ${item.salePrice}
                            </span>
                            <span className="text-gray-500 text-sm line-through">
                              ${item.price}
                            </span>
                          </>
                        ) : (
                          <span className="text-black font-bold text-lg">
                            ${item.price}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 pb-1 text-base">
                        <Button
                          variant="outline"
                          className="h-8 w-8 p-0 rounded-full"
                          onClick={() => removeItemToCart(item)}
                        >
                          <Minus size={16} className="text-gray-700" />
                        </Button>
                        <span className={"w-9 text-center"}>
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          className="h-8 w-8 p-0 rounded-full"
                          onClick={() => addItemToCart(item, 1)}
                        >
                          <Plus size={16} className="text-gray-700" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="">
                <Button
                  variant="destructive"
                  className="mx-8 my-2 cursor-pointer text-white hover:bg-red-600/80 transition-colors duration-200"
                  onClick={clearAllItemsFromCart}
                >
                  Reset Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="my-8 lg:mt-0">
            <div className="border bg-white rounded-md p-4">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>

                <div className="h-px bg-gray-200 my-4"></div>

                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span className="text-shop_dark_green">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <Button className="w-full mt-6  text-white">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CartList;
