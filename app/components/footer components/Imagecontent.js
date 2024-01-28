import React from 'react'
import { useIntersectionObserver } from '@/app/hooks/intersection'

const Imagecontent = () => {
  const {scrollEf, isIntersecting} = useIntersectionObserver()
  return (
    <div className='px-[6%] py-[4%] h-full w-screen flex flex-col justify-between min-[320px]:max-sm:justify-evenly'>
      <div className='w-20'>
        <p className={`text-xs gradient-4colors transition-all duration-500 ${isIntersecting ? `translate-x-0 opacity-100` : `-translate-x-[300px] opacity-0`}`}>hi there, let's het started!</p>
      </div>
      <div ref={scrollEf} className='flex flex-row min-[320px]:max-md:flex-col w-full justify-between items-end min-[320px]:max-md:items-start min-[320px]:max-md:gap-10'>
        <h1 className={`font-unbounded text-6xl sm:max-md:text-5xl min-[320px]:max-sm:text-4xl leading-relaxed font-light bg-gradient-to-r from-[#C6F1F7] via-[#F983E9] via-25% to-[#B877FF] inline-block text-transparent bg-clip-text transition-all duration-500 delay-200 ${isIntersecting ? `translate-x-0 opacity-100` : `-translate-x-[300px] opacity-0`}`}>
          <p 
            data-text='and'
            className='relative left-[72%] w-[150px] min-[320px]:max-sm:w-[80px] h-[21px] overflow-hidden before:content-[attr(data-text)attr(data-text)] before:font-unbounded before:overline before:decoration-wavy before:decoration-[3px] before:relative before:text-black before:animate-wave gradient-overline before:top-3 min-[320px]:max-sm:before:top-5'
          >
          </p>
          Expertise and 
          <br/>
          experience
        </h1>
        <p className={`w-[30%] min-[320px]:max-lg:w-full gradient-4color2  transition-all duration-500 delay-200 ${isIntersecting ? `translate-x-0 opacity-100` : `translate-x-[300px] opacity-0`}`}>
          We believe that building long-lasting relationships with our clients is key to achieving success. We are passionate about what we do, and we are committed to delivering exceptional results for every client we work with.
        </p>
      </div>    
    </div>
  )
}

export default Imagecontent