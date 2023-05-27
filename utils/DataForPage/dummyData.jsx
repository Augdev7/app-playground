import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

import phone1 from '/public/assets/images/bedRoom.png';
import chair from '/public/assets/images/chairPurple.png';
import sofa3 from '/public/assets/images/gray-chair.png';
import sofa2 from '/public/assets/images/roseChair.png';
import blueSofa from '/public/assets/Premier.jpg';

export const navbarData = [
    {
        id: '1',
        name: 'News',
        link: 'news',
    },
    {
        id: '2',
        name: 'Company',
        link: 'company',
    },
    {
        id: '3',
        name: 'Features',
        link: 'features',
    },
    {
        id: '4',
        name: 'Room',
        link: 'room',
    },
    {
        id: '5',
        name: 'Demo',
        link: 'demo',
    },
    {
        id: '6',
        name: 'Login',
        link: '/',
    },
];
export const FooterData1 = [
    {
        id: '1',
        text: 'Modern',
    },
    {
        id: '2',
        text: 'Decorations',
    },
    {
        id: '3',
        text: 'Events',
    },
    {
        id: '4',
        text: 'Careere',
    },
    {
        id: '5',
        text: 'Forum',
    },
    {
        id: '6',
        text: 'Contacts',
    },
];
export const FooterData2 = [
    {
        id: '1',
        text: 'Privacy policy',
        path: 'Resources',
    },
    {
        id: '2',
        text: 'Terms of use',
    },
    {
        id: '3',
        text: 'Cookies',
    },
];
export const FooterData3 = [
    {
        id: '1',
        text: 'Support',
    },
    {
        id: '2',
        text: 'Customer support',
    },
    {
        id: '3',
        text: 'Media',
    },
    {
        id: '4',
        text: 'Marketing',
    },
];

export const sliderData = [
    {
        id: '1',
        title: 'Room 1',
        text: 'With AxeL, your room will shine bright again. Let furniture find there place in new beautifule warm room.',
        type: 'Room1',
        img: sofa2,
    },
    {
        id: '2',
        title: 'Room 2',
        text: 'AxeL is your best firend for interior design, download the app and feel free to explore beautifule modern and premium designs.',
        type: 'Room2',
        img: chair,
    },
    {
        id: '3',
        title: 'Room 3',
        text: 'AxeL is your best firend for interior design, download the app and feel free to explore beautifule modern and premium designs.',
        type: 'Room3',
        img: sofa3,
    },
];
export const tabsData = [
    {
        id: '0',
        label: 'WEBSITE',
        value: 'CRIAÇÃO DE SITES',
        icon: Square3Stack3DIcon,
        desc: `Mais de 50% dos acessos à internet são feitos via smartphone. Você está preparado? A nossa equipe está, confira mais sobre criação de sites e surpreenda-se.`,
        img: phone1,
        linkText: 'Saiba mais',
    },
    {
        id: '1',
        label: 'LivingRoom',
        value: 'livingroom',
        icon: UserCircleIcon,
        desc: 'AxeL is your best firend for interior design, download the app and feel free to explore beautifule modern and premium designs.',
        img: blueSofa,
        linkText: 'See more',
    },

    {
        id: '2',
        label: 'Kitchen',
        value: 'kitchen',
        icon: Cog6ToothIcon,
        desc: `AxeL is your best firend for interior design, download the app and feel free to explore beautifule modern and premium designs.`,
        img: phone1,
        linkText: 'See more',
    },

    {
        id: '3',
        label: 'Office',
        value: 'office',
        desc: ` AxeL is your best firend for interior design, download the app and feel free to explore beautifule modern and premium designs.`,
        img: phone1,
        linkText: 'See more',
    },

    {
        id: '4',
        label: 'KidsRoom',
        value: 'kidsroom',
        desc: `AxeL is your best firend for interior design, download the app and feel free to explore beautifule modern and premium designs.`,
        img: phone1,
        linkText: 'See more',
    },
];
export const cardData = [
    {
        id: '0',
        title: 'Ready to get started?',
        text: 'Explore AxeL Pricing and chose the plan that suites you the best, or send as an inquery about invidual plan. You can also request a demo app to test in a secure enviroment.',
    },
    {
        id: '1',
        title: 'Room',
        text: 'Customize your own Bedroom, LivingRoom, Kitchen, Office and much more. Anytime, in a matter of seconds.',
    },
    {
        id: '2',
        title: 'Connect to AxeL',
        text: 'Setup your room on AxeL in a few seconds. All you need is few images and creative ideas and your business is ready.',
    },
];

export const room = [
    {
        id: '1',
        name: 'Bedroom ideas for you and your partner. ',
        img: blueSofa,
    },
    {
        id: '2',
        name: 'No room is quite as warm as the living room.',
        img: blueSofa,
    },
    {
        id: '3',
        name: 'No room is quite as multifunctional as the kitchen.',
        img: blueSofa,
    },
];
