/** @format */
'use client';

import React, { useEffect, useState } from 'react';
import { anime } from 'react-anime';
import { Briefcase, Home, Mail, User, Settings, Calendar, Clock } from 'react-feather';

const StickyNav = ({ offsets }) => {
    const [activeNav, setActiveNav] = useState('home');
    const [posY, setPosY] = useState(0);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setPosY(window.scrollY);

            if (window.scrollY >= 500) {
                anime({
                    targets: '.fixedNav',
                    opacity: 1,
                    duration: 100,
                    easing: 'linear',
                });
            } else if (window.scrollY <= 499) {
                anime({
                    targets: '.fixedNav',
                    opacity: 0,
                    duration: 100,
                    easing: 'linear',
                });
            }
        });
    }, []);

    useEffect(() => {
        if (offsets) {
            if (posY < offsets.aboutme) {
                setActiveNav('home');
            } else if (posY >= offsets.aboutme && posY < offsets.skills) {
                setActiveNav('aboutme');
            } else if (posY >= offsets.skills && posY < offsets.portfolio) {
                setActiveNav('skills');
            } else if (posY >= offsets.portfolio && posY < offsets.stats) {
                setActiveNav('portfolio');
            } else if (posY >= offsets.stats && posY < offsets.timeline) {
                setActiveNav('stats');
            } else if (posY >= offsets.timeline && posY < offsets.contact) {
                setActiveNav('timeline');
            } else if (posY >= offsets.contact) {
                setActiveNav('contact');
                // eslint-disable-next-line no-empty
            } else {
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.scrollY, posY]);

    return (
        <div className="fixedNav fixed bottom-5 z-[100] flex w-[20rem] items-center justify-around rounded-3xl bg-white/30 px-2 py-2 opacity-0 backdrop-blur backdrop-brightness-200">
            <a
                href="#home"
                className={
                    activeNav === 'home'
                        ? 'active active-svg rounded-xl p-2'
                        : 'duration-300 rounded-xl p-2 transition ease-in-out hover:bg-[#f1faee]'
                }
                onClick={() => setActiveNav('home')}
            >
                <Home color="#f1faee" size={22} />
            </a>
            <a
                href="#aboutme"
                className={
                    activeNav === 'aboutme'
                        ? 'active active-svg rounded-xl p-2'
                        : 'duration-300 rounded-xl p-2 transition ease-in-out hover:bg-[#f1faee]'
                }
                onClick={() => setActiveNav('aboutme')}
            >
                <User color="#f1faee" size={22} />
            </a>
            <a
                href="#skills"
                className={
                    activeNav === 'skills'
                        ? 'active active-svg rounded-xl p-2'
                        : 'duration-300 rounded-xl p-2 transition ease-in-out hover:bg-[#f1faee]'
                }
                onClick={() => setActiveNav('skills')}
            >
                <Settings color="#f1faee" size={22} />
            </a>
            <a
                href="#portfolio"
                className={
                    activeNav === 'portfolio'
                        ? 'active active-svg rounded-xl p-2'
                        : 'duration-300 rounded-xl p-2 transition ease-in-out hover:bg-[#f1faee]'
                }
                onClick={() => setActiveNav('portfolio')}
            >
                <Briefcase color="#f1faee" size={22} />
            </a>
            <a
                href="#stats"
                className={
                    activeNav === 'stats'
                        ? 'active active-svg rounded-xl p-2'
                        : 'duration-300 rounded-xl p-2 transition ease-in-out hover:bg-[#f1faee]'
                }
                onClick={() => setActiveNav('stats')}
            >
                <Clock color="#f1faee" size={22} />
            </a>
            <a
                href="#timeline"
                className={
                    activeNav === 'timeline'
                        ? 'active active-svg rounded-xl p-2'
                        : 'duration-300 rounded-xl p-2 transition ease-in-out hover:bg-[#f1faee]'
                }
                onClick={() => setActiveNav('timeline')}
            >
                <Calendar color="#f1faee" size={22} />
            </a>
            <a
                href="#contact"
                className={
                    activeNav === 'contact'
                        ? 'active active-svg rounded-xl p-2'
                        : 'duration-300 rounded-xl p-2 transition ease-in-out hover:bg-[#f1faee]'
                }
                onClick={() => setActiveNav('contact')}
            >
                <Mail color="#f1faee" size={22} />
            </a>
        </div>
    );
};

export default StickyNav;
