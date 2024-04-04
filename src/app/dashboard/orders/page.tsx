"use client";
import Navbar from "@/components/Navbar";
import TableMenu from "@/components/table-menu/table-menu";
import { useRef, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-8">
        <div>
          <h2 className="font-poppins mb-4 text-2xl font-extrabold text-[#77248BB5] ml-4 md:ml-0">
            Orders
          </h2>
        </div>
        <div className="px-16 w-full flex justify-center">
          <div className="p-16 shadow-md w-full flex justify-center border-2 rounded gap-16">
            <TableMenu />
            <TableMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
