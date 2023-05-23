import React from 'react';

import { projectOne, projectTwo, projectThree } from './index';
import ProjectsCard from './ProjectsCard';
import Title from './title';

const Portifolio = () => {
    return (
        <section id="projects" className="w-full border-b-[1px] border-b-black py-20">
            <div className="flex items-center justify-center text-center">
                <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
                <ProjectsCard
                    title="SOCIAL MEDIA CLONE"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.

              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={projectOne}
                />

                <ProjectsCard
                    title="E-commerce Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.

              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={projectTwo}
                />

                <ProjectsCard
                    title="Chatting App"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.

              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
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
        </section>
    );
};

export default Portifolio;
