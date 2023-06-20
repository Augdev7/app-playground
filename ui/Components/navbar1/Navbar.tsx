/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';

import Logo from '#/ui/icons/fblogo.svg';
import clsx from 'clsx';
import { motion, useCycle } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

import { useScrollPosition } from '../../../app/hooks/useScrollPosition';
import Button from '../buttons/Button';
import DropMenu from './DropMenu';

export default function Navbar1() {
    const scrollPosition = useScrollPosition();
    const [drop, setDrop] = useState(false);
    const containerRef = useRef(null);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const router = useRouter();
    const close = () => setIsOpen(false);

    return (
        <header
            className={`sticky top-0 z-50 transition-shadow ${
                scrollPosition > 0
                    ? 'bg-opacity-70 shadow backdrop-blur-lg backdrop-filter'
                    : 'shadow-none'
            }`}
        >
            <motion.div
                className="brand"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                }}
            >
                <div className="flex cursor-default items-center justify-between px-6 py-6">
                    <div className="flex h-14 items-center px-8 py-4 lg:h-auto">
                        <Link
                            href="/"
                            className="group flex w-full items-center gap-x-2.5"
                            onClick={close}
                        >
                            <Image src={Logo} alt="Logo up.expert" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* 
                <div className="flex justify-between px-2 items-center gap-4 py-1 bg-gray-200 rounded-full">
                    <Button
                    btnName="Contact"
                    />
                    <BsFillArrowRightCircleFill className="text-[2rem]"/>
                </div> */}

                        <Button
                            icon={BsFillArrowRightCircleFill}
                            label="Contato"
                            onClick={() => router.push('/contact')}
                        />

                        {/* <button className="flex justify-between px-2 items-center gap-4 py-2 bg-violet-800 rounded-full">
                    <span className="pl-2">Contact</span>
                </button> */}

                        <div className="z-[999999] rounded-full bg-violet-800 p-2">
                            {drop ? (
                                <GrFormClose
                                    className="cursor-pointer text-[1.5rem]"
                                    onClick={() => setDrop(!drop)}
                                />
                            ) : (
                                <RxHamburgerMenu
                                    className="cursor-pointer text-[1.5rem]"
                                    onClick={() => setDrop(!drop)}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {drop && <DropMenu drop={drop} setDrop={setDrop} />}
                </AnimatePresence>
            </motion.div>
        </header>
    );
}
