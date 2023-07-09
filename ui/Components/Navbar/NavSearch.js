/* eslint-disable jsx-a11y/alt-text */
'use client';
import Image from 'next/image';
import React from 'react';

import Search from '#/ui/icons/search.svg';

const NavSearch = () => {
    return (
        <form className="bg-gray-3 flex  h-11 w-auto items-center justify-center rounded-full px-5">
            <label className="flex gap-3">
                <Image src={Search} />
                <input
                    type="text"
                    placeholder="Pesquisar aqui"
                    className="text-gray-2 bg-transparent focus:outline-none "
                />
            </label>
        </form>
    );
};

export default NavSearch;
