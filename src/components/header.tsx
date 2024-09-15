"use client";
import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { useScrollPosition } from "@/hooks/useScrollPosition";
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image'

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
          <Link  className="mr-5 hover:text-gray-900" activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-130}>درباره ما</Link>
          <Link className="mr-5 hover:text-gray-900" to="workshops" spy={true} smooth={true} duration={500} offset={-145}>کارگاه‌ها</Link>
          <Link className="mr-5 hover:text-gray-900" to="events" spy={true} smooth={true} duration={500} offset={-145}>رویدادها</Link>
          <Link className="mr-5 hover:text-gray-900" to="sessions" spy={true} smooth={true} duration={500} offset={-145}>نشست‌ها</Link>
          <Link className="mr-5 hover:text-gray-900" to="magazine" spy={true} smooth={true} duration={500} offset={-145}>مجله</Link>
          <Link className="mr-5 hover:text-gray-900" to="podcast" spy={true} smooth={true} duration={500} offset={-145}>پادکست</Link>

        </nav>
        <a className="h-20 w-40 flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center md:mb-0">
          <Image src="/vasatshahr.png" height={370.99} width={1173} alt="VasatShahr"/>
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
