"use client";
import Navbar from "@/components/Navbar";
import ServiceTable from "@/components/table-menu/service-table";
import TableMenu from "@/components/table-menu/order-table";
import TableService from "@/components/table-menu/table-service";
import { useRef, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-8">
        <div>
          <h2 className="font-poppins mb-4 text-2xl font-extrabold text-[#77248BB5] ml-4 md:ml-0">
            Service Requests
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <div className="p-12 shadow-md w-full flex flex-col md:flex-row justify-center border-2  rounded gap-16">
            <ServiceTable />
            <ServiceTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
