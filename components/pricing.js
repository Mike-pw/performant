import React from "react";
import Container from "./container";

export default function Pricing() {
  return (
    <Container className="pb-[60px]">
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
      <div className="">
      <div className="rounded-2xl">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-t-2xl py-7 dark:bg-trueGray-800">
              <h3 className="text-2xl text-center">Brochure</h3>
              <h4 className="text-trueGray-500 text-3xl text-center">$ <span className="text-black dark:text-white font-bold text-5xl">99</span> /month</h4>
          </div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-b-2xl pt-3 pb-9 bg-[#F9F9F9] dark:bg-[#2b2b2b]">
              <ul className="text-lg py-6 list-disc mx-auto">
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Unlimited content edits</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Showcase your business</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Get found by search engines</span></li>
              </ul>
              <a
                href="#projects"
                className="w-2/3 mx-auto px-8 py-2 text-lg font-medium text-center text-white bg-red-600 rounded-md hover:bg-red-500">
                See Demo
              </a>
            </div>
          </div>
        </div>
        <div className="">
        <div className="rounded-2xl">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-t-2xl py-7 dark:bg-trueGray-800">
              <h3 className="text-2xl text-center">Blog</h3>
              <h4 className="text-trueGray-500 text-3xl text-center">$ <span className="text-black dark:text-white font-bold text-5xl">199</span> /month</h4>
          </div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-b-2xl pt-3 pb-9 bg-[#F9F9F9] dark:bg-[#2b2b2b]">
              <ul className="text-lg py-6 list-disc mx-auto">
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Content management system</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Edit and update your content</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Custom add-ons available</span></li>
              </ul>
              <a
                href="#blog"
                className="w-2/3 mx-auto px-8 py-2 text-lg font-medium text-center text-white bg-red-600 rounded-md hover:bg-red-500">
                See Demo
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
        <div className="rounded-2xl">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-t-2xl py-7 dark:bg-trueGray-800">
          <h3 className="text-2xl text-center">E-Commerce</h3>
          <h4 className="text-trueGray-500 text-3xl text-center">$ <span className="text-black dark:text-white font-bold text-5xl">299</span> /month</h4>
          </div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-b-2xl pt-3 pb-9 bg-[#F9F9F9] dark:bg-[#2b2b2b]">

            <ul className="text-lg py-6 list-disc mx-auto">
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Unlimited products</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Shop management system</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Online payments (2.9% + $0.30)</span></li>
              </ul>
              <a
                href="#ecommerce"
                className="w-2/3 mx-auto px-8 py-2 text-lg font-medium text-center text-white bg-red-600 rounded-md hover:bg-red-500">
                See Demo
              </a>
          </div>
          </div>
        </div>
      </div>
    </Container>
  );
}