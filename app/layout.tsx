/* eslint-disable react/react-in-jsx-scope */
import '#/styles/globals.css';
import { Metadata } from 'next';
import Pwa from './Pwa';
import { siteConfig } from '#/config';
import StyledComponentsRegistry from './styling/styled-components/registry';
import GlobalStyle from './../styles/GlobalStyle';
import Footer from './../ui/footer';
import { Toaster } from '#/components/toaster';

import GlobalStyle from './../styles/GlobalStyle';
import { AddressBar } from './../ui/address-bar';
import Byline from './../ui/byline';
import Navbar from './../ui/Components/navbar1/Navbar';
import StyledComponentsRegistry from './styling/styled-components/registry';

export const metadata: Metadata = {
  title: {
    template: '%s | AGÊNCIA UP.EXPERT',
    default: 'Agência full service'
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  description: 'MARKETIGN DIGITAL EM BRASILIA | (61) 9 8669-2775',
  verification: {
    google: 'google-site-verification=123123123'
  },
  manifest: '/manifest.json',
  authors: [{ name: 'AGÊNCIA UP.EXPERT' }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'UP.EXPERT',
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="Pt-BR" className="[color-scheme:dark]">
      
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <GlobalNav />
        <div className="lg:pl-64">
          <div className="mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                            <div className="rounded-t-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                                <div className="rounded-t-lg bg-[#4c087b]">
                                    <AddressBar />
                                </div>
                            </div>
                            
                            <div className="rounded-b-lg bg-black/30 p-3.5 backdrop-blur-sm lg:p-6">
                                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                                <GlobalStyle />
                                <Toaster /> 
                            </div>
                        </div>
            <Pwa />
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                            <div className="rounded-lg bg-black/30 backdrop-blur-xl">
                                <Footer />
                                <Byline />
                            </div> 
                        </div> 
          </div>
        </div>
      </body>
    </html>
  );
}
