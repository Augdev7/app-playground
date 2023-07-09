import React from 'react';

import { AnimatedText } from './AnimatedText/index';
import {
  projectOne,
  projectTwo,
  projectThree,
  mkt,
  ecomece,
  digital
} from './index';
import ProjectsCard from './ProjectsCard';

const Portifolio = () => {
  return (
    <section
      id='projects'
      className='w-full border-b-[1px] border-b-black bg-slate-100 py-20'
    >
      <div className='mx-auto mt-24 min-h-screen max-w-7xl px-8 xl:px-0'>
        <div className='lg:pr-4'>
          <div className='lg:max-w-lg'>
            <p className='text-base font-semibold leading-7 text-indigo-600'>
              O que fazemos
            </p>
            <AnimatedText text='NOSSOS SERVIÇOS' />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 py-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-14'>
          <ProjectsCard
            title='CRIAÇÃO DE CONTEÚDO'
            des=' Seja para campanhas on ou off, mantemos o nivel de qualidade e criatividade que sua empresa deseja.'
            src={projectOne}
          />

          <ProjectsCard
            title='DESIGN GRÁFICO'
            des=' Vamos do branding à criação de sites e plataformas para estabelecer o visual de sua marca!'
            src={projectTwo}
          />

          <ProjectsCard
            title='PLANEJAMENTO'
            des=' Definimos estratégias de cruto, médio e longo prazo para você nunca perder seu negócio de vista!'
            src={projectThree}
          />

          <ProjectsCard
            title='SOCIAL MEDIA'
            des=' Criamos e gerenciamos conteúdos completos e páginas em redes sociais para empresas que buscam impactar o meio digital e criar autoridade.'
            src={mkt}
          />

          <ProjectsCard
            title='E-commerce Website'
            des=' Vá além do ecommerce tradicional, vendendo em todos os canais, colaborando com parceiros e expandindo sua oferta de produtos.'
            src={ecomece}
          />

          <ProjectsCard
            title='Marketing
            Digital'
            des=' Criamos, gerenciamos e trazemos resultados reais para empresas de todos os portes através de estratégias assertivas de marketing digital'
            src={digital}
          />
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
