/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';
import Image from 'next/image';
import React from 'react';

const NavSection3 = ({ imgSrc, tooltip, eventHandler }) => {
    return (
        <div
            onClick={eventHandler}
            className="bg-gray-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
        >
            <Image src={imgSrc} />
        </div>
    );
};

export default NavSection3;
