/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image from 'next/image';
import clsx from 'clsx';

import { useState } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { dataslide, type Item } from '#/lib/dataslide';
import { images } from '#/ui/Components/Slide/imageData';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css';
import Attic from 'assets/hoverImg.jpg';
import Bedroom from 'assets/hoverImg2.jpg';
import Bathroom from 'assets/hoverImg3.jpg';
import Diningroom from 'assets/hoverImg4.jpg';
import { Button } from '#/ui/button';
import { Link } from 'next/link';

const categoria = [
    {
        name: Attic,
        Description: 'Marketing digital',
        image: 'Attic',
        btnText: 'Fale conosco',
    },
    {
        name: Bedroom,
        Description: 'Marketing digital',
        image: 'Bedroom',
        btnText: 'Fale conosco',
    },
    {
        name: Bathroom,
        Description: 'Marketing digital',
        image: 'Bathroom',
        btnText: 'Fale conosco',
    },
    {
        name: Diningroom,
        Description: 'Marketing digital',
        image: 'Diningroom',
        btnText: 'Fale conosco',
    },
];

export const ServiceSlider = () => {
    const images = [
        '/public/assets/hoverImg.jpg',
        '/public/assets/hoverImg2.jpg',
        '/public/assets/hoverImg3.jpg',
        '/public/assets/hoverImg4.jpg',
    ];
    const close = () => setIsOpen(false);
    return (
        <Swiper
            slidesPerview={1}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                700: {
                    slidesPerview: 1,
                },
            }}
            className="ServiceSlider min-h-[660px]"
        >
            {categoria.map(index => {
                return (
                    <>
                        <SwiperSlide className="bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10">
                            <div key={categoria.name}>
                                <div className="flex flc gap-y-5 md: flex-row md:gax16">
                                    <Image
                                        src={categoria.image}
                                        alt="/"
                                        height={900}
                                        width={1300}
                                    />
                                    <div className="flex flex-col gap-y-5">
                                        <div className="text-2xl font-medium flex gap-x-2 items-center">
                                            {categoria.name}
                                            <div className="h-[3px] w-[40px] bg-green-600 rounded"></div>
                                            <div className="text-[20px] text-gray-600">
                                                {categoria.Description}
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                );
            })}
        </Swiper>
    );
};
function ServiceSliderItem({ item, close }: { item: Item; close: () => false | void }) {
    const segment = useSelectedLayoutSegment();
    const isActive = item.slug === segment;

    return (
        <Link
            onClick={close}
            href={`/${item.slug}`}
            className={clsx('block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300', {
                'text-gray-400 hover:bg-gray-800': !isActive,
                'text-white': isActive,
            })}
        >
            {item.name}
        </Link>
    );
}
