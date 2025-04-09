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
import React, { useContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserContext } from "@/contexts/user/UserContext";

// Data for sidebar navigation items
const sidebarNavItems = [
  {
    icon: UserCog,
    label: "Personal Data",
    value: "personal-data",
  },

  {
    icon: ShoppingBag,
    label: "Orders",
    value: "orders",
  },
];

// Data for personal information fields

export default function AdminPage() {
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
                    Admin
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
}
