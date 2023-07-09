/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';

import { VercelLogo } from './VercelLogo';
import { BsWhatsapp } from 'react-icons/bs';

export default function Byline() {
    return (
        <div className="flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3">
            <div className="flex items-center gap-x-1.5">
                <div className="w-96 text-gray-100 hover:text-gray-50">
                <h4>
              <BsWhatsapp size={22} color='#00fffb' /> WhatsApp{' '}
            </h4>
            <Link
              href='https://api.whatsapp.com/send?phone=5561986692775'
              target='_blank'
            >
              <span>+55 61 98669-2775</span>
            </Link>
                    </div>
            </div>

            <div className="text-sm text-gray-400">
                <Link
                    className="text-orange-500 hover:text-gray-400"
                    href="https://upexpert.com.br"
                    target="_blank"
                    rel="noreferrer"
                >
                    © {new Date().getFullYear()} Agência full service{' '}
                </Link>
                {'  '}
                <Link
                    className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
                    href="https://upexpert.com.br/design"
                    target="_blank"
                    rel="noreferrer"
                >
                   <span className='text-amber-300'>UP.EXPERT</span>
                </Link>
            </div>
        </div>
    );
}