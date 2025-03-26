import logo from "@/assets/logo/logo.svg";
import { cn } from "@/lib/utils";

const Brand = ({ className }) => {
  return (
    <div
      className={cn(
        "max-w-screen-xl ml-4 flex items-center gap-2 text-lightColor cursor-pointer",
        className
      )}
    >
      <img src={logo} alt="Brand Logo" className="size-10" />
      <h2 className="text-2xl text-green font-black tracking-wider uppercase group font-sans transition-colors duration-300">
        Tech
        <span className="text-green group-hover:text-green transition-colors duration-300">
          Shop
        </span>
      </h2>
    </div>
  );
};

export default Brand;
