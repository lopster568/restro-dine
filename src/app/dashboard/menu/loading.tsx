import { CgSpinner } from "react-icons/cg";
export default function Loading() {
  const Loader = () => {
    return (
      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-middle p-16 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all">
            <div className="bg-white px-4 pt-5 pb-4  sm:p-6 sm:pb-4">
            <CgSpinner
                  size={50}
                  color="#77248BB5"
                  className="animate-spin"
                />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <Loader />;
}
