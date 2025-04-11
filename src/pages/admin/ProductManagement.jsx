import { ChevronRight, Info, Pen, Trash } from "lucide-react";
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

const ProductManagement = () => {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [brandsList, setBrandsList] = useState([]);

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
            <div className="">
              <div>
                Product Name
                <Input type={"text"} className={"w-full"} name={"name"} />
              </div>

              <div>
                Category
                <Select>
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
                <Select>
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
                <Input type={"text"} className={"w-full"} name={"name"} />
              </div>

              <div>
                Price
                <Input
                  type={"number"}
                  min="1"
                  className={"w-full"}
                  name={"price"}
                />
              </div>

              <div>
                Stock
                <Input
                  type={"number"}
                  min="1"
                  className={"w-full"}
                  name={"stock"}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="skyblue">Create</Button>
              <Button variant="yellow">Update</Button>
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
              {productsList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    {item.product_id}
                  </TableCell>
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
                  <TableCell>${item.price}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell className={"flex gap-2 justify-end"}>
                    <Button variant="skyblue" className="cursor-pointer">
                      <Info />
                    </Button>
                    <Button variant="yellow" className="cursor-pointer">
                      <Pen />
                    </Button>
                    <Button variant="destructive" className="cursor-pointer">
                      <Trash />
                    </Button>
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
