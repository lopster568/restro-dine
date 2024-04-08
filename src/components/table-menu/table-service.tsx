"use client";
import { useState } from "react";
import OrderItem from "./service-table";

const TableService = () => {
  const [modal, setModal] = useState(false);
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
                <li>Service 1</li>
                <li>Service 1</li>
                <li>Service 1</li>
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

export default TableService;
