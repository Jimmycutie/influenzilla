import React from 'react'
import Star from '@/static/Starbody.png'
import Image from 'next/image.js';
import { useIntersectionObserver } from '@/app/hooks/intersection';

const Footercontent = () => {
  const {scrollEf, isIntersecting} = useIntersectionObserver()
  return (
    <div ref={scrollEf} className='grid grid-cols-6 px-[6%] py-[5%] min-[320px]:max-lg:flex min-[320px]:max-lg:flex-col min-[320px]:max-lg:gap-6'>
      <div className={`col-span-2 flex flex-row items-start transition-all duration-500 delay-200 ${isIntersecting ? `translate-x-0 opacity-100` : `-translate-x-[100px] opacity-0`}`}>
        <Image src={Star} width={40}/>
        <Image src={Star} width={40}/>
        <Image src={Star} width={40}/>
      </div>
      <div className={`col-span-4 flex flex-row gap-x-16 font-extralight 
          [&>*:nth-child(1)]:transition-all [&>*:nth-child(1)]:duration-1000 ${isIntersecting ? `[&>*:nth-child(1)]:translate-y-0 [&>*:nth-child(1)]:opacity-100` : `[&>*:nth-child(1)]:-translate-y-40 [&>*:nth-child(1)]:opacity-0`}
          [&>*:nth-child(2)]:transition-all [&>*:nth-child(2)]:duration-1000 [&>*:nth-child(2)]:delay-100 ${isIntersecting ? `[&>*:nth-child(2)]:translate-y-0 [&>*:nth-child(2)]:opacity-100` : `[&>*:nth-child(2)]:-translate-y-40 [&>*:nth-child(2)]:opacity-0`}
        `}
      >
        <p className='min-[320px]:max-lg:w-1/2 min-[320px]:max-sm:w-full'>Our team of talented designers and marketers works closely with each of our clients, taking the time to understand their unique needs and goals, and developing customized solutions that exceed their expectations.<br/><br/> We take pride in our ability to create a cohesive brand identity, effective marketing strategies, and user-friendly websites and applications that help our clients achieve success.</p>
        <p className='min-[320px]:max-lg:w-1/2 min-[320px]:max-sm:hidden'>So if you're a start-up looking to create a strong brand identity, or an established business looking to revamp your marketing strategy, we have the expertise and experience to help you succeed.<br/><br/> Contact us today to learn more about our services and how we can help your business grow. We look forward to hearing from you and starting this exciting journey together.</p>
      </div>
    </div>
    
  )
}

export default Footercontent