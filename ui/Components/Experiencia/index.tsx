'use client';
import Image from 'next/image';
import { useState } from 'react';

import hoverImg from '/public/assets/hoverImg.jpg';
import hoverImg2 from '/public/assets/hoverImg2.jpg';
import hoverImg3 from '/public/assets/hoverImg3.jpg';

export function Experiencia() {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <div className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group rounded relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <Image
                                src={hoverImg}
                                alt=""
                                fill
                                className={`h-full w-full object-cover duration-700 ease-in-out group-hover:opacity-75 ${
                                    loading
                                        ? 'scale-110 blur-2xl grayscale'
                                        : 'scale-100 blur-0 grayscale-0'
                                }}`}
                                onLoadingComplete={() => setLoading(false)}
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
                                SAIBA MAIS
                            </button>
                        </div>
                    </div>
                    <div className="group rounded relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <Image
                                src={hoverImg2}
                                alt=""
                                fill
                                className={`h-full w-full object-cover duration-700 ease-in-out group-hover:opacity-75 ${
                                    loading
                                        ? 'scale-110 blur-2xl grayscale'
                                        : 'scale-100 blur-0 grayscale-0'
                                }}`}
                                onLoadingComplete={() => setLoading(false)}
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
                                SAIBA MAIS
                            </button>
                        </div>
                    </div>
                    <div className="group rounded relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <Image
                                src={hoverImg3}
                                alt=""
                                fill
                                className={`object-cover duration-700 ease-in-out group-hover:opacity-75 ${
                                    loading
                                        ? 'scale-110 blur-2xl grayscale'
                                        : 'scale-100 blur-0 grayscale-0'
                                }}`}
                                onLoadingComplete={() => setLoading(false)}
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
                                SAIBA MAIS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
