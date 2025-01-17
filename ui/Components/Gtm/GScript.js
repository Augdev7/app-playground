import Script from 'next/script';

export const GScript = () => (
    <>
        <Script>{`window.dataLayer = window.dataLayer || [];`}</Script>
        <Script id="google-tag-manager" strategy="lazyOnload">
            {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '
    GTM-KQNPC8S')
    `}
        </Script>
    </>
);
