import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Truck, RotateCcw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: '43" Class TU7000 Series Crystal UHD 4K Smart TV',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde illum expedita dolores aut nostrum, quidem placeat laborum neque, beatae perspiciatis atque, sint tempore aliquid molestiae consequatur eum darum.",
    price: 1599.0,
    originalPrice: 1678.95,
    rating: 5,
    reviews: 120,
    inStock: true,
    images: [
      "https://cdn.sanity.io/images/oe6m9gg8/production/1a4548882b7288ab4e9eebd38123cb18e704c701-500x500.png?rect=0,34,500,433&w=900&h=780&auto=format",
      "https://cdn.sanity.io/images/oe6m9gg8/production/1a4548882b7288ab4e9eebd38123cb18e704c701-500x500.png?rect=0,34,500,433&w=900&h=780&auto=format",
      "https://cdn.sanity.io/images/oe6m9gg8/production/1a4548882b7288ab4e9eebd38123cb18e704c701-500x500.png?rect=0,34,500,433&w=900&h=780&auto=format",
      "https://cdn.sanity.io/images/oe6m9gg8/production/1a4548882b7288ab4e9eebd38123cb18e704c701-500x500.png?rect=0,34,500,433&w=900&h=780&auto=format",
      "https://cdn.sanity.io/images/oe6m9gg8/production/1a4548882b7288ab4e9eebd38123cb18e704c701-500x500.png?rect=0,34,500,433&w=900&h=780&auto=format",
      "https://cdn.sanity.io/images/oe6m9gg8/production/1a4548882b7288ab4e9eebd38123cb18e704c701-500x500.png?rect=0,34,500,433&w=900&h=780&auto=format",
    ],
  };

  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-10 py-10">
        <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
          {/* Product Images */}
          <div className="w-full max-h-[550px] min-h-[450px] border border-darkColor/10 rounded-md group overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              width={700}
              height={700}
              className="w-full h-96 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md "
            />
          </div>

          <div className="grid grid-cols-6 gap-2 h-20 md:h-24">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 border rounded-md overflow-hidden  ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-yellow-400">
                {"★".repeat(product.rating)}
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>

          {product.inStock ? (
            <Badge variant="success" className="bg-green-100 text-green-800">
              In Stock
            </Badge>
          ) : (
            <Badge variant="destructive">Out of Stock</Badge>
          )}

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32">
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  min="1"
                  className="text-center"
                />
              </div>
              <Button
                onClick={handleAddToCart}
                variant="skyblue"
                effect="ringHoverSky"
                className="flex-1"
              >
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Delivery Information */}
          <Card className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold">Free Delivery</h3>
                <p className="text-sm text-gray-500">
                  Enter your Postal code for Delivery Availability.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold">Return Delivery</h3>
                <p className="text-sm text-gray-500">
                  Free 30days Delivery Returns.{" "}
                  <button className="text-primary underline">Details</button>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="w-full max-screen-xl mb-10">
        <div className="border-2 border-sky-700/10 rounded-md">
          <Tabs defaultValue="description" className="w-full p-3">
            <TabsList className="w-full grid grid-cols-3 bg-gray-100/50">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional">
                Additional Information
              </TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="text-gray-600 space-y-4">
                <p>
                  In ducimus quod sed eum repellendus ea fugiat. Pariatur ut
                  illo at iure harum. Molestiae a itaque voluptas explicabo
                  praesentium. Possimus omnis aut architecto et. Repellendus ab
                  ipsa in non doloremque tenetur est doloremque.
                </p>
                <p>
                  Quam in facere soluta consequatur voluptatem beatae
                  asperiores. Qui quia itaque illo eos quibusdam voluptatem et.
                  Est aut deserunt iste. Et ipsum eius ut odit deleniti.
                </p>
                <p>
                  Officia praesentium ipsam perferendis possimus ex culpa
                  voluptatem dolore. Aut id sit et vitae. Quis unde doloremque
                  quisquam facere. In qui eos est voluptatem repudiandae
                  blanditiis consequatur.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="additional" className="mt-6">
              <div className="text-gray-600">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Weight</h3>
                    <p>2.5 kg</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Dimensions</h3>
                    <p>100 × 20 × 70 cm</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Materials</h3>
                    <p>Aluminum, Glass</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Color</h3>
                    <p>Black, Silver</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="text-gray-600">
                <p className="text-lg">No reviews yet.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
