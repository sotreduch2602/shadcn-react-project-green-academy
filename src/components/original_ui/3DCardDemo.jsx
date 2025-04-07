import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Button } from "../ui/button";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="w-full text-center text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Your cart is feeling a little empty
        </CardItem>
        <CardItem
          translateZ="60"
          className="mx-auto text-center text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          It looks like you haven't added anything to your cart yet. Let's
          change that and find some amazing products for you!
        </CardItem>
        <CardItem translateZ="100" className="mx-auto mt-4">
          <img
            src="../../../public/assets/images/emptyCart.webp"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-10">
          <CardItem
            translateZ={100}
            className="px-4 py-2 rounded-xl text-xs font-bold"
          >
            <Button
              variant="skyblue"
              className=" hover:bg-orange-500/90 transistion-all duration-200 cursor-pointer"
            >
              Explore more
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
