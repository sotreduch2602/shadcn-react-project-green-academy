import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, Share2, Truck, RotateCcw } from "lucide-react";

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
    // Implement add to cart functionality
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
                />
              </div>
              <Button onClick={handleAddToCart} className="flex-1">
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
    </div>
  );
};

export default ProductDetailPage;
