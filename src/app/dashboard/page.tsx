import Navbar from "@/components/Navbar";
import { MdDelete } from "react-icons/md";

const Page = () => {
  const items = [
    {
      id: 1,
      category: "Starters",
      name: "Tandoori Chaap",
      eta: "20 mins",
    },
    {
      id: 2,
      category: "Soup",
      name: "Sweet Corn Soup",
      eta: "10 mins",
    },
  ];
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
                type="text"
                placeholder="Enter Category"
                className="border p-2"
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-poppins  text-[#77248BB5]">Item Name</h3>
              <input
                type="text"
                placeholder="Enter Item Name"
                className="border p-2"
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-poppins text-[#77248BB5]">ETA</h3>
              <input type="text" placeholder="ETA" className="border p-2" />
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
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="bg-white border-b">
                      <td className="px-6 py-4 font-medium  whitespace-nowrap ">
                        {item.category}
                      </td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.eta}</td>
                      <td className="px-6 py-4">
                        <MdDelete color="#FF4D4D" size={25} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
