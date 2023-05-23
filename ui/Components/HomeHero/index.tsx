/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import-helpers/order-imports */
'use client';

import Image from 'next/image';
import { useState, Fragment } from 'react';
import { Listbox, Combobox, Transition } from '@headlessui/react';
import { HiOutlineCheck, HiChevronUpDown } from 'react-icons/hi2';

import { Switch } from '@headlessui/react';
import { styles } from './styles';
import profilePic from '/public/Home.jpg';

const people = [
    { name: 'Marketing digital' },
    { name: 'Manuteção de site' },
    { name: 'Desenvolvimento de site' },
    { name: 'Produzir conteúdo' },
    { name: 'Lading Page' },
    { name: 'Criar logomarca' },
];

import { HiPencilAlt } from 'react-icons/hi';
import { HiCalendarDays } from 'react-icons/hi2';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import ImgHome from '/public/image-layers-3-01.png';
import { Slide } from '/ui/Components/Slide/index';
import { HeroBottomCard } from '/ui/Components/HeroBottomCard/index';
export function HomeHero() {
    const [selected, setSelected] = useState(people[0]);
    const [enabled, setEnabled] = useState(false);
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <Image
                    src={profilePic}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div
                            className={`absolute inset-0 top-[120px]  mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
                        >
                            <div className="mt-5 flex flex-col items-center justify-center">
                                <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
                                <div className="violet-gradient h-40 w-1 sm:h-80" />
                            </div>

                            <div>
                                <h1 className={`${styles.heroHeadText} text-white`}>
                                    INOVAR É <span className="text-[#915EFF]">CRIAR</span>
                                </h1>
                                <p className={`${styles.heroSubText} text-white-100 mt-2`}>
                                    COMPARTILHAMOS HISTÓRIAS{' '}
                                    <span className="text-[#915EFF] sm:block" />
                                    CONECTAMOS PESSOAS
                                </p>
                            </div>
                        </div>
                        <div className="py-24">
                            <Image
                                src={ImgHome}
                                alt="Image home"
                                placeholder="blur"
                                width={475}
                                height={547}
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                        <div
                            data-aos="fade-right"
                            className="gap grid grid-flow-col sm:grid-cols-1 lg:pt-2"
                        >
                            <Slide />
                        </div>
                    </div>
                </div>
                <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
                    <a href="#about">
                        <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                                className="mb-1 h-3 w-3 rounded-full bg-secondary"
                            />
                        </div>
                    </a>
                </div>
                <div
                    className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
            <HeroBottomCard />
        </>
    );
}
