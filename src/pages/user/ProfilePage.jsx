import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import {
  ChevronRight,
  Home,
  Key,
  LogOut,
  Mail,
  Phone,
  ShoppingBag,
  User,
  UserCog,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserContext } from "@/contexts/user/UserContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Data for sidebar navigation items
const sidebarNavItems = [
  {
    icon: UserCog,
    label: "Personal Data",
    value: "personal-data",
  },

  {
    icon: ShoppingBag,
    label: "History Orders",
    value: "orders",
  },
];

// Data for personal information fields

export default function ProfilePage() {
  const { currentUser } = useContext(UserContext);

  console.log("currentUser", currentUser?.id);

  const personalInfoFields = [
    {
      id: "fullname",
      label: "Full name",
      icon: User,
      value: currentUser?.fullname,
    },
    {
      id: "phone",
      label: "Phone number",
      icon: Phone,
      value: currentUser?.phone,
    },
    {
      id: "address",
      label: "Address",
      icon: Home,
      value: currentUser?.address,
    },
    {
      id: "email",
      label: "E-mail Address",
      icon: Mail,
      value: currentUser?.email,
    },
    {
      id: "password",
      label: "Password",
      icon: Key,
      value: currentUser?.password,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-5">
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-full max-w-[1440px] min-h-[1024px] relative">
          <div className="container px-4">
            {/* Breadcrumb Navigation */}
            <Breadcrumb className="mb-8 ml-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="text-neutralgray-717171 font-web-body-lg"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <ChevronRight className="h-4 w-4 text-neutralgray-717171" />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="text-neutralgray-717171 font-web-body-lg"
                  >
                    Account
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <ChevronRight className="h-4 w-4 text-neutralgray-717171" />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="text-app-primary font-web-body-lg border-b border-app-primary"
                  >
                    Personal Data
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col md:flex-row gap-8">
              <Tabs
                defaultValue="personal-data"
                className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8"
              >
                <div className="col-span-1 lg:col-span-1 shadow-md rounded-lg bg-gray-50 border border-gray-100">
                  <TabsList className="flex flex-col w-72 h-auto bg-gray-50 space-y-1 px-3">
                    <div className="p-6 flex items-center gap-4 w-full">
                      <Avatar className="w-[60px] h-[60px] bg-gray-50 border border-gray-100">
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="text-lg font-medium text-black">
                        Jimmy smith
                      </div>
                    </div>

                    {/* Tab Triggers */}
                    {sidebarNavItems.map((item) => (
                      <TabsTrigger
                        key={item.label}
                        value={item.value}
                        className={`flex items-center gap-4 px-6 py-5 justify-start w-full ${
                          item.isLogout ? "text-red-500" : ""
                        }`}
                      >
                        <item.icon className="w-6 h-6" />
                        <span>{item.label}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <div className="col-span-3 lg:col-span-3 p-8">
                  <TabsContent value="personal-data" className="flex-1">
                    {/* Identification Section */}
                    <section>
                      <div className="mb-2">
                        <h2 className="text-3xl font-medium text-black">
                          Identification
                        </h2>
                      </div>

                      {/* Personal Info Fields */}
                      <div className="space-y-3  px-6">
                        {personalInfoFields.map((field) => (
                          <Card
                            key={field.id}
                            className="bg-gray-50 border-gray-100 mt-6 relative"
                          >
                            <CardHeader>
                              <CardDescription>{field.label}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between ">
                              <div className="flex items-center gap-2">
                                <field.icon className="w-6 h-6" />
                                <Input
                                  className="md:w-auto lg:w-[296px] bg-white text-base text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap"
                                  placeholder={
                                    field.label === "Password"
                                      ? "********"
                                      : field.value
                                  }
                                />
                                  {/* <div className="w-[296px] text-base text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
                                    {field.label === "Password"
                                      ? "********"
                                      : field.value}
                                  </div> */}
                              </div>
                            </CardContent>
                          </Card>
                        ))}

                        <div className="w-full flex justify-center">
                          <Button variant="skyblue">Update Account</Button>
                        </div>
                      </div>
                    </section>
                  </TabsContent>
                  <TabsContent value="orders">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">#</TableHead>
                          <TableHead>Image</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">INV001</TableCell>
                          <TableCell>Paid</TableCell>
                          <TableCell>Credit Card</TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
