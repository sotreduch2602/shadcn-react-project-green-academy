import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Truck, RotateCcw, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { CartContext } from "@/contexts/CartContext";
import { UserContext } from "@/contexts/user/UserContext";
import axiosInstance from "@/api/axios";

const ProductDetailPage = () => {
  let { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [productSelected, setProductSelected] = useState();
  const [reviewsList, setReviewsList] = useState([]);
  const { addItemToCart } = useContext(CartContext);
  const [inputFields, setInputFields] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/products`).then((res) => {
      setProductSelected(res.data.find((p) => p.product_id == id));
    });
  }, [id]);

  useEffect(() => {
    axiosInstance.get(`/reviews`).then((res) => {
      setReviewsList(res.data.filter((r) => r.product_id == id));
    });
  }, [id]);

  const handleAddToCart = () => {
    if (productSelected) {
      addItemToCart(productSelected, quantity);
    }
  };

  const handleChangeStar = (e) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
    console.log(inputFields);
  };

  const handleSubmitReview = async () => {
    const newReview = {
      review_id: reviewsList.length + 1,
      user: {
        user_id: currentUser.user_id,
        username: currentUser.fullname,
      },
      product_id: id,
      rating: inputFields.rating,
      comment: inputFields.comment,
      created_at: new Date().toISOString(),
    };

    try {
      await axiosInstance.post("/reviews", newReview);
      const { data } = await axiosInstance.get("/reviews");
      setReviewsList(data);
    } catch (error) {
      console.error("Post Failed", error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="mt-6">
        <Breadcrumb className="mb-8 ml-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <ChevronRight className="h-4 w-4 " />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="">
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col md:flex-row gap-10 pb-10">
        <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
          {/* Product Images */}
          <div className="w-full max-h-[550px] min-h-[450px] border border-darkColor/10 rounded-md group overflow-hidden">
            <img
              src={productSelected?.images[selectedImage]}
              alt={productSelected?.name}
              width={700}
              height={700}
              className="w-full h-96 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md "
            />
          </div>

          <div className="grid grid-cols-5 lg:grid-cols-6  gap-2 h-20 md:h-24">
            {productSelected?.images.map((image, index) => (
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
            <h1 className="text-3xl font-bold">{productSelected?.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-gray-500">
                ({reviewsList.length} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-4">
            {productSelected?.salePrice ? (
              <>
                <span className="text-3xl font-bold text-primary">
                  ${productSelected?.salePrice}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${productSelected?.price}
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold text-primary">
                ${productSelected?.price}
              </span>
            )}
          </div>

          {productSelected?.stock ? (
            <Badge variant="success" className="bg-green-100 text-green-800">
              In Stock
            </Badge>
          ) : (
            <Badge variant="destructive">Out of Stock</Badge>
          )}

          <p className="text-gray-600">{productSelected?.description}</p>

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
                <p>{productSelected?.description};</p>
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
              <div>
                {reviewsList.length > 0 ? (
                  <div className="space-y-4">
                    {reviewsList.map((review, index) => (
                      <div
                        key={index}
                        className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-sky-100 flex items-center justify-center">
                              <span className="text-sky-600 font-semibold">
                                {review.user.username}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold">{review.username}</p>
                              <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < (review.rating || 5)
                                          ? "fill-current"
                                          : "fill-gray-300"
                                      }`}
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">
                                  {new Date(
                                    review.created_at
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 ml-13">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-600">
                    <p className="text-lg">No reviews yet.</p>
                  </div>
                )}
              </div>
              <div className="mt-2 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-4">Leave a Review</h3>
                <form className="space-y-4">
                  <div className="flex items-center gap-3">
                    <label>Rating 1-5</label>
                    <Input
                      type="number"
                      min="1"
                      max="5"
                      className="w-24"
                      name="rating"
                      onChange={handleChangeStar}
                      value={inputFields.rating || ""}
                    />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Your Review"
                    name="comment"
                    className="w-full p-2 border rounded-md resize-none"
                    value={inputFields.comment || ""}
                    onChange={handleChangeStar}
                  ></textarea>
                  <Button
                    type="button"
                    variant="skyblue"
                    effect="ringHoverSky"
                    onClick={handleSubmitReview}
                  >
                    Submit Review
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
