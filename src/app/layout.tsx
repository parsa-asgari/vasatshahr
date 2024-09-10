import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { sahel } from 'next-persian-fonts'
// import { Inter } from "next/font/google";

import Header from "@/components/header";
// import Footer from "@/components/footer";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "وسط‌شهر",
  description: "به ساکن غیر وابسطه‌ی ط",
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
