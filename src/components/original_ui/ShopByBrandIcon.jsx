import {
  GitCompareArrowsIcon,
  HeadsetIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react";

const ShopByBrandIcon = () => {
  return (
    <>
      <div className="flex items-center gap-3 group text-lightColor hover:text-sky-600 transition-colors duration-300">
        <span className="inline-flex scale-100 group-hover:scale-90 transition-transform duration-300 ease-in-out">
          <TruckIcon className="size-10" />
        </span>
        <div className="text-md">
          <p className="text-black/80 font-bold capitalize transition-colors duration-300">
            Free Delivery
          </p>
          <p className="text-sky-700 font-medium transition-colors duration-300">
            Free shipping over $100
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 group text-lightColor hover:text-sky-600 transition-colors duration-300">
        <span className="inline-flex scale-100 group-hover:scale-90 transition-transform duration-300 ease-in-out">
          <GitCompareArrowsIcon className="size-10" />
        </span>
        <div className="text-md">
          <p className="text-black/80 font-bold capitalize transition-colors duration-300">
            Easy Returns
          </p>
          <p className="text-sky-700 font-medium transition-colors duration-300">
            Easy return policy
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 group text-black hover:text-sky-600 transition-colors duration-300">
        <span className="inline-flex scale-100 group-hover:scale-90 transition-transform duration-300 ease-in-out">
          <HeadsetIcon className="size-10" />
        </span>
        <div className="text-md">
          <p className="text-black/80 font-bold capitalize transition-colors duration-300">
            Customer Support
          </p>
          <p className="text-sky-700 font-medium transition-colors duration-300">
            Friendly 24/7 customer support
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 group text-lightColor hover:text-sky-600 transition-colors duration-300">
        <span className="inline-flex scale-100 group-hover:scale-90 transition-transform duration-300 ease-in-out">
          <ShieldCheckIcon className="size-10" />
        </span>
        <div className="text-sm">
          <p className="text-black/80 font-bold capitalize transition-colors duration-300">
            Money Back guarantee
          </p>
          <p className="text-sky-700 font-medium transition-colors duration-300">
            Quality checked by our team
          </p>
        </div>
      </div>
    </>
  );
};

export default ShopByBrandIcon;
