import Image from 'next/image';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({ title, des, src }) => {
    return (
        <div className="shadow-shadowOne from-bodyColor hover:gray-900 group flex h-auto w-full flex-col rounded-lg bg-gradient-to-r to-[#202327] p-4 transition-colors duration-1000 hover:bg-gradient-to-b hover:from-gray-900 xl:px-12 xl:py-10">
            <div className="h-[80%] w-full overflow-hidden rounded-lg">
                <Image
                    className="h-60 w-full cursor-pointer object-cover duration-300 group-hover:scale-110"
                    src={src}
                    alt="src"
                />
            </div>

            <div className="mt-5 flex w-full flex-col  gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-designColor text-base font-normal uppercase">
                            {title}
                        </h3>

                        <div className="flex gap-2">
                            <span className="hover:text-designColor inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-lg text-gray-400 duration-300">
                                <BsGithub />
                            </span>

                            <span className="hover:text-designColor inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-lg text-gray-400 duration-300">
                                <FaGlobe />
                            </span>
                        </div>
                    </div>

                    <p className="mt-3 text-sm tracking-wide duration-300 hover:text-gray-100">
                        {des}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
