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

import { format, formatDate } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const UserManagement = () => {
  const [updateButton, setUpdateButton] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [inputFields, setInputFields] = useState({});
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsersList(res.data));
  }, []);

  const handleOnChange = (e, name = null, value = null) => {
    if (name && value !== null) {
      setInputFields((prev) => ({ ...prev, [name]: value }));
    } else {
      setInputFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    console.log(inputFields);
  };

  const handleEdit = async (user) => {
    setUpdateButton(true);
    setInputFields(user);
  };

  const handleDelete = async (user) => {
    try {
      await axios.delete(`http://localhost:3000/users/${user.id}`);
      const { data } = axios.get("http://localhost:3000/users");
      setUsersList(data);
    } catch {
      console.error("Delete Failed", error);
    }
  };

  const handleCreateButton = async (e) => {
    e.preventDefault();

    const NewUserData = {
      user_id: usersList.length + 1,
      username: inputFields.username,
      password: inputFields.password,
      fullname: inputFields.fullname,
      email: inputFields.email,
      date_of_birth: formatDate(inputFields.date_of_birth, "d/M/yyyy"),
      phone: inputFields.phone,
      role: inputFields.role,
      address: inputFields.address,
      created_at: new Date().toISOString(),
    };

    try {
      await axios.post("http://localhost:3000/users", NewUserData);
      setProductsList((prev) => [...prev, inputFields]);
      setInputFields({});
    } catch (error) {
      console.error("Create Failed:", error);
    }
  };

  const handleUpdateButton = async (e) => {
    e.preventDefault();

    const NewUserData = {
      user_id: inputFields.id,
      username: inputFields.username,
      password: inputFields.password,
      fullname: inputFields.fullname,
      email: inputFields.email,
      date_of_birth: formatDate(inputFields.date_of_birth, "d/M/yyyy"),
      phone: inputFields.phone,
      role: inputFields.role,
      address: inputFields.address,
      created_at: new Date().toISOString(),
    };

    try {
      await axios.put(
        `http://localhost:3000/users/${inputFields.id}`,
        NewUserData
      );

      setInputFields({});
      setUpdateButton(false);
      const { data } = await axios.get("http://localhost:3000/users");
      setUsersList(data);
    } catch (error) {
      console.error("Update Failed:", error);
    }
  };

  return (
    <div className={"w-full grid grid-cols-4 gap-4"}>
      <div className="col-span-1 bg-amber-100 p-4 rounded-2xl shadow-md">
        <div className="flex flex-col gap-2">
          <div className="gap-2">
            <div>
              <div>
                Username
                <Input
                  disabled={isDisabled}
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
                  disabled={isDisabled}
                  type={"text"}
                  className={"w-full"}
                  name={"fullname"}
                  value={inputFields.fullname || ""}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                Email
                <Input
                  disabled={isDisabled}
                  type={"text"}
                  className={"w-full"}
                  name={"email"}
                  value={inputFields.email || ""}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                Date Of Birth
                <Popover
                  open={isDisabled ? false : open}
                  onOpenChange={setOpen}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !inputFields.date_of_birth && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {inputFields.date_of_birth ? (
                        format(inputFields.date_of_birth, "dd/MM/yyyy")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={inputFields.date_of_birth}
                      onSelect={(value) =>
                        handleOnChange(null, "date_of_birth", value)
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                Phone
                <Input
                  disabled={isDisabled}
                  type={"text"}
                  className={"w-full"}
                  name={"phone"}
                  value={inputFields.phone || ""}
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
                Address
                <Input
                  disabled={isDisabled}
                  type={"text"}
                  className={"w-full"}
                  name={"address"}
                  value={inputFields.address || ""}
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
