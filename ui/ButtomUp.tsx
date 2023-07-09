'use client';

import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

export default function ButtomUp() {
  const router = useRouter();
  return (
    <>
      <div className='xs:bottom-10 relative isolate flex h-56 w-full items-center justify-center overflow-hidden bg-[#4c087b] py-16 sm:py-24 lg:py-4'>
        <button
          id='al'
          aria-label='Name'
          type='button'
          onClick={() => router.push('#about')}
        >
          <div className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='mb-1 h-3 w-3 rounded-full bg-secondary'
            />
          </div>
        </button>
      </div>
    </>
  );
}
