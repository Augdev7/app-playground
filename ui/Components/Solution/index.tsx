import Image from 'next/image';
import React from 'react';

import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Img from 'assets/hero.jpg';

import Img1 from '/public/BG-slide.jpg';

export function Solution() {
    const data = [
        {
            label: 'Dashboard',
            value: 'dashboard',
            icon: Square3Stack3DIcon,
            img: 'Img',
            desc: `It really matters and then like it really doesn't matter.
  What matters is the people who are sparked by it. And the people 
  who are like offended by it, it doesn't matter.`,
        },
        {
            label: 'Profile',
            value: 'profile',
            icon: UserCircleIcon,
            desc: `Because it's about motivating the doers. Because I'm here
  to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: 'Settings',
            value: 'settings',
            icon: Cog6ToothIcon,
            desc: `We're not always in the position that we want to be at.
  We're constantly growing. We're constantly making mistakes. We're
  constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    return (
        <section>
            <div className="bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
                            <Tabs value="dashboard" orientation="vertical">
                                <TabsHeader className="w-40">
                                    {data.map(({ label, value, icon }) => (
                                        <Tab
                                            key={value}
                                            value={value}
                                            className="place-items-start"
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
                                    {data.map(({ value, desc, Img }) => (
                                        <TabPanel key={value} value={value} className="py-0">
                                            {desc}
                                            <Image src={Img} alt="/" width={400} height={565} />
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
