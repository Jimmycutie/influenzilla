import React from 'react'
import star from '../../../static/Star.png'
import Image from 'next/image'
import globe from '@/static/globe.png'


const Nav = () => {
  const menu = ['ABOUT', 'SERVICES', 'CASES', 'TEAM']
  const menu2 = ['BOOST PROGRAMME', 'PRODUCTS', 'BOOK']
  return (
    <div className='px-[6%] mt-[4%] h-1/6'>
      <div className='grid grid-cols-3 border-solid border-2 border-inherit h-full'>
        <div className='flex flex-row justify-between items-center font-unbounded text-base p-6 border-r-2'>
          <logo className='flex flex-row items-center'>
            <Image src={star} width={34} className='mr-3'/>
            <h1>Influenzilla</h1>
          </logo>
          <p className='text-xs w-2/6'>bespoke design and marketing services</p>
        </div>
        <div className='col-span-2 grid grid-rows-2'>
          <div 
            className='border-b-2 flex flex-row justify-between items-center'
          >
            {
              menu.map(item => (
                <span key={item} className='flex justify-center items-center border-r-2 w-full h-full font-medium text-sm'><p className='relative underlined block cursor-pointer gradient-4color3 after:absolute after:content-[""] after:h-[2px] after:bg-white after:-bottom-1.5 after:left-0 after:transition-all after:duration-500 after:opacity-0 after:hover:opacity-100 after:hover:w-full after:w-0 after:-translate-x-1/2 after:hover:translate-x-0'>{item}</p></span>
              ))
            }
            <span className='flex justify-center items-center w-full h-full font-light'><Image src={globe} width={24} height={24} className='relative block cursor-pointer after:absolute after:content-[""] after:h-[2px] after:bg-white after:-bottom-4 after:left-0 after:transition-all after:duration-500 after:opacity-0 after:hover:opacity-100 after:hover:w-full after:w-0 after:-translate-x-1/2 after:hover:translate-x-0'/></span>
          </div>
          <div className='flex flex-row justify-between items-center'>
          {
            menu2.map(item => (
              <span key={item} className='flex justify-center items-center border-r-2 w-full h-full font-medium text-sm'><p className='relative underlined block cursor-pointer gradient-4color3 after:absolute after:content-[""] after:h-[2px] after:bg-white after:-bottom-1.5 after:left-0 after:transition-all after:duration-500 after:opacity-0 after:hover:opacity-100 after:hover:w-full after:w-0 after:-translate-x-1/2 after:hover:translate-x-0'>{item}</p></span>
            ))
          }
          <span className='flex justify-center items-center w-full h-full font-medium'><p className='underlined text-sm relative block cursor-pointer gradient-4color3 after:absolute after:content-[""] after:h-[2px] after:-bottom-1.5 after:left-0 after:transition-all after:duration-500 after:opacity-0 after:hover:opacity-100 after:hover:w-full after:w-0 after:-translate-x-1/2 after:hover:translate-x-0'>BLOG</p></span>
          </div>
        </div>
          
      </div>
        
    </div>
  )
}

export default Nav