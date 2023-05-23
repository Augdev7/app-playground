import Image from 'next/image';
import React from 'react';

import hoverImg from '/public/assets/hoverImg.jpg';
import hoverImg2 from '/public/assets/hoverImg2.jpg';
import hoverImg3 from '/public/assets/hoverImg3.jpg';

import { AnimatedText } from './AnimatedText/index';

export function Experiencia() {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-neutral-800">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 py-16 sm:py-24 lg:py-32 px-16">
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded mx-auto">
                        <div className="h-[384px] w-[416px]">
                            <Image
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src={hoverImg}
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                MÍDIAS OFFLINE
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                As mídias offline ainda estão on! TV, rádio, embalagens, impressos,
                                materiais para PDV e demais mídias externas.
                            </p>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded">
                        <div className="h-[384px] w-[416px]">
                            <Image
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src={hoverImg2}
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">BRANDING</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Abordamos o design como processo, alinhando práticas e expertises de
                                branding, marketing, negócios e inovação em projetos visuais.
                            </p>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                Vamos conversar
                            </button>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded">
                        <div className="h-[384px] w-[416px]">
                            <Image
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src={hoverImg3}
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                MARKETING DIGITAL
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Gestão de Redes Sociais, Landing Pages, desenvolvimento de sites,
                                Facebook Ads, Google Ads, vídeos e muito mais.
                            </p>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-[58%]">
                    <AnimatedText text="JOBS" className="!text-left !text-6xl sm:text-6xl" />
                </div>
            </div>
        </>
    );
}
