'use client';
import Image from 'next/image';
import React, { useContext } from 'react';

import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';

import { tabsData } from '../utils/DataForPage/dummyData';

import { ThemeBgContext } from '../ui/Components/ContextWrapper/ThemeContext';

const TabsComponent = () => {
    const theme = useContext(ThemeBgContext);
    return (
        <div id="features">
            <Tabs
                id="custom-animation"
                value="dashboard"
                orientation="vertical"
                className="grid w-full grid-cols-2 content-between items-center justify-items-center sm:grid-cols-1"
            >
                <div className="w-4/5 pl-24 sm:w-full sm:pl-4">
                    <h1
                        className={
                            theme === 'light'
                                ? 'font-inter pb-4 pt-10 align-middle text-5xl font-bold normal-case leading-none tracking-wide text-dark no-underline sm:text-4xl'
                                : 'font-inter pb-4 pt-10 align-middle text-5xl font-bold normal-case leading-none tracking-wide text-white no-underline sm:text-4xl'
                        }
                    >
                        TRABALHOS <span className="text-amber-400">RECENTES</span>
                    </h1>
                    <p
                        className={
                            theme === 'light'
                                ? 'font-inter pb-4  align-middle text-2xl font-normal normal-case leading-none tracking-wide text-dark no-underline sm:text-xl'
                                : 'font-inter pb-4  align-middle text-2xl font-normal normal-case leading-none tracking-wide text-white no-underline sm:text-xl'
                        }
                    >
                        CONFIRA AQUI ALGUNS RESULTADOS DA SUA NOVA AGÊNCIA DE MARKETING DIGITAL E
                        DESIGN
                    </p>
                    <div className="antialiased max-w-8xl mb-8 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-8 lg:mx-auto">
                        <TabsHeader className="flex content-center items-center justify-center bg-gray-100 sm:flex-col">
                            {tabsData.map(({ label, value }) => (
                                <Tab
                                    className="w-40 place-items-start font-extrabold"
                                    key={value}
                                    value={value}
                                >
                                    <div className="flex items-center gap-2">{label}</div>
                                </Tab>
                            ))}
                        </TabsHeader>
                    </div>
                    <TabsBody
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}
                    >
                        {tabsData.map(({ value, desc, linkText }) => (
                            <TabPanel key={value} value={value}>
                                <p
                                    className={
                                        theme === 'light'
                                            ? 'font-inter relative right-3 align-middle text-lg font-normal normal-case leading-none tracking-wide text-dark no-underline'
                                            : 'font-inter relative right-3 align-middle text-lg font-normal normal-case leading-none tracking-wide text-white no-underline'
                                    }
                                >
                                    {desc}
                                </p>
                                <span className="hover:animate-puls box-deco ration-slice font-inter relative right-3 cursor-pointer rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 px-2 align-middle normal-case leading-normal tracking-wide text-white no-underline">
                                    {linkText}
                                </span>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </div>
                <div>
                    <TabsBody
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}
                    >
                        {tabsData.map(({ value, img }) => (
                            <TabPanel key={value} value={value}>
                                <Image src={img} alt="phone" width={1920} height={1280} />
                            </TabPanel>
                        ))}
                    </TabsBody>
                </div>
            </Tabs>
        </div>
    );
};

export default TabsComponent;
