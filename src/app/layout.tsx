import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { sahel } from 'next-persian-fonts'
// import { Inter } from "next/font/google";
import Head from 'next/head';

import Header from "@/components/header";
// import Footer from "@/components/footer";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
  title: "وسط‌شهر",
  description: "به ساکن غیر وابسطه‌ی ط",
  images: [
    {
      url: 'https://www.vasatshahr.ir/_next/image?url=%2Fvasatshahr.png&w=1200&q=75', // Must be an absolute URL
      width: 800,
      height: 600,
    },
  ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={sahel.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
