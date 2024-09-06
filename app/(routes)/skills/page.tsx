import Database from '@/components/Database'
import Frameworks from '@/components/Frameworks'
import Languages from '@/components/Languages'
import Tools from '@/components/Tools'
import React from 'react'

const ExperiencePage = () => {
  return (
    <main className='w-[95%] lg:w-[60%] h-full rounded-lg mx-auto'>
      <Languages />
      <Frameworks />
      <Database />
      <Tools />
    </main>
  )
}

export default ExperiencePage