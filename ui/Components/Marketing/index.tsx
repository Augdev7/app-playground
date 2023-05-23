/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';

import Img1 from '/public/assets/bg.jpg';

import { CardService } from './../../CardService';
import { Headline } from './../../Headline';
import { Container } from './styles';

export function Marketing() {
    return (
        <Container>
            <div id="max-w-[1640px] mx-auto p-4 py-12">
                <Headline title="products" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
                    <CardService />
                </div>
            </div>
        </Container>
    );
}
