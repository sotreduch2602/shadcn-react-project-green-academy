import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartContext } from "@/contexts/CartContext";
import Footer from "@/layouts/Footer";
import { Minus, Plus, ShoppingBag, Trash } from "lucide-react";
import { useContext } from "react";

const CartList = () => {
  const { cartItems, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex items-center gap-2 py-5">
        <ShoppingBag size={24} className="text-gray-700" />
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
      </div>
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
                      <Button variant="outline">
                        <Trash />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between h-36 md:h-44 p-0.5 md:p-1">
                    <span className="text-black font-bold text-lg">
                      {item.price}
                    </span>
                    <div className="flex items-center gap-1 pb-1 text-base">
                      <Button
                        variant="outline"
                        className="h-8 w-8 p-0 rounded-full"
                        onClick={() => addItemToCart(item, -1)}
                      >
                        <Minus size={16} className="text-gray-700" />
                      </Button>
                      <span className={"w-9 text-center"}>{item.quantity}</span>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartList;
