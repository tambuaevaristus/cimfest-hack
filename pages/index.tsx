import Body from "@/components/Body";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import OrderList from "@/components/OrderList";
import Sidebar from "@/components/Sidebar";
import PDFViewer from "@/components/file/PDFViewer";
import Pdf from "@/components/file/PDFViewer";
import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

// const index = () => {
//   return (
//     <div>
//       <div className="  py-5 px-5 float-right container">
//         <Dashboard />
//         <OrderList />

//         <PDFViewer />
//       </div>
//     </div>
//   );
// };

// export default index;

export default function Home() {
  return (
    <div>
      <div className="  py-5 px-5 float-right container">
        <Dashboard />
        <OrderList />

        <PDFViewer />
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });

  console.log("getting session: ", session);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
