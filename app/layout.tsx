import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subscription Tracker App",
  description: "Track and manage all your Subscriptions in one place !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${``} ${``} antialiased`}>{children}</body>
    </html>
  );
}
