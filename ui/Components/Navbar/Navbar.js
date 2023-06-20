/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import Avatar from '#/ui/icons/avatar.png';
import Logo from '#/ui/icons/fblogo.svg';
import Gaming from '#/ui/icons/gaming.svg';
import Groups from '#/ui/icons/groups.svg';
import Hamburger from '#/ui/icons/hamburger.svg';
import Home from '#/ui/icons/home-outline.png';
import MarketPlace from '#/ui/icons/market place.svg';
import Menu from '#/ui/icons/menu.svg';
import Messenger from '#/ui/icons/messenger.svg';
import Notififaction from '#/ui/icons/notification.svg';
import Search from '#/ui/icons/search.svg';
import Watch from '#/ui/icons/watch.svg';

import NavMenu from './NavMenu/NavMenu';
import NavSearch from './NavSearch';
import NavSection3 from './NavSection3';

const Navbar = () => {
    const [hamState, setHamState] = useState(false);
    const [menuState, setMenuState] = useState(false);
    const [searchState, setSeachState] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuEvent = () => {
        setMenuState(!menuState);
        hamState && setHamState(false);
        searchState && setSeachState(false);
    };
    const navItems = [
        {
            icon: Home,
            href: '#',
            tooltip: 'Home',
        },
        {
            icon: Watch,
            href: '#',
            tooltip: 'Watch',
        },
        {
            icon: MarketPlace,
            href: '#',
            tooltip: 'Market Place',
        },
        {
            icon: Groups,
            href: '#',
            tooltip: 'Groups',
        },
        {
            icon: Gaming,
            href: '#',
            tooltip: 'Gaming',
        },
    ];

    return (
        <div className="bg-[#1E1E1E]/90 sm:fixed top-0 z-20 w-[100%] flex h-28 items-center justify-between px-2 shadow-2xl backdrop-blur-sm lg:px-5">
            {/* section 1 starts */}
            <div className="flex gap-2 lg:gap-3">
                <div className="flex h-14 items-center px-8 py-4 lg:h-auto">
                    <Link
                        href="/"
                        className="group flex w-full items-center gap-x-2.5"
                        aria-label="Read more about Seminole tax hike"
                    >
                        <div className="w-58 h-10 rounded-full border border-white/30 group-hover:border-white/50">
                            <Logo />
                        </div>
                    </Link>
                </div>
                <div
                    onClick={() => {
                        hamState && setHamState(false);
                        menuState && setMenuState(false);
                        setSeachState(!searchState);
                    }}
                    className="bg-gray-3 grid h-11 w-11 place-content-center rounded-full lg:hidden lg:w-6"
                >
                    <Image src={Search} alt="" />
                </div>
                <div className="hidden lg:block">
                    <NavSearch />
                </div>
                {/* hamburger start */}
                <div className="hover:bg-gray-3 grid h-11 w-11 cursor-pointer place-content-center rounded-3xl lg:hidden">
                    <Image
                        src={Hamburger}
                        alt=""
                        onClick={() => {
                            menuState && setMenuState(false);
                            searchState && setSeachState(false);
                            setHamState(!hamState);
                        }}
                    />
                </div>
                {/* hamburger end */}
            </div>
            {/* section 1 ends */}

            {/* dropDOwn starts */}
            <div
                className={`absolute top-16 z-40 rounded-lg pb-2 duration-500 lg:hidden ${
                    hamState ? 'left-2 opacity-100' : '-left-96 opacity-0'
                } w-60 bg-white/90 backdrop-blur-sm`}
            >
                {navItems.map(({ icon, href, tooltip }) => (
                    <Link
                        href={href}
                        className="text-gray-1 border-gray-2 flex h-16 w-full items-center justify-start gap-3 border-b-2 bg-transparent pl-4 duration-500 hover:border-b-4 hover:border-blue-700"
                    >
                        <Image src={icon} alt="" />
                        <p>{tooltip} </p>
                    </Link>
                ))}
            </div>

            {/* search dropDOwn start*/}
            <div
                className={`border-gray-2 absolute top-16 rounded-lg border-2 border-solid px-3 py-5 duration-500 lg:hidden ${
                    searchState ? 'left-2 opacity-100' : '-left-96 opacity-0'
                } bg-gray-4 w-auto`}
            >
                <NavSearch />
            </div>
            {/* dropDOwn end*/}

            {/* section 2 Start*/}
            <div className="hidden lg:flex">
                {navItems.map(({ icon, href, tooltip }) => (
                    <a
                        href={href}
                        className="flex h-16 w-28 items-center justify-center border-b-4 border-transparent bg-transparent duration-500 hover:border-b-4 hover:border-blue-700"
                    >
                        <Image src={icon} alt="" />
                    </a>
                ))}
            </div>
            {/* section 2 end*/}

            <div className="flex gap-2">
                <NavSection3 imgSrc={Menu} tooltip="menu" eventHandler={handleMenuEvent} />
                <button className="border border-green-700 px-4 py-1 rounded-md hover:bg-amber-500 hover:text-black">
                    {' '}
                    Contato{' '}
                </button>

                <div
                    className={`absolute top-16 z-40 duration-500  ${
                        menuState ? 'w-full md:w-2/3 lg:w-2/4' : 'h-0 w-0'
                    } right-0 overflow-hidden rounded-lg bg-[#9333EA]/90 backdrop-blur-sm lg:right-3`}
                >
                    <NavMenu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
