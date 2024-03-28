import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "Rent your dream car here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
