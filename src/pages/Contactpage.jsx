import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";

export default function DesktopContactUs() {
  // Contact information data
  const contactInfo = [
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: "Office",
      content: "123 Main Street, Anytown,USA",
    },
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: "Email",
      content: "info@techheim.com",
    },
    {
      icon: <PhoneCall className="w-12 h-12 text-primary" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative pb-20">
        <nav className="flex items-center mt-6 px-4 md:ml-[108px]">
          <Breadcrumb className="mb-4 sm:mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-sm sm:text-base">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <ChevronRight className="h-4 w-4" />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-sm sm:text-base">
                  Contact us
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        {/* Contact Information Cards */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[168px] mt-8 md:mt-16 px-4">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {item.icon}
              <h5 className="text-xl font-semibold text-black whitespace-nowrap">
                {item.title}
              </h5>
              <p
                className={`text-base text-gray-600 text-center ${
                  item.title === "Office" ? "max-w-[133px]" : ""
                }`}
              >
                {item.content}
              </p>
            </div>
          ))}
        </section>

        {/* Contact Form Section */}
        <section className="flex flex-col lg:flex-row justify-between mt-12 md:mt-20 px-4 md:px-[212px] gap-8">
          {/* Message Us Text */}
          <div className="flex flex-col gap-6">
            <h4 className="text-2xl font-bold text-black">Message us</h4>
            <p className="max-w-[496px] text-lg text-gray-600 text-justify">
              We're here to assist you every step of the way. Whether you have a
              question, need technical support, or simply want to share your
              feedback, our dedicated team is ready to listen and provide prompt
              assistance.
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-6 w-full lg:w-[392px]">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Input
                  className="w-full h-12 rounded-lg border-gray-300"
                  placeholder="Your name"
                  required
                />
                <span className="absolute top-3 left-3 text-gray-500">*</span>
              </div>

              <div className="relative">
                <Input
                  className="w-full h-12 rounded-lg border-gray-300"
                  placeholder="Email"
                  required
                />
                <span className="absolute top-3 left-3 text-gray-500">*</span>
              </div>

              <Textarea
                className="w-full h-[190px] rounded-lg border-gray-300 text-gray-600"
                placeholder="Message"
              />
            </div>

            <Button className="w-[184px] h-12 bg-primary rounded-lg self-end text-base font-medium">
              Submit
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
