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
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-b-2xl py-3 bg-[#F9F9F9] dark:bg-[#2b2b2b]">
              <ul className="text-lg py-6 list-disc mx-auto">
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Unlimited content edits</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Showcase your business</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Get found by search engines</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
        <div className="rounded-2xl">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-t-2xl py-7 dark:bg-trueGray-800">
          <h3 className="text-2xl text-center">E-Commerce</h3>
          <h4 className="text-trueGray-500 text-3xl text-center">$ <span className="text-black dark:text-white font-bold text-5xl">199</span> /month</h4>
          </div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-b-2xl py-3 bg-[#F9F9F9] dark:bg-[#2b2b2b]">

            <ul className="text-lg py-6 list-disc mx-auto">
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Unlimited Products</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Store management dashboard</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Transaction fee (2.9% + $0.30)</span></li>
              </ul>
          </div>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
        <div className="rounded-2xl">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-t-2xl py-7 dark:bg-trueGray-800">
          <h3 className="text-2xl text-center">Included</h3>
          <h4 className="font-bold py-[9px] text-4xl text-center">All Sites</h4>
        </div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-b-2xl py-3 bg-[#F9F9F9] dark:bg-[#2b2b2b]">
          <ul className="text-lg py-6 list-disc mx-auto">
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Hosting and Domain Name</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Backups and Security</span></li>
                <li className="text-red-600 my-1"><span className="text-black dark:text-white">Customer Support</span></li>
              </ul>
          </div>
        </div>
        </div>
      </div>
    </Container>
  );
}