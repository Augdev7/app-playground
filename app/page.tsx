/* eslint-disable import-helpers/order-imports */
'use client';
/* eslint-disable react/jsx-key */
import AOS from 'aos';

import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { motion } from 'framer-motion';

import Carrousel from './../ui/Components/carrousel/index';
import { HomeHero } from './../ui/Components/HomeHero/index';
import { SectionSobre } from './../ui/Components/SectionSobre/index';
import Contact from './../ui/Components/Contact/contact';
import { Experiencia } from './../ui/Components/Experiencia/index';
import { Solution } from './../ui/Components/Solution/index';

export default function Page() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <motion.div initial="hidden" animate="show">
            <HomeHero />
            <Carrousel />
            <Solution />
            <Experiencia />
            <SectionSobre />
            <Contact />
        </motion.div>
    );
}
