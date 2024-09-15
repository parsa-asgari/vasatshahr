import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { sahel } from 'next-persian-fonts'
// import { Inter } from "next/font/google";
import Head from 'next/head';

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
      <Head>
        <title>وسط‌‌شهر</title>
        <meta name="description" content="جایی که که هنر در لحظه‌های نابِ خلاقیت متولد می‌شود." key="desc" />
        <meta property="og:title" content="وسط‌‌شهر" />
        <meta
          property="og:description"
          content="جایی که که هنر در لحظه‌های نابِ خلاقیت متولد می‌شود." 
        />
        <meta
          property="og:image"
          content="/vasatshahr.png"
        />
      </Head>
      <body className={sahel.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
