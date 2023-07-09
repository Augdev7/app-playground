'use client';
import Image from 'next/image';
import React from 'react';

import { useMotionValue, useTransform, motion } from 'framer-motion';

import women from '/public/img/interface-min.png';
import LogoImg from '/public/img/logo.png';
// nike img

// import framer hooks

import { Container } from './styles';

export function Card() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const colors = [
        { value: '#185bca' },
        { value: '#272425' },
        { value: '#617453' },
        { value: '#f2c758' },
        { value: '#ffffff' },
    ];
    return (
        <Container>
            <div style={{ perspective: 2000 }}>
                {/* card */}
                <motion.div
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragElastic={0.18}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: 'grabbing' }}
                    className="relative min-h-[600px] w-[426px] cursor-grab rounded-[30px] border-[4px] border-white bg-[#e3e2df] px-[40px] py-[24px]"
                >
                    {/* card logo */}
                    <div className="mb-6">
                        <Image src={LogoImg} alt="" />
                    </div>

                    {/* card title */}
                    <h1 className="mb-6 text-5xl font-extrabold">Fashion Stylish</h1>

                    {/* card subtitle */}
                    <p className="mb-6 max-w-[300px] text-[#000000]">
                        Your order made our day. We hope that makes yours ! Your support means the
                        world, We would love if you share a snap on social media. Please tag us.
                    </p>

                    {/* btn & price wrapper */}
                    <div className="mb-12 flex items-center gap-x-[20px]">
                        <button className="rounded-lg bg-[#617453] px-[40px] py-[16px] text-base font-medium text-white hover:text-purple-600">
                            Order Now
                        </button>
                        <div className="text-[24px] font-bold text-[#000000]">$135.00</div>
                    </div>

                    {/* colors */}
                    <ul className="flex gap-x-[10px]">
                        {colors.map((color, index) => {
                            return (
                                <li
                                    key={index}
                                    style={{ backgroundColor: color.value }}
                                    className="h-8 w-8 cursor-pointer rounded-full"
                                ></li>
                            );
                        })}
                    </ul>

                    {/* card image */}
                    <motion.div
                        style={{ x, y, rotateX, rotateY, z: 100000 }}
                        className="absolute -right-64 top-12 w-[620px]"
                    >
                        <Image src={women} alt="" draggable="false" />
                    </motion.div>
                </motion.div>
            </div>
        </Container>
    );
}
