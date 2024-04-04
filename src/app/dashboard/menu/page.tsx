"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import ReactSelect from "react-select";
import CreatableSelect from "react-select/creatable";

const spiceLevels = [
  { value: "NA", label: "Not Applicable" },
  { value: "sweet", label: "Sweet" },
  { value: "spicy", label: "Spicy" },
  { value: "spiciest", label: "Spiciest" },
];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState<String>("");
  const [selectedSpice, setSelectedSpice] = useState<String>("NA");
  const [selectedSignature, setSelectedSignature] = useState<boolean>(false);

  const [categories, setCategories] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);
  const itemNameRef = useRef<HTMLInputElement>(null);
  const etaRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const saveMenu = async () => {
    const category = selectedCategory;
    const spiceLevel = selectedSpice;
    const isSignature = selectedSignature;

    const itemName = itemNameRef.current?.value;
    const eta = etaRef.current?.value;
    const price = priceRef.current?.value;

    if (category && itemName && eta && price) {
      const res = await fetch("/api/menu-items", {
        method: "POST",
        body: JSON.stringify({
          category,
          name: itemName,
          eta,
          price,
          spice: spiceLevel,
          signature: isSignature,
        }),
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
      <div>
        {/*        
        <div>
          <h2 className="font-poppins text-2xl font-extrabold text-[#77248BB5] ml-4 md:ml-0">
            Menu Details
          </h2>
  </div> 
  */}
        <div className="px-16 w-full flex justify-center">
          <div className="p-8 px-16 shadow-md flex justify-center border-2 rounded">
            <div className="flex flex-col gap-4 justify-between">
              {itemAdded && (
                <div className="flex text-center items-center gap-4 p-4 shadow-md animate-bounce mt-2">
                  <BiCheckCircle size={30} />
                  <h3>Item Added</h3>
                </div>
              )}
              <h2 className="font-poppins text-3xl font-extrabold text-[#77248BB5]">
                Add Your Menu
              </h2>
              <div className="space-y-2">
                <h3 className="font-poppins text-[#77248BB5] text-sm">
                  Category
                </h3>
                {/* USE AYSNC */}
                <CreatableSelect
                  onChange={(e: any) => setSelectedCategory(e?.value)}
                  defaultValue={categories[0]}
                  name="color"
                  options={categories}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-poppins  text-[#77248BB5] text-sm">
                  Item Name
                </h3>
                <input
                  ref={itemNameRef}
                  type="text"
                  placeholder="Enter Item Name"
                  className="border p-2"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-poppins text-[#77248BB5] text-sm">ETA</h3>
                <input
                  ref={etaRef}
                  type="string"
                  placeholder="ETA (mins) "
                  className="border p-2"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-poppins text-[#77248BB5] text-sm">Price</h3>
                <input
                  ref={priceRef}
                  type="string"
                  placeholder="Price (Rs) "
                  className="border p-2"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-poppins text-[#77248BB5] text-sm">
                  Spice <span className="text-sm">(optional)</span>
                </h3>
                <ReactSelect
                  onChange={(e: any) => setSelectedSpice(e?.value)}
                  defaultValue={{ value: "NA", label: "Not Applicable" }}
                  name="spice"
                  options={spiceLevels}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-poppins text-[#77248BB5] text-sm">
                  Signature Dish <span className="text-sm">(optional)</span>
                </h3>
                <ReactSelect
                  onChange={(e: any) => setSelectedSignature(e?.value)}
                  name="signature"
                  defaultValue={{ value: false, label: "No" }}
                  options={[
                    { value: true, label: "Yes" },
                    { value: false, label: "No" },
                  ]}
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
