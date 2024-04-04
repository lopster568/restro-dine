"use client";
import { useState } from "react";
import OrderItem from "./order-item";

const TableMenu = () => {
  const [modal, setModal] = useState(false);
  const OrderModal = () => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <div>
            <h2 className="text-xl font-semibold">Order Details</h2>
            <p className="text-sm text-gray-600">
              Order details for the selected table number
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <OrderItem />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <button
        onClick={() => setModal(!modal)}
        className="min-w-16 p-16 text-white font-bold rounded-md shadow-xl"
        style={{ backgroundColor: `${modal ? "#fff" : "#FF4D4D"}` }}
      >
        {modal ? (
          <div className="w-80 h-28 flex text-black flex-col justify-center items-center">
            <p className="text-2xl font-bold">Table Number 42</p>
            <div>
              <ol>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
              </ol>
            </div>
          </div>
        ) : (
          <div className="w-80 h-28 flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">Table Number</p>
            <p className="p-8 text-6xl font-bold">42</p>
          </div>
        )}
      </button>
    </div>
  );
};

export default TableMenu;
