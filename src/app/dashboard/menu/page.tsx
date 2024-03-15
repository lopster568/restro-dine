"use client";
import Navbar from "@/components/Navbar";
import { useRef, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";

const Page = () => {
  const categories = [
    "Veg Starters",
    "Non-Veg Starters",
    "Main Course",
    "Soup",
  ];
  const categoryRef = useRef<HTMLSelectElement>(null);
  const itemNameRef = useRef<HTMLInputElement>(null);
  const etaRef = useRef<HTMLInputElement>(null);

  const [itemAdded, setItemAdded] = useState(false);

  const saveMenu = async () => {
    const category = categoryRef.current?.value;
    const itemName = itemNameRef.current?.value;
    const eta = etaRef.current?.value;
    if (category !== "null" && itemName && eta) {
      const res = await fetch("/api/menu-items", {
        method: "POST",
        body: JSON.stringify({ category, itemName, eta }),
      });
      if (res.ok) {
        setItemAdded(true);
        setTimeout(() => {
          setItemAdded(false);
        }, 3000);
      }
    } else {
      alert("Please enter all the fields");
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-8">
        <div>
          <h2 className="font-poppins text-2xl font-extrabold text-[#77248BB5] ml-4 md:ml-0">
            Menu Details
          </h2>
        </div>
        <div className="p-16 w-full flex justify-center">
          <div className="p-16 shadow-md flex justify-center border-2 rounded">
            <div className="flex flex-col gap-8 justify-between">
              {itemAdded && (
                <div className="flex text-center items-center gap-4 p-4 shadow-md animate-bounce">
                  <BiCheckCircle size={30} />
                  <h3>Item Added</h3>
                </div>
              )}
              <h2 className="font-poppins text-3xl font-extrabold text-[#77248BB5]">
                Add Your Menu
              </h2>
              <div className="space-y-2">
                <h3 className="font-poppins text-[#77248BB5]">Category</h3>
                <select
                  ref={categoryRef}
                  defaultValue={"null"}
                  className="border p-2 w-4/5"
                >
                  <option value={"null"} hidden>
                    Enter a Category
                  </option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <h3 className="font-poppins  text-[#77248BB5]">Item Name</h3>
                <input
                  ref={itemNameRef}
                  type="text"
                  placeholder="Enter Item Name"
                  className="border p-2"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-poppins text-[#77248BB5]">ETA</h3>
                <input
                  ref={etaRef}
                  type="number"
                  placeholder="ETA (mins) "
                  className="border p-2"
                />
              </div>
              <button
                onClick={saveMenu}
                className="group w-3/5 relative flex justify-center p-2 px-12 border border-transparent text-md  rounded-md text-white bg-[#77248BB5] hover:bg-[#76248b61] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#77248BB5]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
