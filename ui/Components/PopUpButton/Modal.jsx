/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';

import React, { useState } from 'react';

import { Tooltip } from '@material-tailwind/react';
import { motion } from 'framer-motion';

const Modal = ({ open, setOpen }) => {
    const [message, setMessage] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(message);
        setMessage('');
        setOpen(false);
    };
    return (
        <div>
            <motion.div
                className="fixed bottom-2 right-4 z-20 flex flex-col rounded-2xl bg-white"
                initial={{ scale: 1, opacity: 0, height: 0, width: 0 }}
                animate={{
                    x: open ? -30 : 0,
                    y: open ? -30 : 0,
                    width: open && '300px',
                    height: open && '375px',
                    opacity: 1,
                }}
                transition={{ type: 'spring', duration: 2, ease: 'easeInOut' }}
            >
                <motion.div
                    className="flex flex-col pl-4 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'Tween', duration: 2 }}
                >
                    <h5 className="font-inter cursor-pointer pt-4 text-4xl font-medium tracking-tight text-blue-500">
                        Olá 🖐🏻
                    </h5>
                    <p className="font-inter pt-4 text-lg font-medium tracking-tight text-blue-500">
                        Bem vindo ao nosso site.
                    </p>
                    <span className="text-md font-inter pt-4 font-medium tracking-tight text-blue-500">
                        Pergunte-nos qualquer coisa.
                    </span>
                    <div className="pt-8">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="message"
                                className="border-none text-black outline-none"
                                placeholder="Envie -nos um mensagem..."
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            ></input>
                        </form>
                    </div>
                    <Tooltip content="Close" placement="left">
                        <div
                            className=" absolute right-4 top-4 cursor-pointer text-white"
                            onClick={() => setOpen(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#000"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </Tooltip>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Modal;
