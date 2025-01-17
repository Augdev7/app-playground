import React from 'react';

import { motion } from 'framer-motion';

const CardServico = () => {
    return (
        <div className="m-auto flex w-full flex-col items-center justify-between p-5 py-20 md:w-4/5 md:flex-row">
            <div className="w-full space-y-2 p-5 md:w-1/3 ">
                <h1 className="text-5xl font-bold md:text-6xl">My Development Skills</h1>
                <p className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit maxime dolorum
                    nesciunt repellat, ab magnam laudantium fugit quas, laborum dolor, totam minima
                    mollitia nisi?
                </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-5 md:w-1/2">
                <motion.div
                    whileHover={{ scale: [null, 1.2, 1.1] }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center space-y-2 rounded bg-white p-2 drop-shadow-xl"
                >
                    <div className="rounded-full bg-gray-800 p-2">
                        <img src="images/icons/database.png" alt="" />
                    </div>
                    <p className="font-semibold">Databse Dev</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: [null, 1.2, 1.1] }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center space-y-2 rounded bg-white p-2 drop-shadow-xl"
                >
                    <div className="rounded-full bg-gray-800 p-2">
                        <img src="images/icons/curlyBrackets.png" alt="" />
                    </div>
                    <p className="font-semibold">Backend Dev</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: [null, 1.2, 1.1] }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center space-y-2 rounded bg-white p-2 drop-shadow-xl"
                >
                    <div className="rounded-full bg-gray-800 p-2">
                        <img src="images/icons/backend.png" alt="" />
                    </div>
                    <p className="font-semibold">Web Dev</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: [null, 1.2, 1.1] }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center space-y-2 rounded bg-white p-2 drop-shadow-xl"
                >
                    <div className="rounded-full bg-gray-800 p-2">
                        <img src="images/icons/webdev.png" alt="" />
                    </div>
                    <p className="font-semibold">Frontend Dev</p>
                </motion.div>
            </div>
        </div>
    );
};

export default CardServico;
