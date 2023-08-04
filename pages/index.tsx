import Dashboard from "@/components/Dashboard";
import OrderList from "@/components/OrderList";

import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="  py-5 px-5 float-right container">
        <Dashboard />
        <OrderList />
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
