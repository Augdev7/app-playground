'use client';
import React, { useState } from 'react';

import { Tooltip } from '@material-tailwind/react';
import { motion } from 'framer-motion';

import Modal from './Modal';

const PopUpButton = ({ handleScroll }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                duration: 0.2,
            },
        },
        closed: {
            opacity: 0,
            y: 15,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <>
            {open && <Modal open={open} setOpen={setOpen}></Modal>}

            <div>
                <motion.button
                    animate={open ? 'closed' : 'open'}
                    whileHover={{ scale: '0.9' }}
                    variants={itemVariants}
                    onClick={handleClick}
                    className="fixed bottom-6 right-14 z-20 flex cursor-pointer flex-col rounded-full bg-blue-600 px-6 py-4 text-white duration-700 ease-in-out hover:bg-blue-200 sm:bottom-20 sm:right-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        className="h-8 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                        />
                    </svg>
                </motion.button>
                <Tooltip content="Back to the top">
                    <div className="bg-dark absolute bottom-6 left-14 z-10 hidden cursor-pointer flex-col rounded-full px-6 py-4 text-white sm:bottom-20 sm:left-4 sm:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            onClick={handleScroll}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-8 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                            />
                        </svg>
                    </div>
                </Tooltip>
            </div>
        </>
    );
};

export default PopUpButton;
