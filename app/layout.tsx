import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "Rent or discover your dream car here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
