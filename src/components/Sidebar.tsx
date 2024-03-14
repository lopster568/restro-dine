import Link from "next/link";
import { ReactElement } from "react";
import { BsPersonRaisedHand } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdOutlineDashboard, MdOutlineMenuBook } from "react-icons/md";

const Sidebar = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex">
      <div className="flex flex-col relative w-2/5 h-screen border-r-1 font-bold text-xl text-[#77248BB5] gap-8 ">
        <Link
          href={"/"}
          className=" font-sans p-4 mb-10 text-4xl font-extrabold text-[#77248BB5]"
        >
          RestroDineTech
        </Link>
        <Link
          href={"/dashboard"}
          className="flex gap-4 items-center justify-start border-l-4 p-2 px-8 border-[#77248BB5]"
        >
          <MdOutlineDashboard color="#77248BB5" size={30} />
          <h1>Dashboard</h1>
        </Link>
        <Link
          href={"/add-menu"}
          className="flex gap-4 items-center justify-start p-2 px-8"
        >
          <MdOutlineMenuBook color="#77248BB5" size={30} />
          <h1>Add Menu</h1>
        </Link>
        <Link
          href={"#"}
          className="flex gap-4 items-center justify-start p-2 px-8"
        >
          <GoChecklist color="#77248BB5" size={30} />
          <h1>Orders</h1>
        </Link>
        <Link
          href={"#"}
          className="flex gap-4 items-center justify-start p-2 px-8"
        >
          <BsPersonRaisedHand color="#77248BB5" size={30} />
          <h1>Service Request</h1>
        </Link>
      </div>
      <div className="relative w-full mx-auto mr-12">{children}</div>
    </div>
  );
};

export default Sidebar;
