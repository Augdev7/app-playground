/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { FaWhatsappSquare, FaWpforms } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import Image2 from '../../../public/banner1.png';
import Up from '../../../public/up.png';
import Esquadria from '../../../public/esquadria.png';
import Image1 from '../../../public/Home.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import Link from 'next/link';

export default function Carrousel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="ServiceSlider"
            >
                <SwiperSlide>
                    <section className="w-full bg-[url('/bg1.svg')] bg-no-repeat">
                        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
                            <div className="mr-auto place-self-center lg:col-span-7">
                                <h1
                                    data-aos="fade-right"
                                    className="dark:text-purple text-left mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl"
                                >
                                    Transforme sua visão em realidade
                                </h1>
                                <p
                                    data-aos="fade-right"
                                    data-aos-delay="30"
                                    data-aos-duration="800"
                                    className="mb-6 max-w-2xl text-left font-bold text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl"
                                >
                                    com nossos serviços de criação de marcas.
                                </p>
                                <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                                    <Link
                                        data-aos="fade-right"
                                        data-aos-delay="40"
                                        data-aos-duration="900"
                                        href="https://github.com/Soheib-Kiani/landwind/tree/patest"
                                        className="text-purple inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-amber-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto"
                                    >
                                        <div className="flex items-center  ">
                                            <FaWhatsappSquare className="h-5 w-5" />

                                            <p className="pl-2"> WhatsApp</p>
                                        </div>
                                    </Link>
                                    <Link
                                        data-aos="fade-right"
                                        data-aos-delay="50"
                                        data-aos-duration="1000"
                                        href="https://github.com/Soheib-Kiani/landwind/tree/patest"
                                        className="bg-purple dark:hover:text-midnight mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:w-auto"
                                    >
                                        <div className="flex items-center  ">
                                            <FaWpforms className="h-5 w-5" />

                                            <p className="pl-2"> Preecher formulario</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div
                                data-aos="fade-left"
                                className="hidden lg:col-span-5 lg:mt-0 lg:flex"
                            >
                                <Image
                                    src={Up}
                                    alt="hero image"
                                    placeholder="blur"
                                    width={400}
                                    height={565}
                                />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="w-full bg-[url('/bgslide1.svg')] bg-no-repeat">
                        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
                            <div className="mr-auto place-self-center lg:col-span-7">
                                <h1
                                    data-aos="fade-right"
                                    className="dark:text-purple text-left mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl"
                                >
                                    A sua marca está pronta para o mercado?
                                </h1>
                                <p
                                    data-aos="fade-right"
                                    data-aos-delay="30"
                                    data-aos-duration="800"
                                    className="mb-6 max-w-2xl text-left font-bold text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl"
                                >
                                    O mundo mudou. As marcas precisam de consistência e
                                    flexibilidade para atender os desejos das pessoas e se conectar
                                    de diferentes e variadas formas.
                                </p>
                                <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0 ">
                                    <Link
                                        data-aos="fade-right"
                                        data-aos-delay="40"
                                        data-aos-duration="900"
                                        href="https://github.com/Soheib-Kiani/landwind/tree/patest"
                                        className="text-purple inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-amber-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto"
                                    >
                                        <div className="flex items-center  ">
                                            <FaWhatsappSquare className="h-5 w-5" />

                                            <p className="pl-2"> WhatsApp</p>
                                        </div>
                                    </Link>
                                    <Link
                                        data-aos="fade-right"
                                        data-aos-delay="50"
                                        data-aos-duration="1000"
                                        href="https://github.com/Soheib-Kiani/landwind/tree/patest"
                                        className="bg-purple dark:hover:text-midnight mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:w-auto"
                                    >
                                        <div className="flex items-center  ">
                                            <FaWpforms className="h-5 w-5" />

                                            <p className="pl-2"> Preecher formulario</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div
                                data-aos="fade-left"
                                className="hidden lg:col-span-5 lg:mt-0 lg:flex"
                            >
                                <Image
                                    src={Image2}
                                    alt="hero image"
                                    placeholder="blur"
                                    width={400}
                                    height={565}
                                />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="w-full bg-[#ffc501]">
                        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
                            <div className="mr-auto place-self-center lg:col-span-7">
                                <h1
                                    data-aos="fade-right"
                                    className="dark:text-purple mb-4 max-w-2xl text-left text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl"
                                >
                                    Resultados eficientes com nossos serviços.
                                </h1>
                                <p
                                    data-aos="fade-right"
                                    data-aos-delay="30"
                                    data-aos-duration="800"
                                    className="mb-6 max-w-2xl text-left font-bold text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl"
                                >
                                    Confira nossas ofertas de Esquadrias de Alumínio. Diversos
                                    modelos e tamanhos de portas e janelas.{' '}
                                </p>
                                <div className="space-y-4 items-center sm:flex sm:space-x-4 sm:space-y-0 ">
                                    <Link
                                        data-aos="fade-right"
                                        data-aos-delay="40"
                                        data-aos-duration="900"
                                        href="https://github.com/Soheib-Kiani/landwind/tree/patest"
                                        className="text-purple inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-amber-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto"
                                    >
                                        <div className="flex items-center  ">
                                            <FaWhatsappSquare className="h-5 w-5" />

                                            <p className="pl-2"> WhatsApp</p>
                                        </div>
                                    </Link>
                                    <Link
                                        data-aos="fade-right"
                                        data-aos-delay="50"
                                        data-aos-duration="1000"
                                        href="https://github.com/Soheib-Kiani/landwind/tree/patest"
                                        className="bg-purple dark:hover:text-midnight mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:w-auto"
                                    >
                                        <div className="flex items-center  ">
                                            <FaWpforms className="h-5 w-5" />

                                            <p className="pl-2"> Preecher formulario</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div
                                data-aos="fade-left"
                                className="hidden lg:col-span-5 lg:mt-0 lg:flex"
                            >
                                <Image
                                    src={Esquadria}
                                    alt="hero image"
                                    placeholder="blur"
                                    width={400}
                                    height={565}
                                />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
