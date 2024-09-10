"use client";
import React from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${scrollPosition > 0
        ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
        : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto sm:px-5 lg:justify-end" dir="rtl">
          <a className="mr-5 hover:text-gray-900" href="/">درباره ما</a>
          <a className="mr-5 hover:text-gray-900" href="/workshops">کارگاه‌ها</a>
          <a className="mr-5 hover:text-gray-900" href="/events">رویدادها</a>
          <a className="mr-5 hover:text-gray-900" href="/sessions">نشست‌ها</a>
          <a className="mr-5 hover:text-gray-900" href="magazine">مجله</a>

        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src="/vasatshahr.png" />
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <></>
          <a href="mailto:vasatshahr@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://t.me/vasatshahr">
            <TelegramIcon />
          </a>
          <a href="https://instagram/vasatshahr">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
