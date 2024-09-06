import Image from 'next/image'
import React from 'react'

const Tools = () => {
  return (
    <main>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl py-4 text-center'>
        Tools and Technologies
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-5 py-2'>
        <div className='border flex items-center justify-center gap-3 px-4 py-3 min-w-[150px] max-w-[220px] bg-gray-800 rounded-xl cursor-pointer shadow-2xl shadow-gray-600'>
          <Image
            src='/assets/git.svg'
            alt='Git Icon'
            width={32}
            height={32}
          />
          <span className='font-bold text-xl sm:text-2xl text-white'>Git</span>
        </div>
      </div>
    </main>
  )
}

export default Tools
