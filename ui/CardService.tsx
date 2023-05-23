import Image from 'next/image';

import { Button } from './Components/Button';

export const CardService = ({ image, title }: { image: Image; title: string }) => {
    return;
    <div className="rounded-xl relative overflow-hidden group hover:scale-105 hover:shadow-md duration-300">
        <Image
            src={image}
            alt="/"
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rouded-xl"
        />
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white z-10 flex flex-col items-center justify-center gap-5-botton-20 group-hover:buttom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="font-bold text-2xl mt-4">{title}</h3>
            <Button Link="#" text="Explore" />
        </div>
    </div>;
};
