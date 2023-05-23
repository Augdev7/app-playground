import React, { useContext } from 'react';

import { Switch } from '@material-tailwind/react';
import { ThemeBgContext } from 'ui/Components/ContextWrapper/ThemeContext';

import header1 from '../../../public/assets/headerImage.png';

const Header = ({ topRef }) => {
    const { theme, handleTheme } = useContext(ThemeBgContext);

    return (
        <div ref={topRef} className="mx-auto pt-16">
            <div className="grid grid-cols-2 items-center justify-items-center sm:grid-cols-1">
                <div className="w-4/5 pl-24 sm:w-full sm:pl-4">
                    <Switch
                        label={theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
                        defaultChecked={theme === 'dark' ? true : false}
                        onClick={handleTheme}
                    />
                    <h1
                        className={
                            theme === 'light'
                                ? 'align-middle font-russonOne text-5xl font-medium normal-case leading-normal tracking-wide text-dark no-underline sm:text-3xl'
                                : 'align-middle font-russonOne text-5xl font-medium normal-case leading-normal tracking-wide text-white no-underline sm:text-3xl'
                        }
                    >
                        AxeL Brand new{' '}
                        <span
                            className={
                                theme === 'light'
                                    ? 'font-petitFormal text-6xl font-bold text-dark sm:text-4xl'
                                    : 'font-petitFormal text-6xl font-bold text-white sm:text-4xl'
                            }
                        >
                            Furniture
                        </span>{' '}
                        Mobile App
                    </h1>
                    <div className="mt-4">
                        <p
                            className={
                                theme === 'light'
                                    ? 'w-4/5 align-middle font-inter text-2xl font-medium normal-case tracking-wide text-dark no-underline sm:text-lg'
                                    : 'w-4/5 align-middle font-inter text-2xl font-medium normal-case tracking-wide text-white no-underline sm:text-lg'
                            }
                        >
                            Giving your home a propper makeover never was this easy. Modern and
                            stylish furniture for decent prices. Take a look what we offer with
                            simple button click.
                        </p>
                    </div>
                    <div className="pb-20">
                        <button className="pushable mt-4">
                            <span className="front">Start now</span>
                        </button>
                    </div>
                </div>
                <div className="mt-4 sm:pl-4">
                    <div>
                        <h2
                            className={
                                theme === 'light'
                                    ? 'pb-4 align-middle font-russonOne text-5xl font-medium normal-case leading-normal tracking-wide text-dark no-underline sm:text-3xl'
                                    : 'pb-4 align-middle font-russonOne text-5xl font-medium normal-case leading-normal tracking-wide text-white no-underline sm:text-3xl'
                            }
                        >
                            Modern Design
                        </h2>
                    </div>
                    <img
                        className="header relative z-10 h-[765px] w-full rounded-xl bg-center bg-no-repeat sm:h-[475px]"
                        src={header1}
                        alt="header-phone"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Header;
