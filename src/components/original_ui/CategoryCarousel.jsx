import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CategoryCarousel = ({ images }) => {
  return (
    <>
      {images.map((i, index) => (
        <Card key={index} className={"mx-2"}>
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <div className="size-[112px] flex items-center justify-center">
                <img
                  src={i}
                  alt={"title"}
                  className="max-w-full max-h-full object-contain h-auto"
                />
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col items-center justify-center gap-2">
            <h3 className="font-semibold text-base text-center">{"title"}</h3>
            <CardDescription className={"text-center"}>
              {"description"}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CategoryCarousel;
