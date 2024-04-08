"use client";
import { useState } from "react";
import OrderItem from "./service-table";
import { MdClose } from "react-icons/md";

const OrderTable = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      {modal ? (
        <div className="w-[400px] flex h-[200px] text-black flex-col items-center bg-white border shadow-lg p-4">
          <div className="flex justify-between items-center w-full" >
            <p className="text-2xl font-bold">Table Number 42</p>
            <MdClose size={35} className=" rounded-full hover:bg-gray-200/80 p-2" onClick={() => setModal(false)} />
          </div>
          <div className="overflow-y-scroll w-[350px]">
            <div className="flex justify-between items-center w-full mt-4 text-lg font-normal">
              <div>
                <span>1.</span> Tomato Soup
              </div>
              <div className="text-sm space-x-2">
                <button className=" shadow-lg px-3 p-2 rounded-xl hover:bg-gray-200/80">
                  Started
                </button>
                <button className=" shadow-lg px-3 p-2 rounded-xl hover:bg-gray-200/80">
                  Finished
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center w-full mt-4 text-lg font-normal">
              <div>
                <span>2.</span> Manchurian
              </div>
              <div className="text-sm space-x-2">
                <button className=" shadow-lg px-3 p-2 rounded-xl hover:bg-gray-200/80">
                  Started
                </button>
                <button className=" shadow-lg px-3 p-2 rounded-xl hover:bg-gray-200/80">
                  Finished
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center w-full mt-4 text-lg font-normal">
              <div>
                <span>3.</span> Chicken Wings
              </div>
              <div className="text-sm space-x-2">
                <button className=" shadow-lg px-3 p-2 rounded-xl hover:bg-gray-200/80">
                  Started
                </button>
                <button className=" shadow-lg px-3 p-2 rounded-xl hover:bg-gray-200/80">
                  Finished
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setModal(!modal)}
          className="min-w-12 text-white font-bold rounded-md shadow-xl"
          style={{ backgroundColor: `${modal ? "#fff" : "#FF4D4D"}` }}
        >
          <div className="w-[400px] h-[200px] flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">Table Number</p>
            <p className="p-8 text-6xl font-bold">42</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default OrderTable;
