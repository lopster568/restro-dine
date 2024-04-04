import { useState } from "react";

const OrderItem = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <li className="hover:bg-gray-100 p-4 rounded-lg">
        <button>Tomato Soup</button>
      </li>
      <li className="hover:bg-gray-100 p-4 rounded-lg">
        <button>Tomato Soup</button>
      </li>
      <li className="hover:bg-gray-100 p-4 rounded-lg">
        <button>Tomato Soup</button>
      </li>
      <li className="hover:bg-gray-100 p-4 rounded-lg">
        <button>Tomato Soup</button>
      </li>
      <div className="w-full bg-gray-200 p-4" >
        <button>Started Finished</button>
      </div>
    </div>
  );
};

export default OrderItem;
