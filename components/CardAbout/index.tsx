/* eslint-disable react/react-in-jsx-scope */
'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, TelegramLogo } from 'phosphor-react';

import { Button, Container, ButtonAlternatives } from '../../styles/styles';
import { AboutContainer } from './styles';

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className='AboutImg'>
          <Image
            width={500}
            height={500}
            className='AboutImg'
            src='/about.svg'
            alt='Imagem de perfil'
          />
        </div>

        <div className='aboutContent'>
          <div className='aboutDescription'>
            <h2>Deixe-me apresentar</h2>
            <p>
              Sou um desenvolvedor front-end apaixonado por projetar e
              codificar. Minha especialidade é a criação de interfaces e
              funcionalidades para aplicativos da web usando React.js e Next.js.
              <br />
              Você pode conhecer mais sobre o meu perfil e o meu trabalho
              navegando pelo website.
            </p>

            <strong>
              P.S. este site é código aberto e está disponível no{' '}
              <Link
                href={'https://github.com/EvanderInacio/Portfolio'}
                target='_blank'
              >
                Github
              </Link>
            </strong>
          </div>

          <div className='aboutButton'>
            <Link href={'/contact'}>
              <Button>
                Entre em contato
                <TelegramLogo
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  size={16}
                  weight='bold'
                />
              </Button>
            </Link>
            <Link href={'/about'}>
              <ButtonAlternatives>
                Ler mais
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  weight='bold'
                  size={16}
                />
              </ButtonAlternatives>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
