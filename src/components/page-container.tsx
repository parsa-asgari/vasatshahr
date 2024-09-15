'use client'
import { useRef } from 'react';

import { HeroSection as HeroSectionAbout } from "@/components/hero-section-about-us";
import { HeroSection as HeroSectionWorkshops } from "@/components/hero-section-workshops";
import { HeroSection as HeroSectionSession } from "@/components/hero-section-sessions";
import { HeroSection as HeroSectionEvent } from "@/components/hero-section-events";
import { HeroSection as HeroSectionPodcast } from "@/components/hero-section-podcast";

export default function PageContainer() {

    return (
        <main>
            <HeroSectionAbout />
            <HeroSectionWorkshops />
            <HeroSectionEvent  />
            <HeroSectionSession />
            <HeroSectionPodcast />
        </main>
    );
}
