import Link from "next/link";
import React from "react";

const Subscriptions = () => {
  return (
    <div>
      <h2>Subscriptions</h2>
      <Link href="/dashboard">Dashboard</Link>
      <Link href={`/dashboard/subscriptions/${`id-subscription`}`}>
        Single Subscription
      </Link>
    </div>
  );
};

export default Subscriptions;
