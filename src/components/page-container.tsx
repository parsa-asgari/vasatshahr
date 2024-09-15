'use client'
import { useRef } from 'react';

import { HeroSection as HeroSectionAbout } from "@/components/hero-section-about-us";
import { HeroSection as HeroSectionWorkshops } from "@/components/hero-section-workshops";
import { HeroSection as HeroSectionSession } from "@/components/hero-section-sessions";
import { HeroSection as HeroSectionEvent } from "@/components/hero-section-events";
import { HeroSection as HeroSectionMagazine } from "@/components/hero-section-magazine";
import { HeroSection as HeroSectionPodcast } from "@/components/hero-section-podcast";

import Image from "next/image";

import Content from "@/components/content";
import Feature from "@/components/feature";
import Contact from "@/components/contact";

export default function PageContainer() {

    return (
        <main>
            <HeroSectionAbout />
            <HeroSectionWorkshops />
            <HeroSectionEvent />
            <HeroSectionSession />
            <HeroSectionMagazine />
            <HeroSectionPodcast />
        </main>
    );
}
