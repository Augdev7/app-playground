export const Noscript = () => (
    <noscript
        dangerouslySetInnerHTML={{
            __html: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=
      GTM-KQNPC8S"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
        }}
    />
);
