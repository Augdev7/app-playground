import React from 'react';

import { projectOne, projectTwo, projectThree } from './index';
import ProjectsCard from './ProjectsCard';

const Portifolio = () => {
    return (
        <section id="projects" className="w-full border-b-[1px] border-b-black py-20 bg-slate-100">
            <div className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-24">
                <div className="flex items-left justify-left text-left">
                    <h3 className="text-designColor mb-[-8px] text-sm font-bold uppercase tracking-wide">
                        O QUE FAZEMOS
                    </h3>
                    <h1 className="text-4xl font-extrabold capitalize text-gray-700 md:text-4xl">
                        Nossas Soluções
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
                    <ProjectsCard
                        title="CRIAÇÃO DE CONTEÚDO"
                        des=" Seja para campanhas on ou off, mantemos o nivel de qualidade e criatividade que sua empresa deseja."
                        src={projectOne}
                    />

                    <ProjectsCard
                        title="DESIGN GRÁFICO"
                        des=" Vamos do branding à criação de sites e plataformas para estabelecer o visual de sua marca!"
                        src={projectTwo}
                    />

                    <ProjectsCard
                        title="PLANEJAMENTO"
                        des=" Definimos estratégias de cruto, médio e longo prazo para você nunca perder seu negócio de vista!"
                        src={projectThree}
                    />

                    <ProjectsCard
                        title="SOCIAL MEDIA CLONE"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.

              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={projectThree}
                    />

                    <ProjectsCard
                        title="E-commerce Website"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.

              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={projectOne}
                    />

                    <ProjectsCard
                        title="Chatting App"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.

              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={projectTwo}
                    />
                </div>
            </div>
        </section>
    );
};

export default Portifolio;
