/* eslint-disable react/no-unknown-property */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Bg from '/public/banner1.webp';

import { AnimatedText } from '../../AnimatedText/index';
import { Container } from './styles';

export function SectionSobre() {
    return (
        <Container>
            <div id="about">
                <div className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-[url('/bg-sobre.svg')] text-dark sm:items-start">
                    <div className="max-w-8xl mx-auto px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                            <div className="bg-light z-0 inline-block p-6 !pt-0 dark:bg-dark sm:p-4 sm:!pt-16 md:p-12 md:!pt-16 lg:p-16 xl:p-4">
                                <Image src={Bg} alt="codeBucka" className="h-auto" />
                            </div>
                            <div className="gap z-0 grid grid-flow-col flex-col items-center self-center p-32 !pt-0 sm:grid-cols-1 sm:p-8 sm:!pt-16 md:p-12 md:!pt-16 lg:w-full lg:p-16 lg:pt-2 lg:text-center">
                                <AnimatedText text="SOBRE NÓS" />
                                <p className="my-4 text-base font-medium">
                                    Somos uma Agência de Marketing Digital Full Service com uma
                                    combinação única de talentos criados para a era digital. Geramos
                                    ideias e estratégias impulsionadas pela percepção do consumidor
                                    e ampliadas por um domínio sem precedentes da tecnologia.
                                </p>
                                <div className="col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6">
                                    <Link href="https://api.whatsapp.com/send?phone=5561986692775">
                                        <button className="button i-button">
                                            Entrar em contato
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
