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

const UserManagement = () => {
  const [updateButton, setUpdateButton] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [inputFields, setInputFields] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsersList(res.data));
  }, []);

  console.log(usersList);

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

  const handleCreateButton = async (e, index) => {
    e.preventDefault();
  };

  const handleUpdateButton = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <div className={"w-full grid grid-cols-4 gap-4"}>
      <div className="col-span-1 bg-amber-100 p-4 rounded-2xl shadow-md">
        <div className="flex flex-col gap-2">
          <div className="gap-2">
            <div>
              <div>
                Username
                <Input
                  type={"text"}
                  className={"w-full"}
                  name={"username"}
                  value={inputFields.username || ""}
                  onChange={handleOnChange}
                />
              </div>
              <div>
                Full Name
                <Input
                  type={"text"}
                  className={"w-full"}
                  name={"fullname"}
                  value={inputFields.fullname || ""}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                Role
                <Select
                  value={inputFields.role}
                  onValueChange={(value) => handleOnChange(null, "role", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"admin"}>Admin</SelectItem>
                    <SelectItem value={"registered"}>User</SelectItem>
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
                <TableHead>Username</TableHead>
                <TableHead>Fullname</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date Of Birth</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Address</TableHead>
                <TableHead className={"text-right"}>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersList.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className={" truncate max-w-[100px]"}>
                    {item.username}
                  </TableCell>
                  <TableCell>{item.fullname}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.date_of_birth}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell className="w-[100px] truncate max-w-[100px]">
                    {item.address}
                  </TableCell>
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
                                  <img className="w-full h-full object-cover" />
                                </div>
                              </div>

                              <div className="w-2/3 grid grid-cols-2 gap-2">
                                <div className="font-semibold">
                                  Product Name:
                                </div>
                                <div></div>

                                <div className="font-semibold">Category:</div>
                                <div></div>

                                <div className="font-semibold">Brand:</div>
                                <div></div>

                                <div className="font-semibold">
                                  Description:
                                </div>
                                <div className="break-words"></div>

                                <div className="font-semibold">Price:</div>
                                <div>$</div>

                                <div className="font-semibold">Stock:</div>
                                <div> units</div>
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

export default UserManagement;
