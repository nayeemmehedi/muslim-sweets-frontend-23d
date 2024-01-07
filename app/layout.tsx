import type { Metadata } from "next";
import { Inter, Besley } from "next/font/google";

import "./globals.css";
import Navbar from "./component/Navabar/NavbarUp";
import Footer from "./component/Navabar/Footer";

const inter = Inter({ subsets: ["latin"] });
// const besley = Besley({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Muslim Sweets and Chocoletes",
  description: "Greate Sweets ever",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
