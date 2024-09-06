import Image from 'next/image'
import React from 'react'

const Frameworks = () => {
  return (
    <main>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl py-2 text-center'>
        Frameworks
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-5 py-2'>
        <div className='border flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-3 max-w-[220px] bg-gray-800 rounded-xl cursor-pointer shadow-2xl shadow-gray-600'>
          <Image
            src='/assets/next.svg'
            alt='Next.js Icon'
            width={40}
            height={40}
          />
          <span className='font-bold text-xl sm:text-2xl text-white'>Next.js</span>
        </div>
        <div className='border flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-3 max-w-[220px] bg-gray-800 rounded-xl cursor-pointer shadow-2xl shadow-gray-600'>
          <Image
            src='/assets/react.svg'
            alt='React Icon'
            width={40}
            height={40}
          />
          <span className='font-bold text-xl sm:text-2xl text-white'>React</span>
        </div>
        <div className='border flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-3 max-w-[220px] bg-gray-800 rounded-xl cursor-pointer shadow-2xl shadow-gray-600'>
          <Image
            src='/assets/tailwind.svg'
            alt='Tailwind Icon'
            width={40}
            height={40}
          />
          <span className='font-bold text-xl sm:text-2xl text-white'>Tailwind</span>
        </div>
      </div>
    </main>
  )
}

export default Frameworks
