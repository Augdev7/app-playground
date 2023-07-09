/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Image from 'next/image';
import React from 'react';

import { portfolioAnimation } from '#/ui/animations';
import { useScroll } from '#/ui/useScroll';
import { motion } from 'framer-motion';

import Img1 from '/public/assets/01.jpg';
import Img6 from '/public/assets/Aroldo.jpg';
import Img2 from '/public/assets/bnr3.jpg';
import Img4 from '/public/assets/Cardapio.jpg';
import Img3 from '/public/assets/Grafico.jpg';
import loadmore from '/public/assets/loadmore.png';
import placeholder from '/public/assets/placeholder.png';
import portfolio1 from '/public/assets/portfolio1.png';
import portfolio2 from '/public/assets/portfolio2.png';
import Img5 from '/public/assets/Premier.jpg';
import Img8 from '/public/assets/Site.jpg';
import Img7 from '/public/assets/SiteBalaio.jpg';

import { Section, Div } from './styles';

export function Projetos() {
    return (
        <Section id="portfolio">
            <Div className="sideTitle">
                <h1>Projetos</h1>
            </Div>
            <div className="background">
                <Image src={portfolio1} alt="Design" className="design1" />
                <Image src={portfolio2} alt="Design" className="design2" />
            </div>
            <div className="portfolio__title">
                <p>Projetos</p>
                <h2>Alguns de nossos projetos realizado</h2>
            </div>
            <div className="grid">
                <motion.div
                    className="child-one grid-box"
                    variants={portfolioAnimation}
                    transition={{
                        delay: 0.03,
                        type: 'tween',
                        duration: 0.8,
                    }}
                    whileInView={{ opacity: 1 }}
                >
                    <Image src={Img1} alt="placeholder" />
                </motion.div>
                <motion.div
                    className="child-two grid-box"
                    variants={portfolioAnimation}
                    transition={{
                        delay: 0.03,
                        type: 'tween',
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <Image src={Img2} alt="placeholder" />
                </motion.div>
                <motion.div
                    className="child-three grid-box"
                    variants={portfolioAnimation}
                    transition={{
                        delay: 0.03,
                        type: 'tween',
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <Image src={Img3} alt="placeholder" />
                </motion.div>
                <motion.div
                    className="child-four grid-box"
                    variants={portfolioAnimation}
                    transition={{
                        delay: 0.03,
                        type: 'tween',
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <Image src={Img4} alt="placeholder" />
                </motion.div>
                <motion.div
                    className="child-five grid-box"
                    variants={portfolioAnimation}
                    transition={{
                        delay: 0.03,
                        type: 'tween',
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <Image src={Img6} alt="placeholder" />
                </motion.div>
                <motion.div
                    className="child-six grid-box"
                    variants={portfolioAnimation}
                    transition={{
                        delay: 0.03,
                        type: 'tween',
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <Image src={Img7} alt="placeholder" />
                </motion.div>
                <motion.div
                    className="child-seven grid-box"
                    variants={portfolioAnimation}
                    transition={{
                        delay: 0.03,
                        type: 'tween',
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <Image src={Img8} alt="placeholder" />
                </motion.div>
                <motion.div
                    className="child-eight grid-box"
                    variants={portfolioAnimation}
                    transition={{
                        delay: 0.03,
                        type: 'tween',
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                >
                    <Image src={Img5} alt="placeholder" />
                </motion.div>
            </div>
            <div className="portfolio-more">
                <span>Load More</span>
                <Image src={loadmore} alt="Load More" />
            </div>
        </Section>
    );
}
