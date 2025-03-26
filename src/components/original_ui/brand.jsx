import logo from "@/assets/logo/logo.svg";

const Brand = () => {
  return (
    <div className="max-w-screen-xl ml-4 flex items-center justify-between gap-2 text-lightColor cursor-pointer">
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
