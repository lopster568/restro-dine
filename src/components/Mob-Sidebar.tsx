"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import { BsPersonRaisedHand } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { MdOutlineDashboard, MdOutlineMenuBook } from "react-icons/md";

const MobSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full md:hidden text-center justify-center">
      <div className="flex flex-col border-r-1 font-bold text-xl text-[#77248BB5] ">
        <Link
          href={"/"}
          className="font-sans p-4 mb-2 text-4xl font-extrabold text-[#77248BB5]"
        >
          RestroDineTech
        </Link>
        <div className="flex justify-around" >
          <Link
            href={"/dashboard"}
            className={`flex gap-4 items-center justify-start p-2 ${
              pathname === "/dashboard" ? "border-[#77248BB5] border-b-4" : ""
            }`}
          >
            <MdOutlineDashboard color="#77248BB5" size={30} />
          </Link>
          <Link
            href={"/dashboard/menu"}
            className={`flex gap-4 items-center justify-start p-2 ${
              pathname === "/dashboard/menu" ? "border-[#77248BB5] border-b-4" : ""
            }`}
          >
            <MdOutlineMenuBook color="#77248BB5" size={30} />
          </Link>
          <Link
            href={"/dashboard/orders"}
            className={`flex gap-4 items-center justify-start p-2 ${
              pathname === "/dashboard/orders" ? "border-[#77248BB5] border-b-4" : ""
            }`}
          >
            <GoChecklist color="#77248BB5" size={30} />
          </Link>
          <Link
            href={"/dashboard/services"}
            className={`flex gap-4 items-center justify-start p-2 ${
              pathname === "/dashboard/services" ? "border-[#77248BB5] border-b-4" : ""
            }`}
          >
            <BsPersonRaisedHand color="#77248BB5" size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobSidebar;
