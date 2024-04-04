"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { MdDelete, MdEdit } from "react-icons/md";

type MenuItem = {
  _id: string;
  category: string;
  name: string;
  eta: string;
  spice: number;
  signature: boolean;
  price: number;
};

const Page = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilteredItems, setShowFilteredItems] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const categoryFilterRef = useRef<HTMLInputElement>(null);

  const filterByName = (name: string) => {
    if (name === "") return setShowFilteredItems(false);
    const filteredItems = items.filter((item: MenuItem) =>
      item.name.toLocaleLowerCase().includes(name.toLowerCase())
    );
    setFilteredItems(filteredItems);
    setShowFilteredItems(true);
  };

  const filterByETA = (eta: string) => {
    if (eta === "") return setShowFilteredItems(false);
    const filteredItems = items.filter((item: MenuItem) =>
      item.eta.toLocaleLowerCase().includes(eta.toLowerCase())
    );
    setFilteredItems(filteredItems);
    setShowFilteredItems(true);
  };

  const filterByCategory = (category: string) => {
    if (category === "") return setShowFilteredItems(false);
    const filteredItems = items.filter((item: MenuItem) =>
      item.category.toLocaleLowerCase().includes(category.toLowerCase())
    );
    setFilteredItems(filteredItems);
    setShowFilteredItems(true);
  };

  useEffect(() => {
    fetch("/api/menu-items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
        setLoading(false);
      });
  }, []);

  const deleteItem = async (id: string) => {
    const res = await fetch(`/api/menu-items`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      const newItems = items.filter((item: MenuItem) => item._id !== id);
      setItems(newItems);
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-8">
        <div>
          <h2 className="font-poppins text-2xl font-extrabold text-[#77248BB5] ml-4 md:ml-0">
            Menu Dashboard
          </h2>
        </div>
        <div className="pt-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="space-y-4">
              <h3 className="font-poppins text-[#77248BB5]">Category</h3>
              <input
                ref={categoryFilterRef}
                type="text"
                placeholder="Enter Category"
                className="border p-2"
                onChange={(e) => filterByCategory(e.target.value)}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-poppins  text-[#77248BB5]">Item Name</h3>
              <input
                type="text"
                placeholder="Enter Item Name"
                className="border p-2"
                onChange={(e) => filterByName(e.target.value)}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-poppins text-[#77248BB5]">ETA</h3>
              <input
                type="text"
                placeholder="ETA"
                className="border p-2"
                onChange={(e) => filterByETA(e.target.value)}
              />
            </div>
          </div>
          <div className="pt-16">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs text-white uppercase bg-[#A05BB0B5]">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Item Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ETA
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Spice
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Signature Dish
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {!showFilteredItems ? (
                    <>
                      {items.map((item: MenuItem) => (
                        <tr key={item._id} className="bg-white border-b">
                          <td className="px-6 py-4 font-medium  whitespace-nowrap ">
                            {item?.category}
                          </td>
                          <td className={`px-6 py-4 capitalize`}>
                            {item?.name}
                          </td>
                          <td className="px-6 py-4">{item?.eta} mins</td>
                          <td className="px-6 py-4">{item?.price} Rs</td>
                          <td className="px-6 py-4 capitalize">
                            {item?.spice}
                          </td>
                          <td className="px-6 py-4 capitalize">
                            {item?.signature ? "Yes" : "No"}
                          </td>
                          <td className="px-6 py-4 flex gap-4">
                            <MdEdit
                              onClick={() => {}}
                              color="#999"
                              size={25}
                              className="cursor-pointer"
                            />
                            <MdDelete
                              onClick={() => deleteItem(item._id)}
                              color="#FF4D4D"
                              size={25}
                              className="cursor-pointer"
                            />
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      {filteredItems.map((item: MenuItem) => (
                        <tr key={item._id} className="bg-white border-b">
                          <td className="px-6 py-4 font-medium  whitespace-nowrap ">
                            {item?.category}
                          </td>
                          <td className={`px-6 py-4 capitalize`}>
                            {item?.name}
                          </td>
                          <td className="px-6 py-4">{item?.eta} mins</td>
                          <td className="px-6 py-4">{item?.price} Rs</td>
                          <td className="px-6 py-4 capitalize">
                            {item?.spice}
                          </td>
                          <td className="px-6 py-4 capitalize">
                            {item?.signature ? "Yes" : "No"}
                          </td>
                          <td className="px-6 py-4 flex gap-4">
                            <MdEdit
                              onClick={() => {}}
                              color="#999"
                              size={25}
                              className="cursor-pointer"
                            />
                            <MdDelete
                              onClick={() => deleteItem(item._id)}
                              color="#FF4D4D"
                              size={25}
                              className="cursor-pointer"
                            />
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
              {items.length === 0 && !loading && (
                <div className="flex justify-center items-center h-40">
                  <h1 className="text-2xl font-bold text-[#77248BB5]">
                    No items found
                  </h1>
                </div>
              )}
              {loading && (
                <div className="flex gap-8 justify-center my-4">
                  <CgSpinner
                    size={30}
                    className="animate-spin"
                    color="#77248BB5"
                  />
                  <h1 className="text-2xl font-bold text-[#77248BB5] animate-pulse">
                    Loading ...
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
