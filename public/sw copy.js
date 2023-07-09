if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const r =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[r]) return;
    let d = {};
    const n = e => a(e, r),
      o = { module: { uri: r }, exports: d, require: n };
    s[r] = Promise.all(i.map(e => o[e] || n(e))).then(e => (c(...e), d));
  };
}
define(['./workbox-50de5c5d'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/Home copy.jpg', revision: 'f88a269ffffcaa00d92caaddc95d58cc' },
        { url: '/Home.jpg', revision: 'f88a269ffffcaa00d92caaddc95d58cc' },
        {
          url: '/_next/static/chunks/124-8739f8e8687cc3cd.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/2e3a737e-1778f2169f98d945.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/316-3821ab9a02da6819.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/424-02ff79de9f5d2425.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/428-94b100b4a6c8c5fb.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/453-27ea0325fda429d8.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/511-4b64ed9e8c4645ab.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/554-5d6572802243e0be.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/629-6c90b416bd732f86.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/69-7d529804bb08ccd4.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/889-15bebda280bd31d7.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/929-9c07b49a74b9bef6.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/969-8906e7ab043842ba.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/app/contact/page-87ecd8a9727396c4.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/app/experiencia/page-aee7af05bbcd9570.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/app/layout-95ecbb6d0bb7650d.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/app/not-found-cce63bdcc859ad83.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/app/page-f19fc6e4bbf89e09.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/app/planos/page-c299aab88198e47c.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/app/projetos/page-c5ec2929a11c215d.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/app/sobre/page-3c729f3e8649f174.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/bce60fc1-4e2863bafa8f2a4a.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/ff48af57-3327145e799bab0f.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/framework-b7ba9a8e7304c68b.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/main-app-9c46520d405a99e7.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/main-ce3298d8d39c7fc2.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/pages/404-9663b1fb57867c77.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/pages/_app-8a86745ca5c94a87.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/pages/_error-914d3478dc099efc.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3'
        },
        {
          url: '/_next/static/chunks/webpack-1d333bd3d8fcd4e1.js',
          revision: 'dfTnKHYEApzJlRr3P1UbP'
        },
        {
          url: '/_next/static/css/6f3df2b09a430b28.css',
          revision: '6f3df2b09a430b28'
        },
        {
          url: '/_next/static/css/7225082c9cfa6120.css',
          revision: '7225082c9cfa6120'
        },
        {
          url: '/_next/static/css/7f0e98dd1ecb3415.css',
          revision: '7f0e98dd1ecb3415'
        },
        {
          url: '/_next/static/css/961e74cabb3ff6af.css',
          revision: '961e74cabb3ff6af'
        },
        {
          url: '/_next/static/css/ae4ed9c503fd1e33.css',
          revision: 'ae4ed9c503fd1e33'
        },
        {
          url: '/_next/static/dfTnKHYEApzJlRr3P1UbP/_buildManifest.js',
          revision: '913ffda48a64f2e433079830288b0103'
        },
        {
          url: '/_next/static/dfTnKHYEApzJlRr3P1UbP/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        {
          url: '/_next/static/media/2aaf0723e720e8b9-s.p.woff2',
          revision: 'e1b9f0ecaaebb12c93064cd3c406f82b'
        },
        {
          url: '/_next/static/media/9c4f34569c9b36ca-s.woff2',
          revision: '2c1fc211bf5cca7ae7e7396dc9e4c824'
        },
        {
          url: '/_next/static/media/Home.c71f2281.jpg',
          revision: 'f88a269ffffcaa00d92caaddc95d58cc'
        },
        {
          url: '/_next/static/media/ae9ae6716d4f8bf8-s.woff2',
          revision: 'b0c49a041e15bdbca22833f1ed5cfb19'
        },
        {
          url: '/_next/static/media/b1db3e28af9ef94a-s.woff2',
          revision: '70afeea69c7f52ffccde29e1ea470838'
        },
        {
          url: '/_next/static/media/b967158bc7d7a9fb-s.woff2',
          revision: '08ccb2a3cfc83cf18d4a3ec64dd7c11b'
        },
        {
          url: '/_next/static/media/banner1.0575106a.png',
          revision: '62764906bbd52583a1dc22809fc82cfc'
        },
        {
          url: '/_next/static/media/banner1.7fd18c1f.webp',
          revision: 'b6b612250ae89e99cb450708e135981f'
        },
        {
          url: '/_next/static/media/bannerImg.0e5d1fb6.png',
          revision: '749be178a2be029c90daeaaaa5872f33'
        },
        {
          url: '/_next/static/media/c0f5ec5bbf5913b7-s.woff2',
          revision: '8ca5bc1cd1579933b73e51ec9354eec9'
        },
        {
          url: '/_next/static/media/contactImg.087841c6.png',
          revision: '5930a183f9be0c913e9d25b1318416f9'
        },
        {
          url: '/_next/static/media/d1d9458b69004127-s.woff2',
          revision: '9885d5da3e4dfffab0b4b1f4a259ca27'
        },
        {
          url: '/_next/static/media/esquadria.6c9259a8.png',
          revision: '1cc78818d1bf478026206283c80d71c6'
        },
        {
          url: '/_next/static/media/logo.04fdc150.png',
          revision: 'cbac6339da167a45b2deae57ed7b26cc'
        },
        {
          url: '/_next/static/media/logo.3ed6bb8f.png',
          revision: 'ce2d1caddb3adef63f43fa7c42414397'
        },
        {
          url: '/_next/static/media/projectOne.834e6ce8.jpg',
          revision: '5b7068b1f6bbafa1295d00ec1c474d59'
        },
        {
          url: '/_next/static/media/projectThree.ba02ccb9.jpg',
          revision: '5c7653aab5c015a87de94bb9c007ae08'
        },
        {
          url: '/_next/static/media/projectTwo.19fa9bbf.jpg',
          revision: '863ba734385dca4c0a29f07bf4e2535b'
        },
        {
          url: '/_next/static/media/quote.abc508f1.png',
          revision: 'f36a659cfddaafba0ae6ca617cb3a839'
        },
        {
          url: '/_next/static/media/testimonialOne.981fe999.png',
          revision: 'c8ecf8daa5a49503c12618f5781acb48'
        },
        {
          url: '/_next/static/media/testimonialTwo.0aea2d62.png',
          revision: '2fd26de92fcdc48f7eb014e1c27943e4'
        },
        {
          url: '/_next/static/media/up.c837fd91.png',
          revision: 'ee43e662dd38cdf35d74ff3917e3b8d6'
        },
        {
          url: '/_static/background.png',
          revision: '14e1a866a3601221357e101a271d6904'
        },
        {
          url: '/_static/clients/cal.svg',
          revision: '1c4262ea8faf49b4d931c29704824f7f'
        },
        {
          url: '/_static/clients/chatwoot.svg',
          revision: '3e623c126f55710c1618c68a3d5851c5'
        },
        {
          url: '/_static/clients/checkly.svg',
          revision: 'b5d666d9122d4e9a2fcd79db7fe0cc42'
        },
        {
          url: '/_static/clients/crowdin.svg',
          revision: 'acffc7b376e9a8b51ccfbb246ace6766'
        },
        {
          url: '/_static/clients/lugg.svg',
          revision: 'ca9a8f07731feb22ee6dc4d7d758b871'
        },
        {
          url: '/_static/clients/testimonial.svg',
          revision: '72ef4ba8da181334c87ed31bcc4d4458'
        },
        {
          url: '/_static/clients/tinybird.svg',
          revision: '9855753b3bc210860d47f51ed156b53c'
        },
        {
          url: '/_static/clients/vercel.svg',
          revision: 'f0606358d59f9695008f165b9ca6eb3e'
        },
        {
          url: '/_static/favicons/android-chrome-192x192.png',
          revision: '7e8629130ef30fc6eb92ebe54df8f48e'
        },
        {
          url: '/_static/favicons/android-chrome-512x512.png',
          revision: '2b44a5747e59530763e87bb55aa8cc1a'
        },
        {
          url: '/_static/favicons/apple-touch-icon.png',
          revision: '30fc03b0f59d68e51293eeb0eef1225c'
        },
        {
          url: '/_static/favicons/browserconfig.xml',
          revision: 'bb86fed7db56dfaefc64976040ed47b7'
        },
        {
          url: '/_static/favicons/favicon-16x16.png',
          revision: '2b3b3460511d49723f641818766508c8'
        },
        {
          url: '/_static/favicons/favicon-32x32.png',
          revision: 'af2991b01169d65ded8c125881406cf4'
        },
        {
          url: '/_static/favicons/mstile-150x150.png',
          revision: 'a278677da61e97a3c3666728a5a02a86'
        },
        {
          url: '/_static/favicons/safari-pinned-tab.svg',
          revision: '68b66586ccc010c68cad11955a01f98e'
        },
        {
          url: '/_static/features/analytics.png',
          revision: '432e2bcfbf5bf93a0ac6271fa0fa9c63'
        },
        {
          url: '/_static/grid.svg',
          revision: '23239ad8f9543d0bb72b19a745251e1a'
        },
        {
          url: '/_static/icons/macos.png',
          revision: '4214d3778e4119a82d4bbc9c23fa82ba'
        },
        {
          url: '/_static/illustrations/call-waiting.svg',
          revision: 'bc1d08db6006f643c596558a8ce2115e'
        },
        {
          url: '/_static/illustrations/cat-shot.svg',
          revision: '274555f432e32e47b5e2c72dee1a19a4'
        },
        {
          url: '/_static/illustrations/coffee-call.svg',
          revision: 'd585d24a9203415809d34ea7678de301'
        },
        {
          url: '/_static/illustrations/dog-call.svg',
          revision: '87790d255b7f81779db24755f99c6c6b'
        },
        {
          url: '/_static/illustrations/podcast.svg',
          revision: '722efa516b6c83badae8ead51760981d'
        },
        {
          url: '/_static/illustrations/selfie.svg',
          revision: '581cfd81bb8e1fd5dc9022e025d2ef67'
        },
        {
          url: '/_static/illustrations/shopping-call.svg',
          revision: '1171eb0d66551da8fe7e17948d42b999'
        },
        {
          url: '/_static/illustrations/video-park.svg',
          revision: '40263b44dfaa248334a5240305043a27'
        },
        {
          url: '/_static/logo-square.png',
          revision: 'e61f54656610a6e5a1218ba01cf8f122'
        },
        {
          url: '/_static/logo.png',
          revision: '2db4a1786fb7ddd58efd13cfb78d18fe'
        },
        {
          url: '/_static/logo.svg',
          revision: 'f9b7e1ce2d573d586f5bb847dd74ea29'
        },
        {
          url: '/_static/logotype.png',
          revision: '3f312d3f5310acf153109bd797c507ad'
        },
        {
          url: '/_static/logotype.svg',
          revision: '091e2a4d846edbe46d570afe9004522e'
        },
        {
          url: '/_static/password-protected.png',
          revision: '8c3a8e10bd70f4c2e5e9a47c1d0e4c6a'
        },
        {
          url: '/_static/tech stack.png',
          revision: 'cb66e2ace6a7c22d50f5f110bca1bd61'
        },
        {
          url: '/_static/thumbnail-old.png',
          revision: 'a7038ed7cf4c648d80008f1ba3fac0b0'
        },
        {
          url: '/_static/thumbnail.png',
          revision: '0b054e77c8415ea3902336e22dd311cd'
        },
        {
          url: '/_static/twitter-banner.png',
          revision: '9f0e5ec8879e63c552a69a343e576183'
        },
        { url: '/about.svg', revision: 'bbfd7be07bcc4f4b3ed572a0a4ca9fb7' },
        {
          url: '/android/android-launchericon-144-144.png',
          revision: '7620ed28364e8c6f7e416b6f4ef6f957'
        },
        {
          url: '/android/android-launchericon-192-192.png',
          revision: 'd5b8af62dfb41ba992cebb2dc6122ab3'
        },
        {
          url: '/android/android-launchericon-48-48.png',
          revision: '028acc4cfcc61ada24a58787069ef3a1'
        },
        {
          url: '/android/android-launchericon-512-512.png',
          revision: '4e9a1add91f00b9163bbc231c5ef6bfb'
        },
        {
          url: '/android/android-launchericon-72-72.png',
          revision: '2bf85ca1b281deeb2b5bf8c4dafdd378'
        },
        {
          url: '/android/android-launchericon-96-96.png',
          revision: '9c53e8d4309785fff4faabf52daca244'
        },
        { url: '/assets/01.jpg', revision: 'bcb04912d1bf84c8071e81a3c123513e' },
        { url: '/assets/1.jpg', revision: '7f4f3f112d54d0a956a00a89fb54acb1' },
        { url: '/assets/2.jpg', revision: '95341488a1ce4bcc65b63e771da3e68d' },
        { url: '/assets/3.jpg', revision: 'fda94bf6f8888500da468e5c7afdcf48' },
        { url: '/assets/4.jpg', revision: 'd2d9dd3a1e661fb6959495b321d2e6df' },
        {
          url: '/assets/Aroldo.jpg',
          revision: 'c8c52d11b69eab5144d0637bab33867c'
        },
        {
          url: '/assets/Cardapio.jpg',
          revision: '2053c29052de44cf124d67a48aa356da'
        },
        {
          url: '/assets/Evander.webp',
          revision: '2f6b5b74c76ddf39502e809883e7b48c'
        },
        {
          url: '/assets/Goyaz-hospitalar.png',
          revision: '4718c340cb3403fc8be6f69cbcb2aa54'
        },
        {
          url: '/assets/Grafico.jpg',
          revision: '7206bf1d85b5e0030a5cac8253e17120'
        },
        {
          url: '/assets/Premier.jpg',
          revision: '2dbd70107f73c1b10ebfc4fce068febf'
        },
        {
          url: '/assets/Site.jpg',
          revision: 'cb1aef9f847d018612d2271e6bda7767'
        },
        {
          url: '/assets/SiteBalaio.jpg',
          revision: '46ee1dd00dc2750991cdcc22b9414b7e'
        },
        {
          url: '/assets/arrowUp.svg',
          revision: 'fbd265545310ad30e808a4a6e91ce3cc'
        },
        {
          url: '/assets/assets/All Mail.svg',
          revision: '82189696539164bc0b0e271a3bcac397'
        },
        {
          url: '/assets/assets/Forum.svg',
          revision: '08515c4f1f810bf85488d8579635377e'
        },
        {
          url: '/assets/assets/draft.svg',
          revision: 'f1dd5f39002dacee23ab816b8620d087'
        },
        {
          url: '/assets/assets/home-solid.svg',
          revision: 'fa2c07daf87d1ec998638f37e1412080'
        },
        {
          url: '/assets/assets/important.svg',
          revision: '14dc4eba1d5528ca797549dcc65f455a'
        },
        {
          url: '/assets/assets/inbox.svg',
          revision: 'd33f27b466d7ff13c5c913145e006d1a'
        },
        {
          url: '/assets/assets/logo.svg',
          revision: 'b58de4de5cc6b58058d3e8c436c05d43'
        },
        {
          url: '/assets/assets/meeting.svg',
          revision: '322213911b9a45d0fbb3a9292d0fdbd8'
        },
        {
          url: '/assets/assets/power-off-solid.svg',
          revision: 'b231083fd6ed23326c876c1b268485f0'
        },
        {
          url: '/assets/assets/sceduled.svg',
          revision: '06c3e8869e5a1876fa08756316212e08'
        },
        {
          url: '/assets/assets/sent.svg',
          revision: '8b2990918c9d4b55e39dd7997fed730e'
        },
        {
          url: '/assets/assets/settings.svg',
          revision: '9f07a3df80b5eea9cfdcf9616e3d03d5'
        },
        {
          url: '/assets/assets/snooze.svg',
          revision: '759fdc88b02b00f59ce2d013c45ad366'
        },
        {
          url: '/assets/assets/social.svg',
          revision: '22e09537669a5f452810ab08286e50b6'
        },
        {
          url: '/assets/assets/spam.svg',
          revision: 'a35f82b90ed9fba09203009c0527c964'
        },
        {
          url: '/assets/assets/starred.svg',
          revision: 'f10a25eb07f2740619c9d181f900f2c6'
        },
        {
          url: '/assets/assets/trash.svg',
          revision: 'a3e4c2f7c32ce9a7ad6fa8d381b9d9cf'
        },
        {
          url: '/assets/astronauts.svg',
          revision: '5d3a49be2f9c7ef10b09b0e6fecaa0ad'
        },
        {
          url: '/assets/backend.png',
          revision: 'b6f97a0bb77c12636d32a57efacd1d10'
        },
        {
          url: '/assets/balaio.jpg',
          revision: '5c5b51b334bd77598e3f935ae19b97fd'
        },
        {
          url: '/assets/bedRoom.webp',
          revision: 'ab86ba6f9c39169bd984765d5de64066'
        },
        {
          url: '/assets/bg-slide2.jpg',
          revision: '4418ee82b96c1ed231d920c74f55a0ee'
        },
        { url: '/assets/bg.jpg', revision: '4248eb31ae5d81b394084a9f1158c871' },
        {
          url: '/assets/bnr3.jpg',
          revision: '50543b04adc4999efd9599e4499d7eee'
        },
        {
          url: '/assets/business.png',
          revision: '59185e35b5db05daff0e47122638d3a8'
        },
        {
          url: '/assets/carrent.png',
          revision: 'de7775e7e769abcd0478a0f32554addf'
        },
        {
          url: '/assets/close.svg',
          revision: '333c66a5dff1d7cc3968f6e7af4c5b2c'
        },
        {
          url: '/assets/company/meta.png',
          revision: 'c39c206e11ef45ddc19167e6c167e1d8'
        },
        {
          url: '/assets/company/shopify.png',
          revision: '7d0c465185ea1aa651737aedf2e889f9'
        },
        {
          url: '/assets/company/starbucks.png',
          revision: '739125c98702ba3575a572618abc82f6'
        },
        {
          url: '/assets/company/tesla.png',
          revision: '00f12a1675ac2554f83449c254abfc66'
        },
        {
          url: '/assets/contact.jpg',
          revision: '6b1bd920a359cffa90592255801df7c6'
        },
        {
          url: '/assets/creator.png',
          revision: '2fb53dc768e9f2b21e8eba0b31c50f1d'
        },
        {
          url: '/assets/github.png',
          revision: '69b7e397e348747e802b90e5eb0bfbd4'
        },
        {
          url: '/assets/headerImage.png',
          revision: '072da97435a9f7e9cb1ede3f6adf71a1'
        },
        {
          url: '/assets/herobg.png',
          revision: '823cad50e07bcea74f9dee734ce3819a'
        },
        {
          url: '/assets/home.png',
          revision: 'f33b895d34727d950ad797d0ade49a3c'
        },
        {
          url: '/assets/hoverImg.jpg',
          revision: '2dc83f174f7ed97fe2eb13a97850de35'
        },
        {
          url: '/assets/hoverImg2.jpg',
          revision: 'f2bc101b8d2dc0a6f415e6562d68aeb3'
        },
        {
          url: '/assets/hoverImg3.jpg',
          revision: '1b014d4910ff8a79292755883b4b6b96'
        },
        {
          url: '/assets/hoverImg4.jpg',
          revision: '05778387c534e77f698cbdf9c5366006'
        },
        {
          url: '/assets/hoverImg5.jpg',
          revision: 'cb911b3c7e21c750ecc5eab17cc2a7cf'
        },
        {
          url: '/assets/icons/Design.svg',
          revision: '6c048cc2b1bf5fc7a231e9244c3a617b'
        },
        {
          url: '/assets/icons/Dinamitecriativa.svg',
          revision: 'aad553aa4278b5c539304d9a3ef50160'
        },
        {
          url: '/assets/icons/Encarte.svg',
          revision: '3e68f48b542d53f1cbb89f0a9beef91d'
        },
        {
          url: '/assets/icons/IdentidadeVisual.svg',
          revision: '91a9c267ac6118a4ec5dd3548b7ac071'
        },
        {
          url: '/assets/icons/InterfaceWeb.svg',
          revision: 'a4d8bc8d729b6e7ee0e3d1275a7167f6'
        },
        {
          url: '/assets/icons/RedesSociais.svg',
          revision: 'bafd2c8a46d33bf9375fe4e59db224dc'
        },
        {
          url: '/assets/icons/file.svg',
          revision: '5bd43cb8b8867e4a118ea17495d4d80a'
        },
        {
          url: '/assets/icons/frame-linha.svg',
          revision: '5f4b5a283c06ba7e1931792803cf2672'
        },
        {
          url: '/assets/icons/frmae-linha-2.svg',
          revision: 'c757645b2f490bd18c0d45796ba0b33f'
        },
        {
          url: '/assets/icons/home.svg',
          revision: '55644be0d4a9382b8f1b58830cd536c6'
        },
        {
          url: '/assets/icons/icon-orca.svg',
          revision: 'c9d5e36de28438a623a1fb1169ab0c80'
        },
        {
          url: '/assets/icons/layers.svg',
          revision: 'ffd63d5c3b1092df4263d7d1d9e1b69c'
        },
        {
          url: '/assets/icons/layout.svg',
          revision: '8a437d552868c3bb65039b896fddc74a'
        },
        {
          url: '/assets/icons/user.svg',
          revision: 'ed52f187b2c4aad7fd02765c9cdc2f92'
        },
        {
          url: '/assets/icons/whatsapp.svg',
          revision: 'ade06a8014e765b50ffc146499aae1aa'
        },
        {
          url: '/assets/images/Cuca.jpg',
          revision: '8385f9c8f09478356cd5b3b514889efa'
        },
        {
          url: '/assets/images/Cuca1.jpg',
          revision: '4c2f07cec517f729901c38372d875a28'
        },
        {
          url: '/assets/images/Cuca2.jpg',
          revision: '0d31d26063360316ae2b1809b2b13118'
        },
        {
          url: '/assets/images/Cuca3.jpg',
          revision: 'af3cbb5f920e62b928ce3a12fba443f2'
        },
        {
          url: '/assets/images/FullPage.png',
          revision: 'c9fb8cf57a473c44bf69131206e0b60a'
        },
        {
          url: '/assets/images/Group 11.png',
          revision: '9bb122e704a34d5600e8c1b205c830fe'
        },
        {
          url: '/assets/images/MidComponentPhone.png',
          revision: 'a679a5e76bbbd83e115a7a4ab16983bf'
        },
        {
          url: '/assets/images/apple-store.svg',
          revision: 'b68ba63ee0ac9f126d156ed3105a14b5'
        },
        {
          url: '/assets/images/bannerImg.png',
          revision: '749be178a2be029c90daeaaaa5872f33'
        },
        {
          url: '/assets/images/bedRoom.png',
          revision: '6d67ae9837a51e42bab152c44eb250aa'
        },
        {
          url: '/assets/images/blueSofa.png',
          revision: '49f9242d379d012abff103f730887703'
        },
        {
          url: '/assets/images/chairPurple.png',
          revision: '3aa0a9b30971ca435c6a994b48ecb4bf'
        },
        {
          url: '/assets/images/contact/contactImg.png',
          revision: '5930a183f9be0c913e9d25b1318416f9'
        },
        {
          url: '/assets/images/flow-dark.png',
          revision: 'b14a61703e2b27bc504f0480259ce1cc'
        },
        {
          url: '/assets/images/flow-light.png',
          revision: '06378114c5ec8dbd4e0e46798c91fb5b'
        },
        {
          url: '/assets/images/google-play.svg',
          revision: 'f2108d27177a76887b4a5d83ca5ef457'
        },
        {
          url: '/assets/images/gray-chair.png',
          revision: '9eb21b0dee4f27624a28ffb2eace0acb'
        },
        {
          url: '/assets/images/headerImage.png',
          revision: '072da97435a9f7e9cb1ede3f6adf71a1'
        },
        {
          url: '/assets/images/light.svg',
          revision: '7f66efc769074a560b7ffb55841baf48'
        },
        {
          url: '/assets/images/logo.png',
          revision: 'cbac6339da167a45b2deae57ed7b26cc'
        },
        {
          url: '/assets/images/logo.svg',
          revision: '1ef421a4721952b58ea3e71ed847e190'
        },
        {
          url: '/assets/images/midPhone2.png',
          revision: '1f83d677b6b2893116c66cd4cf466b0b'
        },
        {
          url: '/assets/images/phoneFront.png',
          revision: '5eb06065421aed0985405c0f4e7277b1'
        },
        {
          url: '/assets/images/projects/projectOne.jpg',
          revision: '5b7068b1f6bbafa1295d00ec1c474d59'
        },
        {
          url: '/assets/images/projects/projectThree.jpeg',
          revision: 'd3cd597e3d135319b00306ac404cf0bf'
        },
        {
          url: '/assets/images/projects/projectThree.jpg',
          revision: '5c7653aab5c015a87de94bb9c007ae08'
        },
        {
          url: '/assets/images/projects/projectTwo.jpg',
          revision: '863ba734385dca4c0a29f07bf4e2535b'
        },
        {
          url: '/assets/images/resultado1.jpg',
          revision: 'cd1715d06b913ad7685ebafd6edcd0b6'
        },
        {
          url: '/assets/images/resultado10.jpg',
          revision: '3f80e29cb8a8c9e29377639a49b8c88a'
        },
        {
          url: '/assets/images/resultado2.jpg',
          revision: '0b34d8c7c59dd3b8b3af980668c0fc08'
        },
        {
          url: '/assets/images/resultado3.jpg',
          revision: 'c5337a103d0cde680dc3644979eaa13c'
        },
        {
          url: '/assets/images/resultado4.jpg',
          revision: '1d84a08574041dd0f8a5c98eacdf6ed1'
        },
        {
          url: '/assets/images/resultado5.jpg',
          revision: '17da5c7eaaa4948b447c9d160ea4ab83'
        },
        {
          url: '/assets/images/resultado6.jpg',
          revision: '13b2132c7f1288926698a3b60b8b6609'
        },
        {
          url: '/assets/images/resultado7.jpg',
          revision: 'bcddf9256ece01e585ae5fac4df76a0b'
        },
        {
          url: '/assets/images/resultado8.jpg',
          revision: 'edd29a7c35bd9884799f162b60db55b2'
        },
        {
          url: '/assets/images/resultado9.jpg',
          revision: '731fb5c2cfdab62ee1666f552beb4ac6'
        },
        {
          url: '/assets/images/roseChair.png',
          revision: '6ed4b5ced2d9c19d1ef4af2063233601'
        },
        {
          url: '/assets/images/sofa2.jpg',
          revision: '45c3abc4c7de9acd8a62ab463f0476f5'
        },
        {
          url: '/assets/images/sofa33.png',
          revision: '53fbeb6fedf9d537b76945bf22f807f9'
        },
        {
          url: '/assets/images/star.svg',
          revision: 'ff512658527ba63f097e6776c39319e4'
        },
        {
          url: '/assets/images/starWhite.svg',
          revision: '736b2cf1b49c662fb7d7a64b20e45b4d'
        },
        {
          url: '/assets/images/testmonial/quote.png',
          revision: 'f36a659cfddaafba0ae6ca617cb3a839'
        },
        {
          url: '/assets/images/testmonial/testimonialOne.png',
          revision: 'c8ecf8daa5a49503c12618f5781acb48'
        },
        {
          url: '/assets/images/testmonial/testimonialTwo.png',
          revision: '2fd26de92fcdc48f7eb014e1c27943e4'
        },
        {
          url: '/assets/images/wrapperBackground.svg',
          revision: '13054e80cb2a784b9b2887b30d80857c'
        },
        {
          url: '/assets/images/wrapperDark.svg',
          revision: '75dd76123a6bfcd877ef1bbcfbaa0ae1'
        },
        {
          url: '/assets/index.js',
          revision: 'e15722f6e358362d4e91771e1a2400d5'
        },
        {
          url: '/assets/jobit.png',
          revision: '261dcd8d434a22a8ce067dcfe77160b8'
        },
        {
          url: '/assets/loadmore.png',
          revision: '11db9d7ca9e82908ae4e6c9935d878f0'
        },
        {
          url: '/assets/logo.png',
          revision: 'ce2d1caddb3adef63f43fa7c42414397'
        },
        {
          url: '/assets/logo.svg',
          revision: '6ed081346b52940c41917baf7c5a04e0'
        },
        {
          url: '/assets/menu.svg',
          revision: 'd4926d3f2dc6c41bdcb19909d4ae93c8'
        },
        {
          url: '/assets/milestone-background.png',
          revision: '78f21deb0578ba2ce3065e98701a922e'
        },
        {
          url: '/assets/milestone1.png',
          revision: '3c48b58f4c71c24c92881c7da1aa4cd9'
        },
        {
          url: '/assets/milestone2.png',
          revision: '4ed3647bfad2b7ade9691c486815e704'
        },
        {
          url: '/assets/milestone3.png',
          revision: '6e09e0f4ba72efe259fee4ce39519081'
        },
        {
          url: '/assets/mobile.png',
          revision: '9537758db1d756949a924fcd4404895f'
        },
        {
          url: '/assets/ogimage.png',
          revision: 'ca9780c10e96290fd93c048b3c8078df'
        },
        {
          url: '/assets/placeholder.png',
          revision: '21a482078bc62c23ae79972e2aeb0c1b'
        },
        {
          url: '/assets/play.png',
          revision: '0a8c81f501bd318127a0838923973180'
        },
        {
          url: '/assets/portfolio1.png',
          revision: 'abc7f340ee821c09ffc7d0900d4b50d9'
        },
        {
          url: '/assets/portfolio2.png',
          revision: '02abbf6e97e63dc26ff0e87026517d64'
        },
        {
          url: '/assets/pricing1.png',
          revision: '1ae783a9f827729dfd91e6463c9ad5da'
        },
        {
          url: '/assets/pricing2.png',
          revision: '45cdfa0879d9e13f49929d6c6f683a4f'
        },
        {
          url: '/assets/service1.png',
          revision: '836552ca482e4d581ec1761e1b9e00bc'
        },
        {
          url: '/assets/service2.png',
          revision: 'a832a86097302fbc4928944d4d6d448c'
        },
        {
          url: '/assets/service3.png',
          revision: '44a5957c1fcb7a863e6fd7e8dc26c5eb'
        },
        {
          url: '/assets/skills1.png',
          revision: '8ad1fb62f4bcc794e96ce9d0c3f3b60a'
        },
        {
          url: '/assets/skills2.png',
          revision: '78d4397139b094e79aace3a2a95a4189'
        },
        {
          url: '/assets/slide1.png',
          revision: 'f1144ff603c37ee464c68842f67218a7'
        },
        {
          url: '/assets/slide2.png',
          revision: '996572d71e5fb0aff080b378aabc3481'
        },
        {
          url: '/assets/slide3.png',
          revision: '83b0cc95e5c612be0c9bc436034a6bc0'
        },
        {
          url: '/assets/testimonial1.png',
          revision: 'ea91569851b7d5e9270f1d11309d6ddc'
        },
        {
          url: '/assets/testimonial2.png',
          revision: 'd32cf3845072ec45958694320c33aae2'
        },
        {
          url: '/assets/top.jpg',
          revision: 'c38b2f040ecfd92c00bbc814d0e98f61'
        },
        {
          url: '/assets/tripguide.png',
          revision: '5eb0d3c9dd99525d0aa2b584dd573133'
        },
        {
          url: '/assets/vercel.svg',
          revision: '26bf2d0adaf1028a4d4c6ee77005e819'
        },
        {
          url: '/assets/video1.png',
          revision: '4ae9624cad9343e586f3f6e0f1ae89b4'
        },
        {
          url: '/assets/video2.png',
          revision: '42a257815aec048059475fdff0218455'
        },
        {
          url: '/assets/videoPlay.png',
          revision: '32a20d683b20b7fbbddad9da06a23150'
        },
        {
          url: '/assets/web.png',
          revision: 'f59df0f5b55cde9fc8e02c3dfe1e3540'
        },
        { url: '/banner1.png', revision: '62764906bbd52583a1dc22809fc82cfc' },
        { url: '/banner1.webp', revision: 'b6b612250ae89e99cb450708e135981f' },
        {
          url: '/beams-home@95.jpg',
          revision: '2c940f940a9cd30845d1ade5694120e3'
        },
        { url: '/bg-sobre.svg', revision: '1ca74369c94138d6f19d378fda3f6054' },
        { url: '/bg1.svg', revision: 'baf81da5c454645ef01ee920f58aec1a' },
        { url: '/bgslide1.svg', revision: 'eaa0297a62857cbd2d7e4733e26c779e' },
        {
          url: '/construtor.svg',
          revision: 'b804e8bdb0ea773fb34c9f660e9b8f8d'
        },
        { url: '/contact.svg', revision: '8be8c5b486cc43e5a54aa181bf4ebe7d' },
        { url: '/cover.jpg', revision: '1aa364f185b711794ab420940cb89c4a' },
        { url: '/cv.png', revision: '9f27dbcad10f42dfc88bc74594775dc1' },
        {
          url: '/education/certificate/bradesco-2.webp',
          revision: 'bf6c52a5770be152bc51f185a226e631'
        },
        {
          url: '/education/certificate/bradesco-3.webp',
          revision: '842b8b2510e99dee06e9ab4a5b4a7583'
        },
        {
          url: '/education/certificate/bradesco.webp',
          revision: '8036bee12845fcbb8d93db3d80ab5655'
        },
        {
          url: '/education/certificate/discover-conectar.png',
          revision: '19fabb1ef8d6319ebcaedff815ca9695'
        },
        {
          url: '/education/certificate/discover-especializar.png',
          revision: '5ce9ba9954354f3563370b73df3cb5a1'
        },
        {
          url: '/education/certificate/discover-fundamentar.png',
          revision: 'fa00731950aff58d0efaa36456951d35'
        },
        {
          url: '/education/education.svg',
          revision: '8993959b01ccaafbb4abcd01a4138f78'
        },
        {
          url: '/education/logos/bradesco.svg',
          revision: '7cf39433ffc3d1f686beaf922d88b5a1'
        },
        {
          url: '/education/logos/rocketseat.svg',
          revision: 'e980b9a580b14979d89ed0c79ae25bc0'
        },
        {
          url: '/education/logos/udemy.svg',
          revision: '3aca9c9fbfe1a6657cfbed9e139bfcd0'
        },
        {
          url: '/education/logos/unopar.png',
          revision: 'ee572d8bf63e7c0e492b80d9dbfe86f5'
        },
        {
          url: '/education/logos/unopar.svg',
          revision: '5d17725e33b4c1ab55e7ba347e3e402d'
        },
        { url: '/esquadria.png', revision: '1cc78818d1bf478026206283c80d71c6' },
        { url: '/esquadria.svg', revision: 'ab041c3d7253ab755d27b7f1865b779d' },
        {
          url: '/favicon/android-chrome-192x192.png',
          revision: '9a0794945fcde0b29ba14e774a086733'
        },
        {
          url: '/favicon/android-chrome-512x512.png',
          revision: '51b624da5afe8a37b11750cd22431a50'
        },
        {
          url: '/favicon/apple-touch-icon.png',
          revision: 'd615a83dc0aeb71fdd0bf3c26a8f356e'
        },
        {
          url: '/favicon/browserconfig.xml',
          revision: '973af212a3deb68027f2d4241f47104d'
        },
        {
          url: '/favicon/favicon-16x16.png',
          revision: '669923c61d7470053747c4bbe1e1e474'
        },
        {
          url: '/favicon/favicon-32x32.png',
          revision: '4ca1ce1a372d174c879a8a528cb46ad8'
        },
        {
          url: '/favicon/favicon.ico',
          revision: 'd2d8cfcd0336e660c1125023459519a8'
        },
        {
          url: '/favicon/mstile-150x150.png',
          revision: 'db624e20026bfcd435ea5ca8ce6289c2'
        },
        {
          url: '/favicon/safari-pinned-tab.svg',
          revision: '18978d9005b4b5b3b8d95edc2095736a'
        },
        {
          url: '/favicon/site.webmanifest',
          revision: '081d6264b9118507486010173ad35208'
        },
        { url: '/feed.xml', revision: '16e0940cbedd954890f52259be420199' },
        { url: '/home.png', revision: 'b99cc2755776163ea69103a5dbc55fd9' },
        { url: '/icon.svg', revision: '7103292565a7ff1f7dff75a69736cff0' },
        {
          url: '/individuo-feliz.webp',
          revision: '737ebbecef90d1a5bd17bc6d2323a217'
        },
        { url: '/ios/100.png', revision: '3291d47c388a846d3e66c6f9ae469892' },
        { url: '/ios/1024.png', revision: 'c9c369d49f7d48dafe3dea7d26d1bc82' },
        { url: '/ios/114.png', revision: '1226a921c2e142b88e155cbb9d4dfd39' },
        { url: '/ios/120.png', revision: '88e69968fd9f96fb8ca22faca7ac9862' },
        { url: '/ios/128.png', revision: 'a94b4d62e818d8f5321246b6432423b2' },
        { url: '/ios/144.png', revision: '7620ed28364e8c6f7e416b6f4ef6f957' },
        { url: '/ios/152.png', revision: '4c56fd1b06746fe391ca979b28902e89' },
        { url: '/ios/16.png', revision: 'c26cbd9317e830bafc670fed5d501c57' },
        { url: '/ios/167.png', revision: 'c08bdf158e975b8d0dbe518302aac395' },
        { url: '/ios/180.png', revision: 'a94187656fac769c80ad175a2512f6ca' },
        { url: '/ios/192.png', revision: 'd5b8af62dfb41ba992cebb2dc6122ab3' },
        { url: '/ios/20.png', revision: 'fcd8347beb3fbee4944fe3546d6586b2' },
        { url: '/ios/256.png', revision: '43967e7a8c737cc07d3257d10a46c9e1' },
        { url: '/ios/29.png', revision: '6ddc3e7914da17bd7b0fdf03ca7d4ffc' },
        { url: '/ios/32.png', revision: '6169e2ceac0091d87f33a8e1008ef0d8' },
        { url: '/ios/40.png', revision: 'a96dd42752c17578d80271d44fce172a' },
        { url: '/ios/50.png', revision: '7f4a900ea22860234fe87119087e322e' },
        { url: '/ios/512.png', revision: '4e9a1add91f00b9163bbc231c5ef6bfb' },
        { url: '/ios/57.png', revision: '79f70912d53db49d5b0ed48064aa1931' },
        { url: '/ios/58.png', revision: '087eb13b1b8f3961737a3eb1fa867f17' },
        { url: '/ios/60.png', revision: '3d76d93a5b7a18dffe32bfbd4475fa09' },
        { url: '/ios/64.png', revision: '70be9459ea1309020f72657362d559b9' },
        { url: '/ios/72.png', revision: '2bf85ca1b281deeb2b5bf8c4dafdd378' },
        { url: '/ios/76.png', revision: '58fda4fa8d190e574bb41afcfab17bc8' },
        { url: '/ios/80.png', revision: '8dc6416639e6d803293a1e7b5193114c' },
        { url: '/ios/87.png', revision: '239504201f0fc5ca925cfd0a910ac9e1' },
        { url: '/logo.png', revision: 'ce2d1caddb3adef63f43fa7c42414397' },
        { url: '/manifest.json', revision: 'ce217f73c32ac7835aab39ede2187d7d' },
        { url: '/next copy.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/ogimage.png', revision: 'ca9780c10e96290fd93c048b3c8078df' },
        {
          url: '/pdf/Evander-CV.pdf',
          revision: 'a5d6cbd21f4c2434c428892e8f9685b9'
        },
        {
          url: '/projects/dsmeta/dsmeta-footer.png',
          revision: 'f9d7abc4875017756edfd29fe5829d53'
        },
        {
          url: '/projects/dsmeta/dsmeta-icon.svg',
          revision: '510b90dc8b4f18a58f93dc862809a6ef'
        },
        {
          url: '/projects/dsmeta/dsmeta.png',
          revision: '26e58c8d2379601c5b19425a04941b7b'
        },
        {
          url: '/projects/dsmeta/icon.png',
          revision: 'ce6e72ddcafbe1b7c47864bd41402fa7'
        },
        {
          url: '/projects/github-blog/github-blog-detail-2.png',
          revision: 'bb4e8dfecc0482f340e78505a2f33d28'
        },
        {
          url: '/projects/github-blog/github-blog-detail.png',
          revision: '762e1b697bbfc859b937d9dbd54cf415'
        },
        {
          url: '/projects/github-blog/github-blog-home-2.png',
          revision: '9cc1967f3f9a12419647a2ae5798bedd'
        },
        {
          url: '/projects/github-blog/github-blog-home.png',
          revision: '4ee672f45bb220672ca4ba27fc48181c'
        },
        {
          url: '/projects/github-blog/github-blog.gif',
          revision: 'afcd2ea3aefb973d1114e984d6f472f8'
        },
        {
          url: '/projects/github-blog/logo.svg',
          revision: '8f5ebe46302373102f3bf3218424a0e1'
        },
        {
          url: '/projects/playstation/icon.svg',
          revision: '1ec44502554ef2e4d1b712b39d28df11'
        },
        {
          url: '/projects/playstation/playstation-about.png',
          revision: '84adb0e4b729274d866ae8d9c5ef37d4'
        },
        {
          url: '/projects/playstation/playstation-buy.png',
          revision: '26b2746076f7910043c6b018ef36c3c2'
        },
        {
          url: '/projects/playstation/playstation-contact.png',
          revision: 'f64bf14c1aa6072bc91bf292e8c8de99'
        },
        {
          url: '/projects/playstation/playstation-home-2.png',
          revision: 'e04e113b1e7aa6afcbc1189a85c9dad9'
        },
        {
          url: '/projects/playstation/playstation-home.png',
          revision: '2020bca22fd0d8dafc762276727e29e6'
        },
        {
          url: '/projects/playstation/playstation-product-2.png',
          revision: '0b8f33ec01ef5ec6cbe395934695cb39'
        },
        {
          url: '/projects/playstation/playstation-product.png',
          revision: '207b61fcfa2175dc8c4869796f23bb48'
        },
        {
          url: '/projects/playstation/playstation.webp',
          revision: 'f8ee2c6d596cfaae5fa1228320bd6c55'
        },
        {
          url: '/projects/podcastr/icon.svg',
          revision: 'ce6b5534339d166bb10477ca2b22b256'
        },
        {
          url: '/projects/podcastr/podcastr-detail.png',
          revision: 'c24635b47ee8e5884be79f59dea27651'
        },
        {
          url: '/projects/podcastr/podcastr-home-2.png',
          revision: '44e2780a80717ff0a99fe6433b198b26'
        },
        {
          url: '/projects/podcastr/podcastr-home.png',
          revision: '3f9388095fd2fb2cfa29922bcaae9d39'
        },
        {
          url: '/projects/pokedex/logo.svg',
          revision: '74fd6984fbb8bed478f53040644cb78e'
        },
        {
          url: '/projects/pokedex/pokedex-detail-about.png',
          revision: 'a11636c0dcf21e7d7aa0b2a0d33cdac2'
        },
        {
          url: '/projects/pokedex/pokedex-detail-stats.png',
          revision: '7f6603118b6198566c1ce586e108f900'
        },
        {
          url: '/projects/pokedex/pokedex-detail.png',
          revision: '868f418f8baa62e0b652e1fd53d250a1'
        },
        {
          url: '/projects/pokedex/pokedex-home.png',
          revision: '0673e4442874a9028e4af19e9e905145'
        },
        {
          url: '/projects/pokedex/pokedex-index.png',
          revision: 'e8dd0fe591217a168e4a501f6b44c8fe'
        },
        {
          url: '/projects/pomodoro/pomodoro-history-2.png',
          revision: '87ef4d9510431c2edf64a19c7ad859d5'
        },
        {
          url: '/projects/pomodoro/pomodoro-history.png',
          revision: '848070cb1585e6f8256b488a73047446'
        },
        {
          url: '/projects/pomodoro/pomodoro-home-action.png',
          revision: 'c5e8f8679522344cb74e05ee0ec343e2'
        },
        {
          url: '/projects/pomodoro/pomodoro-home.png',
          revision: 'f7d5e345323e9fba4054d8b986840f11'
        },
        {
          url: '/projects/pomodoro/timer.png',
          revision: '72acb03e7373f9869ae37969cd347bb0'
        },
        {
          url: '/projects/portfolio/about.png',
          revision: 'cd85a279322dde15933f4bcb5e30184a'
        },
        {
          url: '/projects/portfolio/contact.png',
          revision: '2bb312b23622b6f51a503dfcc1161f48'
        },
        {
          url: '/projects/portfolio/detail-1.png',
          revision: 'af77da8074dd402a6620032e403a1f16'
        },
        {
          url: '/projects/portfolio/detail-2.png',
          revision: '0f1ba72f36a385249443df730c98cc0e'
        },
        {
          url: '/projects/portfolio/detail-3.png',
          revision: '8ec5e03d1511ce401f21266493b73e0a'
        },
        {
          url: '/projects/portfolio/detail-4.png',
          revision: '1207e93a9b83136df209aa36318f0af1'
        },
        {
          url: '/projects/portfolio/projects.png',
          revision: '5f9f318a094924f2788932b9b99f3f67'
        },
        {
          url: '/projects/portfolio/skills.png',
          revision: 'ef8cb7949e1c35aa448367cd69e6f622'
        },
        {
          url: '/projects/portfolio/thumb.png',
          revision: '31a75b7d6919b5903c88208364d7ce45'
        },
        {
          url: '/projects/turtlemovie/detail-elenco.png',
          revision: '838a4d7b3daffe64128678128034c8dd'
        },
        {
          url: '/projects/turtlemovie/detail-home.png',
          revision: '79fd6add7fbddb8916d7fefd2344f1d8'
        },
        {
          url: '/projects/turtlemovie/detail-people.png',
          revision: '92d6d0afa08b45d82644afc962673ad6'
        },
        {
          url: '/projects/turtlemovie/detail-video.png',
          revision: 'a6d5a5ef9d3c855aa66186704329909e'
        },
        {
          url: '/projects/turtlemovie/icon.png',
          revision: '574a19a4246fd5f251bd4afc94fd093f'
        },
        {
          url: '/projects/turtlemovie/movie-popular.png',
          revision: 'bda97e1fe7c9033321bfa580e0beec37'
        },
        {
          url: '/projects/turtlemovie/peoples.png',
          revision: 'a85a8bfe4ef63d2e06bd105417f72850'
        },
        {
          url: '/projects/turtlemovie/series-popular.png',
          revision: 'b89a8e222ad2bf35cc70322345768f5a'
        },
        {
          url: '/projects/turtlemovie/turtle-movie.png',
          revision: 'e19c4a4db4d64361132a0c2a9ceecb87'
        },
        {
          url: '/projects/turtlemovie/turtle.png',
          revision: '080754cb9ab00bc11a8211a63ae6de30'
        },
        {
          url: '/projects/whatsapp/chat-emoji.png',
          revision: 'cbff0e377a0645eb81c501065107db4d'
        },
        {
          url: '/projects/whatsapp/chat.png',
          revision: 'bcf18a4d52a55ef940a26773807277b1'
        },
        {
          url: '/projects/whatsapp/home-dark.png',
          revision: '0ba48b5962ece44a2ef0c73c0a6f68df'
        },
        {
          url: '/projects/whatsapp/home-light.png',
          revision: '469db8aeef791128c418bac4e2bf01e7'
        },
        {
          url: '/projects/whatsapp/icon.svg',
          revision: '08ed13d7218ba61e4fb65b4a10f1d17e'
        },
        {
          url: '/projects/whatsapp/login.png',
          revision: 'a797bb5e227d473081e4834b2e4fec31'
        },
        {
          url: '/projects/whatsapp/new-chat.png',
          revision: '581c69987dda18c76e8de847216fe5a5'
        },
        { url: '/robots.txt', revision: 'be89723a86ffb628df65dec53ee6dbc6' },
        { url: '/sitemap-0.xml', revision: 'fd35af95316e7eb6a8337ab83689d317' },
        { url: '/sitemap.xml', revision: '6c7c87d479e568a8ef3cf7300141247e' },
        {
          url: '/skills/code.svg',
          revision: '50dc96923cdd45df7951a1490084510a'
        },
        {
          url: '/skills/css.svg',
          revision: '09e4ec27756a18c936f92f4e2957e822'
        },
        {
          url: '/skills/database.svg',
          revision: 'cf768273c16185d6fa9b1faf4e51a2cd'
        },
        {
          url: '/skills/express.svg',
          revision: 'c6bab64b183f96aa47077fd3db37afd0'
        },
        {
          url: '/skills/firebase.svg',
          revision: '7f8d489c1887554fcf61932505d46393'
        },
        {
          url: '/skills/html.svg',
          revision: 'a2d427be56a5448f2788d0e0f68aba0c'
        },
        {
          url: '/skills/javascript.svg',
          revision: '891a71b9a98f1d58491e1b06c4d356a2'
        },
        {
          url: '/skills/material-ui.svg',
          revision: '82291019f34ab54a677c456a84127cc3'
        },
        {
          url: '/skills/mongodb.svg',
          revision: 'c2a864c96dbfc449ec45dd7ac4438628'
        },
        {
          url: '/skills/next-js.svg',
          revision: '0f9219f0fca0f11c197d4f75fbcdbc96'
        },
        {
          url: '/skills/nodejs.svg',
          revision: 'b337a2fb0b1289e6757e632dc766ff6b'
        },
        {
          url: '/skills/react-hook-form.svg',
          revision: '7e06ec84951850be86fb21eabc71aef2'
        },
        {
          url: '/skills/react-router.svg',
          revision: 'fc8b1a37bff8fb5acb26dc0993e50264'
        },
        {
          url: '/skills/react.svg',
          revision: 'c3fbd71b12b726e00eec2b59f3c76786'
        },
        {
          url: '/skills/sass.svg',
          revision: 'b446ca5a397c1ef6fb94cd02c4e94335'
        },
        {
          url: '/skills/spring.svg',
          revision: '449e8efbf3e642eecc4d8e0b1fe7cb1d'
        },
        {
          url: '/skills/stitches.svg',
          revision: '61cc8dfad8acd0fe081e72c341858bde'
        },
        {
          url: '/skills/styled-components.svg',
          revision: 'b3085d16e3930103750d2b2307f744da'
        },
        {
          url: '/skills/tailwindcss.svg',
          revision: 'ae5526275166b489a45053be5115eede'
        },
        {
          url: '/skills/typescript.svg',
          revision: '78bec38028d650c1a7fa47864237d5df'
        },
        { url: '/up.png', revision: 'ee43e662dd38cdf35d74ff3917e3b8d6' },
        {
          url: '/vectors/404.svg',
          revision: '8ff955e15f4932c6a45ff6bf4c9277f4'
        },
        {
          url: '/vectors/circle-spin.svg',
          revision: 'c8d10fe19a9bd6e53405594e7d8493db'
        },
        {
          url: '/vectors/code.svg',
          revision: '436d6342eed266996fb43de1e10bbbf9'
        },
        {
          url: '/vectors/dino.svg',
          revision: '8f04de1b3d8ea7ccbcbb057e7ba65eab'
        },
        {
          url: '/vectors/html.svg',
          revision: 'cbf1e9d8493d1efe773cb8fd407ae688'
        },
        {
          url: '/vectors/js.svg',
          revision: '5f3b3d5d89cc033d79e162ab7758773d'
        },
        {
          url: '/vectors/laptop.svg',
          revision: '326b2ca3e04f900df7120cf91a5296fc'
        },
        {
          url: '/vectors/pc.svg',
          revision: 'ba1075e722da21bbddd4b8ded695c4ea'
        },
        {
          url: '/vectors/triangle.svg',
          revision: 'fbb44bee72c2c7b7e3f929c103fbac05'
        },
        {
          url: '/vectors/youtube.svg',
          revision: 'e8c2cdd469d0c19f90647887df634b8e'
        },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
        {
          url: '/works/logo-ultronia.webp',
          revision: 'd82516ec382baee8f255844e220ed315'
        },
        {
          url: '/works/spedisco-logo.png',
          revision: '2d1ad84debe87dd5bb63d0fcab1b1c96'
        },
        { url: '/works/work.svg', revision: '50d941d95ebb5084d00f8a8796a3bb77' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    );
});
