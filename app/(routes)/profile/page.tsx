'use client'
import { FloatingDockDemo } from '@/components/FloatingDockDemo'
import { TypewriterEffectSmoothDemo } from '@/components/TypewriterEffectSmoothDemo'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
  return (
    <main className='w-[90%] mx-auto min-h-full '>
      <h1 className='text-center text-3xl py-2 lg:py-5 text-[#2effe0] lg:hidden'>About Me</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 p-2'>
        <div className='p-5 rounded-3xl flex items-center justify-center'>
          <Image
            src="/vikash.png"
            alt='Profile Picture'
            width={500}
            height={50}
            className='rounded-full border-4 border-teal-400'
          />
        </div>
        <div className='border rounded-3xl px-5'>
          <TypewriterEffectSmoothDemo />
          <span className='lg:text-2xl flex flex-col gap-3 -mt-5 py-2'>
            <p>An Aspiring Computer Science Engineer with a passion for solving complex problems and building innovative solutions. </p>
            <p> Currently pursuing a degree in Computer Science and Engineering, I am skilled in software development, data structures, and algorithms.</p>
            <p>Eager to apply my knowledge through hands-on projects and real-world experience.</p>
            <div className='flex flex-wrap md:flex-nowrap items-center justify-between lg:mt-10'>
              <div className='border-4 border-blue-600 rounded-full cursor-pointer text-center mx-auto bg-[#2effe0]'>
                <a
                  href="/Resume.pdf"
                  download="Resume.pdf" // This will make the browser download the file
                  className='border-2 border-none rounded-full cursor-pointer text-center mx-auto bg-[#2effe0] block'
                >
                  <h1 className='py-3 px-10 lg:px-10 text-black font-bold lg:text-3xl'>Resume</h1>
                </a>
              </div>
              <div className='w-full'>
                <FloatingDockDemo />
              </div>
            </div>
          </span>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
