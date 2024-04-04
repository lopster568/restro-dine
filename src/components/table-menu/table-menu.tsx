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
      {modal && <OrderModal />}
      <button className="bg-orange-400 min-w-16 p-16 text-white font-bold text-2xl rounded-md shadow-lg">
        Table 42
      </button>
    </div>
  );
};

export default TableMenu;
