import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactElement } from "react";
const Page = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
};

export default Page;
