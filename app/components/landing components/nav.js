import React from 'react'
import star from '../../../static/Star.png'
import Image from 'next/image'
import globe from '@/static/globe.png'


const Nav = () => {
  const menu = ['ABOUT', 'SERVICES', 'CASES', 'TEAM']
  const menu2 = ['BOOST PROGRAMME', 'PRODUCTS', 'BOOK']
  return (
    <div className='px-[6%] mt-[4%] min-[320px]:max-sm:w-full h-1/6 min-[320px]:max-sm:h-[12%] '>
      <div className='grid grid-cols-3 border-solid border-2 border-inherit h-full min-[320px]:max-sm:h-5/6'>
        <div className='min-[320px]:max-sm:col-span-2 flex flex-row justify-between min-[320px]:max-lg:justify-center items-center font-unbounded text-base sm:max-lg:text-md p-6 min-[320px]:max-sm:p-0 border-r-2'>
          <logo className='flex flex-row items-center min-[320px]:max-sm:font-bold'>
            <Image src={star} width={34} className='mr-3 min-[320px]:max-sm:w-[40px]'/>
            <h1>Influenzilla</h1>
          </logo>
          <p className='text-xs min-[320px]:max-lg:hidden w-2/6'>bespoke design and marketing services</p>
        </div>
        <div className='hidden min-[320px]:max-sm:flex justify-center items-center font-extralight text-sm'>
          <h1 className='relative underlined cursor-pointer gradient-4color3 after:absolute after:content-[""] after:h-[2px] after:bg-white after:-bottom-1.5 after:left-0 after:transition-all after:duration-500 after:opacity-0 after:hover:opacity-100 after:hover:w-full after:w-0 after:-translate-x-1/2 after:hover:translate-x-0'>MENU</h1>
        </div>
        <div className='col-span-2 grid grid-rows-2 min-[320px]:max-sm:hidden'>
          <div 
            className='border-b-2 flex flex-row justify-between items-center'
          >
            {
              menu.map(item => (
                <span key={item} className='flex justify-center items-center border-r-2 w-full h-full font-medium text-sm md:max-lg:text-xs sm:max-md:text-[10px]'><p className='relative underlined block cursor-pointer gradient-4color3 after:absolute after:content-[""] after:h-[2px] after:bg-white after:-bottom-1.5 after:left-0 after:transition-all after:duration-500 after:opacity-0 after:hover:opacity-100 after:hover:w-full after:w-0 after:-translate-x-1/2 after:hover:translate-x-0'>{item}</p></span>
              ))
            }
            <span className='flex justify-center items-center w-full h-full font-light'><Image src={globe} width={24} height={24} className='relative block cursor-pointer after:absolute after:content-[""] after:h-[2px] after:bg-white after:-bottom-4 after:left-0 after:transition-all after:duration-500 after:opacity-0 after:hover:opacity-100 after:hover:w-full after:w-0 after:-translate-x-1/2 after:hover:translate-x-0'/></span>
          </div>
          <div className='flex flex-row justify-between items-center'>
          {
            menu2.map(item => (
              <span key={item} className='flex justify-center items-center border-r-2 w-full h-full font-medium text-sm md:max-lg:text-xs sm:max-md:text-[10px] text-wrap text-center'><p className='relative underlined block cursor-pointer gradient-4color3 after:absolute after:content-[""] after:h-[2px] after:bg-white after:-bottom-1.5 after:left-0 after:transition-all after:duration-500 after:opacity-0 after:hover:opacity-100 after:hover:w-full after:w-0 after:-translate-x-1/2 after:hover:translate-x-0'>{item}</p></span>
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