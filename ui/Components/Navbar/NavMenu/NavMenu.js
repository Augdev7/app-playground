/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Link from 'next/link';
import React from "react";

import { Disclosure, Menu, Transition } from '@headlessui/react'


const NavMenu = () => {
  const navigation = [
    { name: 'VIDRO TEMPERADO', href: '#', current: true },
    { name: 'ESQUADRIA DE ALUMINIO', href: '#', current: false },
    { name: 'SERVIÇOS', href: '#', current: false },
    { name: 'CONTATO', href: '#', current: false },
    { name: 'MÃO DE OBRA', href: '#', current: false },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
	return (
		<div className="bg-gray-3 grid h-96 w-full place-content-center">
			<div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-midnight',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
		</div>
	);
};

export default NavMenu;
