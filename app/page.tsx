/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import-helpers/order-imports */
'use client';
import Link from 'next/link';
import AOS from 'aos';

import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { motion } from 'framer-motion';

import Carrousel from './../ui/Components/carrousel/index';
import { HomeHero } from './../ui/Components/HomeHero/index';
import { SectionSobre } from './../ui/Components/SectionSobre/index';
import Contact from './../ui/Components/Contact/contact';
import { Experiencia } from './../ui/Components/Experiencia/index';
import Portifolio from './../ui/Components/Portifolio/Projects';

export default function Page() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <motion.div initial="hidden" animate="show">
            <HomeHero />
            <Portifolio />
            <Carrousel />
            <Experiencia />
            <SectionSobre />
            <Contact />
        </motion.div>
    );
}
