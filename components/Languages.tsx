import Image from 'next/image'
import React from 'react'

const Languages = () => {
  return (
    <main>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl py-4 text-center'>
        Languages
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-5 py-2'>
        <div className='border flex items-center justify-center gap-3 px-4 py-3 lg:py-4 w-full max-w-[200px] bg-gray-800 rounded-xl cursor-pointer shadow-2xl shadow-gray-600'>
          <Image
            src='/assets/javascript.svg'
            alt='JavaScript Icon'
            width={32}
            height={32}
          />
          <span className='font-bold text-xl sm:text-2xl text-white'>JavaScript</span>
        </div>
        <div className='border flex items-center justify-center gap-3 px-4 py-3 lg:py-4 w-full max-w-[200px] bg-gray-800 rounded-xl cursor-pointer shadow-2xl shadow-gray-600'>
          <Image
            src='/assets/typescript.svg'
            alt='TypeScript Icon'
            width={32}
            height={32}
          />
          <span className='font-bold text-xl sm:text-2xl text-white'>TypeScript</span>
        </div>
        <div className='border flex items-center justify-center gap-3 px-4 py-3 lg:py-4 w-full max-w-[200px] bg-gray-800 rounded-xl cursor-pointer shadow-2xl shadow-gray-600'>
          <Image
            src='/assets/java.svg'
            alt='Java Icon'
            width={32}
            height={32}
          />
          <span className='font-bold text-xl sm:text-2xl text-white'>Java</span>
        </div>
      </div>
    </main>
  )
}

export default Languages
