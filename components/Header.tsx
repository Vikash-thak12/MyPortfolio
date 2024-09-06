'use client'
import React from 'react'
import { navItems } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const path = usePathname()
    return (
        <main className='border rounded-full mt-5 w-[95%] lg:w-[40%] md:w-[50%] fixed left-1/2 transform -translate-x-1/2'>
            <div className='flex items-center justify-center py-5 gap-2 lg:gap-5 lg:py-8'>
                {
                    navItems.map((item) => (
                        <Link href={item.link} key={item.link}>
                            <span className={`border-2 p-2 lg:px-5 text-base lg:text-2xl rounded-full cursor-pointer hover:border-cyan-400 transition-colors ${path === item.link &&  "border-cyan-400"}`}>
                                {item.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
        </main>
    )
}

export default Header
