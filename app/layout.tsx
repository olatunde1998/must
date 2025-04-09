import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MobileNavbar from "@/app/components/navbar/MobileNavbar";
import Navbar from "@/app/components/navbar/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Must",
  description:
    "Technology consultancy and product development from promise to proof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  );
}
