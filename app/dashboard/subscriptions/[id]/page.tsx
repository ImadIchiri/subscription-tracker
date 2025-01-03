import Link from "next/link";

const Subscription = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
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
