import { Clock, Computer, ShieldCheck, Truck } from "lucide-react";

import { BrandYoutube } from "tabler-icons-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b">
          <div className="flex items-center justify-center gap-3 group hover:bg-gray-100 p-4 transition-colors">
            <Computer />
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                Latest and Greatest Tech
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 group hover:bg-gray-100 p-4 transition-colors">
            <ShieldCheck />
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                Guarantee
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 group hover:bg-gray-100 p-4 transition-colors">
            <Truck />
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                Free Shipping over 1000$
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 group hover:bg-gray-100 p-4 transition-colors">
            <Clock />
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                24/7 Support
              </h3>
            </div>
          </div>
        </div>

        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a className="cursor-pointer">
              <h2 className="text-2xl text-orange-600 font-black tracking-wider uppercase group font-sans hover:text-sky-900 transition-colors duration-300">
                Tech
                <span className="text-sky-900 group-hover:text-green transition-colors duration-300">
                  Shop
                </span>
              </h2>
            </a>
            <p className="text-gray-600 text-sm">
              Discover curated furniture collections at Shopcart, blending style
              and comfort to elevate your living spaces.
            </p>
            <div className="flex items-center gap-3.5 text-black/60">
              <a className="p-2 border rounded-full border-black/60 ">
                <BrandYoutube size={20} />
              </a>
              <a className="p-2 border rounded-full  border-black/60">
                <BrandYoutube size={20} />
              </a>
              <a className="p-2 border rounded-full  border-black/60">
                <BrandYoutube size={20} />
              </a>
              <a className="p-2 border rounded-full  border-black/60  ">
                <BrandYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-gray-600 hover:text-shop_dark_green text-sm font-medium hoverEffect"
                  href="/about"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-shop_dark_green text-sm font-medium hoverEffect"
                  href="/contact"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-shop_dark_green text-sm font-medium hoverEffect"
                  href="/contact"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-gray-600 hover:text-shop_dark_green text-sm font-medium hoverEffect capitalize"
                  href="/category/mobiles"
                >
                  Mobiles
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-shop_dark_green text-sm font-medium hoverEffect capitalize"
                  href="/category/appliances"
                >
                  Appliances
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-shop_dark_green text-sm font-medium hoverEffect capitalize"
                  href="/category/smartphones"
                >
                  Smartphones
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-shop_dark_green text-sm font-medium hoverEffect capitalize"
                  href="/category/air-conditioners"
                >
                  Air Conditioners
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-shop_dark_green text-sm font-medium hoverEffect capitalize"
                  href="/category/washing-machine"
                >
                  Washing Machine
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                required=""
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
