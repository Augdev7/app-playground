import Link from 'next/link';
import React from 'react';

export const Button = ({ link, text }) => {
    return <Link href={link}>{text}</Link>;
};
