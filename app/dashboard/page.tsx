import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link href="/">Dashboard</Link>
      <Link href="/dashboard/subscriptions">Subscriptions</Link>
    </div>
  );
};
export default Dashboard;
