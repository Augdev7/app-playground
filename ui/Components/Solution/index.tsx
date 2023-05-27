import Image from 'next/image';
import React from 'react';

import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Img from 'assets/hero.jpg';

import Img1 from '/public/BG-slide.jpg';

export function Solution() {
    const data = [
        {
            label: 'TRÁFEGO ',
            value: 'TRÁFEGO ',
            icon: Square3Stack3DIcon,
            desc: `Aqui abordamos detalhes e ferramentas que englobam esta dinâmica. O Tráfego é considerado um dos pilares mais importantes, pois, sem ele, os outros três não farão sentido.`,
        },
        {
            label: 'ENGAJAMENTO',
            value: 'ENGAJAMENTO',
            icon: UserCircleIcon,
            desc: `O segundo passo trata da dinâmica de elevação do nível de consciência do possível cliente sobre a sua solução. Diversos detalhes que colaboram neste pilar são abordados de maneira teórica e prática para melhor compreensão.`,
        },
        {
            label: 'CONVERSÃO',
            value: 'CONVERSÃO',
            icon: Cog6ToothIcon,
            desc: `O terceiro passo trata-se de um detalhe muito importante, às vezes negligenciado. A maneira como é feita a conversão de um produto ou serviço pode impactar no aumento de faturamento sem investimento pesado, fazendo com que este seja uma peça chave no método.`,
        },
        {
            label: 'RETENÇÃO',
            value: 'RETENÇÃO',
            icon: Cog6ToothIcon,
            desc: `O quarto passo é o menos aplicado no mercado. Após a venda do produto a relação com o cliente não deve ter um fim, pois assim podemos vender mais vezes para a mesma pessoa, evitando novos gastos com aquisição de mais clientes.`,
        },
    ];
    return (
        <section>
            <div className="bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="antialiased max-w-8xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
                            <Tabs value="dashboard" orientation="vertical">
                                <TabsHeader className="w-40">
                                    {data.map(({ label, value, icon }) => (
                                        <Tab
                                            key={value}
                                            value={value}
                                            className="place-items-start font-extrabold "
                                        >
                                            <div className="flex items-center gap-2">
                                                {React.createElement(icon, {
                                                    className: 'w-5 h-5',
                                                })}
                                                {label}
                                            </div>
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody>
                                    {data.map(({ value, desc }) => (
                                        <TabPanel
                                            key={value}
                                            value={value}
                                            className="py-0 px-16 font-normal mb-8"
                                        >
                                            {desc}
                                        </TabPanel>
                                    ))}
                                </TabsBody>
                            </Tabs>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <Image
                            alt="booksimg1"
                            src={Img}
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                            width={1280}
                            height={800}
                        />

                        <Image
                            alt="booksimg2"
                            src={Img1}
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                            width={1280}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
