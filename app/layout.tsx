import type { Metadata } from "next";
import { Inter, Besley } from "next/font/google";

import "./globals.css";
import Navbar from "./component/Navabar/NavbarUp";
import Footer from "./component/Navabar/Footer";
import { Suspense } from "react";
import ReduxProvider from "./StateManagement/provider";
// import { store } from './app/store'

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
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
