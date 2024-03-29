"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import { BsPersonRaisedHand } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { MdOutlineDashboard, MdOutlineMenuBook } from "react-icons/md";
import MobSidebar from "./Mob-Sidebar";

const Sidebar = ({ children }: { children: ReactElement }) => {
  const pathname = usePathname();
  return (
    <div className="flex">
      <div className="md:flex hidden md:flex-col relative w-2/5 h-screen border-r-1 font-bold text-xl text-[#77248BB5] gap-8 ">
        <Link
          href={"/"}
          className="font-sans p-4 mb-10 text-4xl font-extrabold text-[#77248BB5]"
        >
          RestroDineTech
        </Link>
        <Link
          href={"/dashboard"}
          className={`flex gap-4 items-center justify-start p-2 px-8 ${
            pathname === "/dashboard" ? "border-[#77248BB5] border-l-4" : ""
          }`}
        >
          <MdOutlineDashboard color="#77248BB5" size={30} />
          <h1>Dashboard</h1>
        </Link>
        <Link
          href={"/dashboard/menu"}
          className={`flex gap-4 items-center justify-start p-2 px-8 ${
            pathname === "/dashboard/menu" ? "border-[#77248BB5] border-l-4" : ""
          }`}
        >
          <MdOutlineMenuBook color="#77248BB5" size={30} />
          <h1>Add Menu</h1>
        </Link>
        <Link
          href={"/dashboard/orders"}
          className={`flex gap-4 items-center justify-start p-2 px-8 ${
            pathname === "/dashboard/orders" ? "border-[#77248BB5] border-l-4" : ""
          }`}
        >
          <GoChecklist color="#77248BB5" size={30} />
          <h1>Orders</h1>
        </Link>
        <Link
          href={"/dashboard/services"}
          className={`flex gap-4 items-center justify-start p-2 px-8 ${
            pathname === "/dashboard/services" ? "border-[#77248BB5] border-l-4" : ""
          }`}
        >
          <BsPersonRaisedHand color="#77248BB5" size={30} />
          <h1>Service Request</h1>
        </Link>
      </div>
      <div className="relative w-full mx-auto md:mr-12">
        <MobSidebar />
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
