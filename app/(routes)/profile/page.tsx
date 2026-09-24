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
            height={500}
            className='rounded-full border-4 border-teal-400 object-cover aspect-square'
          />
        </div>
        <div className='border rounded-3xl px-5'>
          <TypewriterEffectSmoothDemo />
          <span className='lg:text-2xl flex flex-col gap-3 -mt-5 py-2'>
            <p>Software Engineer with hands-on experience in Java, Spring Boot, and microservices development. </p>
            <p>Experienced in building REST APIs, secure backend services using JWT and Spring Cloud Gateway, and integrating RabbitMQ, MySQL, and OpenAI APIs. </p>
            <p>Passionate about building scalable backend systems and solving real-world software engineering problems.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">

              {/* View Resume Button */}
              <div className="border-4 border-blue-600 rounded-full bg-[#2effe0]">
                <a
                  href="/Resume.pdf"
                  download="Resume.pdf"
                  className="block"
                >
                  <h1 className="py-4 px-10 text-black font-bold text-2xl whitespace-nowrap">
                    View Resume
                  </h1>
                </a>
              </div>

              {/* Social Links */}
              <div>
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
