import '#/styles/globals.css';
import { Metadata } from 'next';

import GlobalStyle from './../styles/GlobalStyle';
import Byline from './../ui/byline';
import Navbar from './../ui/Components/Navbar/Navbar';
import PopUpButton from './../ui/Components/PopUpButton/PopUpButton';
import StyledComponentsRegistry from './styling/styled-components/registry';

export const metadata: Metadata = {
    title: {
        default: 'AGÊNCIA UP.EXPERT',

        template: 'MARKETIGN DIGITAL EM BRASILIA | (61) 9 8669-2775',
    },

    description:
        'Agência de Marketing Digital em Brasília-DF e Goiânia, honesta e eficiente. Confie em quem mais entende de resultados no digital, fale com a UP.EXPERT.',

    keywords:
        'Agência de Marketing, Agências em Brasília, Agência de Marketing em Brasília, Marketing em Brasília, Marketing Digital, Marketing Digital em Brasília, agência de marketing em Goiânia, agencia de marketing Brasília, resultado em marketing',

    authors: [
        {
            name: 'AGÊNCIA FULL SERVICE | UP.EXPERT',

            url: 'https://upexpert.com.br',
        },
    ],

    openGraph: {
        url: 'https://upexpert.com.br',

        title: 'AGÊNCIA FULL SERVICE | UP.EXPERT',

        description:
            'Muito mais que uma agência digital, uma parceria de projetos incríveis. Seu projeto deve ir além da comunicação e se destacar proporcionando experiências e reações positivas de seus clientes.',

        images: [
            {
                url: '/cover.png',

                alt: 'AGÊNCIA FULL SERVICE | UP.EXPERT',
            },
        ],
    },

    icons: [
        {
            url: '/public/favicon/favicon-32x32.png',

            sizes: '32x32',

            type: 'image/png',
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="PT-BR" className="[color-scheme:dark]">
            <body className="bg-slate-900 pb-36">
                <div className="bg-gray-5 justify-center overflow-hidden">
                    <Navbar />
                </div>
                <div className="">
                    <div className="bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                        <div className=" bg-black/30 p-3.5 backdrop-blur-sm lg:p-6">
                            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                            <GlobalStyle />
                        </div>
                    </div>
                    <PopUpButton handleScroll={undefined} />
                    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                        <div className="rounded-lg bg-black/30 backdrop-blur-xl">
                            <Byline />
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
