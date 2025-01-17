/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';

import { motion } from 'framer-motion';

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerchildren: 0.08,
        },
    },
};
const singelword = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

import { Container } from './styles';

export function AnimatedText({ text }: { text: string }) {
    return (
        <Container>
            <div className="mx-auto flex w-full items-center justify-center overflow-hidden text-center lg:py-2">
                <motion.h3
                    className={
                        '${}className} inline-block w-full text-8xl font-bold capitalize text-dark'
                    }
                    variants={quote}
                    initial="initial"
                    animate="animate"
                >
                    {text.split(' ').map((word, index) => (
                        <motion.span
                            key={word + '_' + index}
                            className="inline-block"
                            variants={singelword}
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </motion.h3>
            </div>
        </Container>
    );
}
