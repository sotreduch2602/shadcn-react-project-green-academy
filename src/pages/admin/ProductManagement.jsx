import { Info, Pen, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ProductManagement = () => {
  const [updateButton, setUpdateButton] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [brandsList, setBrandsList] = useState([]);
  const [inputFields, setInputFields] = useState({});

  const handleOnChange = (e, name = null, value = null) => {
    if (name && value !== null) {
      // Handle Select component changes
      setInputFields((prev) => ({ ...prev, [name]: value }));
    } else {
      // Handle regular input changes
      setInputFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleEdit = async (product) => {
    setUpdateButton(true);
    setInputFields(product);
  };

  const handleDelete = async (product) => {
    try {
      await axios.delete(`http://localhost:3000/products/${product.id}`);
      const { data } = axios.get("http://localhost:3000/products");
      setProductsList(data);
    } catch {
      console.error("Delete Failed", error);
    }
  };

  const handleCreateButton = async (e) => {
    e.preventDefault();

    const NewProductData = {
      product_id: productsList.length + 1,
      name: inputFields.name,
      category_id: inputFields.category_id,
      brand_id: inputFields.brand_id,
      description: inputFields.description,
      price: inputFields.price,
      salePrice: null,
      isNewProduct: 0,
      isBestSellerProduct: 0,
      stock: inputFields.stock,
      images: [],
      created_at: new Date().toISOString(),
    };

    try {
      await axios.post("http://localhost:3000/products", NewProductData);
      setProductsList((prev) => [...prev, inputFields]);
      setInputFields({});
    } catch (error) {
      console.error("Create Failed:", error);
    }
  };

  const handleUpdateButton = async (e) => {
    e.preventDefault();

    // Find the previous product data
    const previousProduct = productsList.find(
      (product) => product.id === inputFields.id
    );

    // Determine salePrice based on price comparison
    let salePrice = null;
    let price = null;
    if (
      previousProduct &&
      Number(previousProduct.price) > Number(inputFields.price)
    ) {
      salePrice = inputFields.price;
      price = previousProduct.price;
    } else {
      price = inputFields.price;
    }

    // Create updated product data
    const updatedProduct = {
      ...inputFields,
      salePrice: salePrice,
      price: price,
    };

    try {
      await axios.put(
        `http://localhost:3000/products/${inputFields.id}`,
        updatedProduct
      );

      setInputFields({});
      setUpdateButton(false);
      const { data } = await axios.get("http://localhost:3000/products");
      setProductsList(data);
    } catch (error) {
      console.error("Update Failed:", error);
    }
  };

  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:3000/products"),
        axios.get("http://localhost:3000/categories"),
        axios.get("http://localhost:3000/brands"),
      ])
      .then(
        axios.spread((productsRes, categoriesRes, brandsRes) => {
          setProductsList(productsRes.data);
          setCategoriesList(categoriesRes.data);
          setBrandsList(brandsRes.data);
        })
      )
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className={"w-full grid grid-cols-4 gap-4"}>
      <div className="col-span-1 bg-amber-100 p-4 rounded-2xl shadow-md">
        <div className="flex flex-col gap-2">
          <div className="gap-2">
            <div>
              <div>
                Product Name
                <Input
                  type={"text"}
                  className={"w-full"}
                  name={"name"}
                  value={inputFields.name || ""}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                Category
                <Select
                  value={inputFields.category_id}
                  onValueChange={(value) =>
                    handleOnChange(null, "category_id", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categoriesList.map((category) => (
                      <SelectItem
                        key={category.category_id}
                        value={category.category_id}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                Brand
                <Select
                  value={inputFields.brand_id}
                  onValueChange={(value) =>
                    handleOnChange(null, "brand_id", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {brandsList.map((brand) => (
                      <SelectItem key={brand.brand_id} value={brand.brand_id}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                Description
                <Input
                  type={"text"}
                  className={"w-full"}
                  name={"description"}
                  value={inputFields.description || ""}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                Price
                <Input
                  type={"number"}
                  min="1"
                  className={"w-full"}
                  name={"price"}
                  value={inputFields.price || ""}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                Stock
                <Input
                  type={"number"}
                  min="1"
                  className={"w-full"}
                  name={"stock"}
                  value={inputFields.stock || ""}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Button
                type="button"
                variant="skyblue"
                onClick={(e) => handleCreateButton(e)}
              >
                Create
              </Button>
              {updateButton && (
                <Button
                  type="button" // Add this
                  variant="yellow"
                  onClick={(e) => handleUpdateButton(e)} // Modify this
                >
                  Update
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="max-h-[600px] overflow-y-auto border rounded-lg">
          <Table>
            <TableHeader className="sticky top-0 bg-white">
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className={"text-right"}>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsList.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="size-4"
                    />
                  </TableCell>
                  <TableCell className={" truncate max-w-[100px]"}>
                    {item.name}
                  </TableCell>
                  <TableCell>
                    {
                      categoriesList.find(
                        (category) => category.category_id == item.category_id
                      ).name
                    }
                  </TableCell>
                  <TableCell>
                    {
                      brandsList.find(
                        (brand) => brand.brand_id == item.brand_id
                      ).name
                    }
                  </TableCell>
                  <TableCell className="w-[100px] truncate max-w-[100px]">
                    {item.description}
                  </TableCell>
                  <TableCell>
                    ${item.salePrice ? item.salePrice : item.price}
                  </TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell className={"flex gap-2 justify-end"}>
                    <AlertDialog className="information">
                      <AlertDialogTrigger asChild>
                        <Button variant="skyblue" className="cursor-pointer">
                          <Info />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Information Product
                          </AlertDialogTitle>
                          <AlertDialogDescription className="space-y-2">
                            <div className="flex gap-4">
                              <div className="w-1/3">
                                <div className="aspect-square rounded-lg overflow-hidden">
                                  <img
                                    src={item.images[0]}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>

                              <div className="w-2/3 grid grid-cols-2 gap-2">
                                <div className="font-semibold">
                                  Product Name:
                                </div>
                                <div>{item.name}</div>

                                <div className="font-semibold">Category:</div>
                                <div>
                                  {
                                    categoriesList.find(
                                      (category) =>
                                        category.category_id == item.category_id
                                    )?.name
                                  }
                                </div>

                                <div className="font-semibold">Brand:</div>
                                <div>
                                  {
                                    brandsList.find(
                                      (brand) => brand.brand_id == item.brand_id
                                    )?.name
                                  }
                                </div>

                                <div className="font-semibold">
                                  Description:
                                </div>
                                <div className="break-words">
                                  {item.description}
                                </div>

                                <div className="font-semibold">Price:</div>
                                <div>${item.price}</div>

                                <div className="font-semibold">Stock:</div>
                                <div>{item.stock} units</div>
                              </div>
                            </div>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <Button
                      variant="yellow"
                      className="cursor-pointer"
                      onClick={() => handleEdit(item)}
                    >
                      <Pen />
                    </Button>

                    <AlertDialog className="delete">
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          className="cursor-pointer"
                        >
                          <Trash />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            remove your data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className={"bg-red-500"}
                            onClick={() => handleDelete(item)}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
