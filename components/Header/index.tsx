'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { List, X } from 'phosphor-react';

import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles';

export function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <HeaderContainer style={{ position: 'fixed' }}>
      <div className='mobile-content'>
        <Link href={'/'}>
          <div className='logo'>
            <Image
              className='logo'
              width={30}
              height={30}
              src='/icon.svg'
              alt='logo'
            />
          </div>

          {'UP.EXPERT'.split('').map((letter, index) => {
            return (
              <span key={index} className='logo-name'>
                {letter}
              </span>
            );
          })}
        </Link>

        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={25} weight='bold' />
          ) : (
            <List size={25} weight='bold' />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link href={'/about'}>
              <span>Sobre</span>
            </Link>
          </li>

          <li>
            <Link href={'/experience'}>
              <span>Experiência</span>
            </Link>
          </li>

          <li>
            <Link href={'/projetos'}>
              <span>Projetos</span>
            </Link>
          </li>

          <li>
            <Link href={'/resume'}>
              <span>Resume</span>
            </Link>
          </li>

          <li>
            <Link href={'/contact'}>
              <span>Contato</span>
            </Link>
          </li>
        </ul>

        <Icons>
          <Link
            href={'https://github.com/EvanderInacio'}
            target='_blank'
            aria-label='Link para o Github'
          >
            <FiGithub />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/evander-inacio/'}
            target='_blank'
            aria-label='Link para o Linkedin'
          >
            <FiLinkedin />
          </Link>
          <Link
            href={'https://api.whatsapp.com/send?phone=5511995085916'}
            target='_blank'
            aria-label='Link para entrar em contato via whatsapp'
          >
            <FaWhatsapp />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}
