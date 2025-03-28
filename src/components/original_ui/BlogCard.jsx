import { BlogImages } from "@/assets/blog/";

const BlogCard = () => {
  return (
    <>
      {BlogImages.map((image, index) => (
        <div
          key={index}
          className="rounded-md overflow-hidden border border-shop_dark_green/10 hover:border-shop_dark_green hover:shadow-lg transition-all duration-300"
        >
          <a href={`/blog/post-${index + 1}`}>
            <img
              alt={`Blog post ${index + 1}`}
              loading="lazy"
              width={500}
              height={500}
              className="w-full aspect-video object-cover transition-transform duration-300"
              src={image}
            />
          </a>
          <div className="bg-white p-5">
            <div className="text-xs flex items-center gap-5">
              <div className="flex items-center relative group cursor-pointer">
                <p className="font-semibold text-shop_dark_green tracking-wider">
                  Lifestyle
                </p>
                <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hover:cursor-pointer hoverEffect"></span>
              </div>
              <p className="flex items-center gap-1 text-lightColor relative group hover:cursor-pointer hover:text-sky-500">
                February 19, 2025
                <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hoverEffect"></span>
              </p>
            </div>

            <a
              className="text-base font-bold tracking-wide mt-5 line-clamp-2 hover:text-shop_dark_green hoverEffect"
              href="/blog/office-rental-agency-or-direct-which-is-best-when-renting-an-office-in-london"
            >
              Office rental agency or direct? Which is best when renting an
              office in London?
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
