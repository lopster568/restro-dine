import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineBellAlert } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 mb-8">
      <div className="flex w-3/5">
        <CiSearch className="border p-1 font-light" size={40} />
        <input
          className="border px-4 w-full"
          placeholder="Search ..."
          type="text"
        />
      </div>
      <div className="flex gap-4 justify-center mx-8">
        <HiOutlineBellAlert color="#77248BB5" size={30} />
        <HiOutlineUser color="#77248BB5" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
