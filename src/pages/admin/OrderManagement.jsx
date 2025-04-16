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

const OrderManagement = () => {
  const [updateButton, setUpdateButton] = useState(false);
  const [ordersList, setOrdersList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [inputFields, setInputFields] = useState({});

  const handleOnChange = (e, name = null, value = null) => {
    if (name && value !== null) {
      setInputFields((prev) => ({ ...prev, [name]: value }));
    } else {
      setInputFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleEdit = async (order) => {
    setUpdateButton(true);
    setInputFields(order);
  };

  const handleCancel = async (e, order) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/orders/${order.id}`, {
        status: "cancelled",
      });
    } catch (err) {
      console.error("Patch Failed", err);
    }
  };

  const handleUpdateButton = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/orders/${inputFields.id}`, {
        status: inputFields.status,
      });
    } catch (err) {
      console.error("Patch Failed", err);
    }
  };

  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:3000/orders"),
        axios.get("http://localhost:3000/users"),
      ])
      .then(
        axios.spread((OrdersRes, UsersRes) => {
          setOrdersList(OrdersRes.data);
          setUsersList(UsersRes.data);
        })
      );
  }, []);

  return (
    <div className={"w-full lg:grid lg:grid-cols-4 gap-4"}>
      <div className="col-span-1 bg-amber-100 p-4 rounded-2xl shadow-md">
        <div className="flex flex-col gap-2">
          <div className="gap-2">
            <div>
              <div>
                Order ID
                <Input
                  disabled
                  type={"text"}
                  className={"w-full"}
                  name={"name"}
                  value={inputFields.order_id || ""}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                Username
                <Input
                  disabled
                  type={"text"}
                  className={"w-full"}
                  name={"user_id"}
                  value={inputFields.user_id || ""}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                Status
                <Select
                  value={inputFields.status}
                  onValueChange={(value) =>
                    handleOnChange(null, "status", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
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
                <TableHead>Order ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Time Order</TableHead>
                <TableHead className={"text-right"}>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordersList.map((order, index) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{order.id}</TableCell>
                  <TableCell className={" truncate max-w-[100px]"}>
                    {
                      usersList.find((user) => user.user_id == order.user_id)
                        .fullname
                    }
                  </TableCell>
                  <TableCell>
                    {" "}
                    {order.items.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </TableCell>
                  <TableCell>${order.total_amount}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        order.status === "delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>{order.created_at}</TableCell>
                  <TableCell className={"ml-auto w-[175px] flex gap-2"}>
                    <AlertDialog className="information">
                      <AlertDialogTrigger asChild>
                        <Button variant="skyblue" className="cursor-pointer">
                          <Info />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Order Details</AlertDialogTitle>
                          <AlertDialogDescription asChild>
                            <section className="space-y-4">
                              <section className="border-b pb-2">
                                <span className="font-semibold block mb-2">
                                  Order Items:
                                </span>
                                {order.items?.map((item, idx) => (
                                  <section
                                    key={idx}
                                    className="flex justify-between items-center py-2"
                                  >
                                    <span>{item.product_name}</span>
                                    <span>
                                      ${item.price?.toFixed(2)} x{" "}
                                      {item.quantity}
                                    </span>
                                  </section>
                                ))}
                              </section>
                              <section className="flex justify-between font-semibold">
                                <span>Total Amount:</span>
                                <span>${order.total_amount?.toFixed(2)}</span>
                              </section>
                            </section>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Close</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <Button
                      variant="yellow"
                      className="cursor-pointer"
                      onClick={() => handleEdit(order)}
                    >
                      <Pen />
                    </Button>

                    {order?.status !== "delivered" && (
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
                              This action cannot be undone. This will
                              permanently remove your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              className={"bg-red-500"}
                              onClick={(e) => handleCancel(e, order)}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
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

export default OrderManagement;
