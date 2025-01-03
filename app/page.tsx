import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold">Hello !</h1>
      <Link href="/dashboard">Home</Link>
    </div>
  );
}
