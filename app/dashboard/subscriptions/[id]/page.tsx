import Link from "next/link";
import React from "react";

const Subscription = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <div>
      <h3>
        Subscription id: <span className="font-bold">{id}</span>
      </h3>
      <Link href="/dashboard/subscriptions">Subscriptions</Link>
    </div>
  );
};

export default Subscription;
