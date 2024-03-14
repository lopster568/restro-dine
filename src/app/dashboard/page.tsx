import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-8">
        <div>
          <h2 className="font-poppins text-2xl font-extrabold text-[#77248BB5]">
            Menu Dashboard
          </h2>
        </div>
        <div className="pt-16">
          <div className="flex justify-between">
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
        </div>
      </div>
    </>
  );
};

export default Page;
