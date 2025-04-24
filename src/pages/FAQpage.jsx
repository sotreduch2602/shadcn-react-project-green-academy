import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/layouts/Footer";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function DesktopFaqs() {
  // FAQ data for mapping
  const faqItems = [
    {
      question:
        "Can I purchase products from Tech Heim using installment payments?",
      answer:
        "Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget.",
    },
    {
      question: "How can I engage with the magazine content on Tech Heim?",
      answer:
        "You can actively engage with the magazine content by leaving comments and participating in the question-and-answer section. Feel free to share your thoughts, ask questions, and interact with fellow tech enthusiasts in the community.",
    },
    {
      question: "Does Tech Heim offer a warranty on its products?",
      answer:
        "Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information.",
    },
    {
      question: "Is Tech Heim a secure platform for online shopping?",
      answer:
        "Yes, Tech Heim provides a warranty on all eligible products. The specific warranty details may vary depending on the manufacturer and product category. Please refer to the product description or contact our customer support for more information.",
    },
    {
      question:
        "How can I get assistance with my purchase or any other inquiries?",
      answer:
        "If you need assistance with your purchase or have any questions, our dedicated customer support team is here to help. You can reach out to us through the contact page on our website, and we'll be happy to assist you promptly.",
    },
  ];

  // Table of contents data
  const tableOfContents = [
    { title: "General", active: true },
    { title: "Trusts & Safety", active: false },
    { title: "Services", active: false },
    { title: "Billing", active: false },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <section className="bg-white w-full max-w-[1440px] relative px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <nav className="flex items-center mt-4 sm:mt-6 ml-0 sm:ml-4 lg:ml-28">
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
                  FAQS
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        {/* Hero banner */}
        <div className="w-full max-w-[1016px] h-[300px] sm:h-[426px] mx-auto mt-8 sm:mt-2 rounded-lg overflow-hidden bg-gradient-to-r from-blue-600/20 to-transparent">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-[150px] sm:mt-[211px] mx-4 sm:ml-10">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 my-8">
          {/* Table of contents sidebar */}
          <aside className="w-full lg:w-[184px] lg:ml-52 px-4 sm:px-0">
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 sm:mb-6">
              Table of Contents
            </h2>
            <nav className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0">
              {tableOfContents.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-sm sm:text-base whitespace-nowrap ${
                    item.active ? "text-blue-600" : "text-black"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* FAQ accordion */}
          <Card className="w-full lg:w-[808px] rounded-lg border-none">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-300 last:border-b-0"
                  >
                    <AccordionTrigger className="py-4 sm:py-6 px-4 hover:no-underline text-left">
                      <h3 className="text-base sm:text-lg font-semibold text-blue-600">
                        {item.question}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 sm:pb-6">
                      <p className="text-sm sm:text-base text-black">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </section>
    </div>
  );
}
