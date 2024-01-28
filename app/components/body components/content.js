import React from 'react'
import Star from '@/static/Starbody.png'
import Image from 'next/image'
import { useIntersectionObserver } from '@/app/hooks/intersection'
import Table from './table'

const Content = () => {
  const {scrollEf, isIntersecting} = useIntersectionObserver()
  return (
    <div ref={scrollEf} className='flex flex-col gap-y-24'>
      <h1 className={`font-unbounded text-6xl min-[320px]:max-sm:text-4xl sm:max-md:leading-loose leading-relaxed font-light bg-gradient-to-r from-[#C6F1F7] via-[#F983E9] via-25% to-[#B877FF] inline-block text-transparent bg-clip-text transition-all duration-500 ${isIntersecting ? `translate-x-0 opacity-100` : `-translate-x-[300px] opacity-0`}`}>
        
        <p 
            data-text='achieve'
            className='relative min-[320px]:max-sm:hidden left-[33%] w-[260px] h-[20px] overflow-hidden before:content-[attr(data-text)attr(data-text)] before:font-unbounded before:overline before:decoration-wavy before:decoration-[3px] before:relative before:text-black before:animate-wave gradient-overline before:top-2'
        >
        </p>
        Help our clients achieve
        
        <p>their business objectives</p>   
      </h1>
      <div className='grid grid-cols-6 min-[320px]:max-lg:flex min-[320px]:max-lg:flex-col min-[320px]:max-sm:gap-5'>
        <div className='col-span-2 flex flex-col min-[320px]:max-lg:flex-row justify-between'>
          <h5 className={`text-sm gradient-4colors transition-all duration-500 delay-100 ${isIntersecting ? `translate-x-0 opacity-100` : `-translate-x-[100px] opacity-0`}`}>London 2006</h5>
          <Image src={Star} width={40} className={`mb-[30%] min-[320px]:max-lg:mb-0 transition-all duration-500 delay-500 ${isIntersecting ? `translate-x-0 opacity-100` : `-translate-x-[100px] opacity-0`}`}/>
        </div>

        <div className='col-span-4 flex flex-col gap-y-10 font-extralight w-full'>
          <div className={`flex flex-row gap-x-56 min-[320px]:max-lg:gap-x-10 min-[320px]:max-lg:justify-evenly
              [&>*:nth-child(1)]:transition-all [&>*:nth-child(1)]:duration-1000 ${isIntersecting ? `[&>*:nth-child(1)]:translate-y-0 [&>*:nth-child(1)]:opacity-100` : `[&>*:nth-child(1)]:-translate-y-40 [&>*:nth-child(1)]:opacity-0`}
              [&>*:nth-child(2)]:transition-all [&>*:nth-child(2)]:duration-1000 [&>*:nth-child(2)]:delay-100 ${isIntersecting ? `[&>*:nth-child(2)]:translate-y-0 [&>*:nth-child(2)]:opacity-100` : `[&>*:nth-child(2)]:-translate-y-40 [&>*:nth-child(2)]:opacity-0`}
            `}
          >
            <p className='min-[320px]:max-lg:w-1/2 min-[320px]:max-sm:w-full'>Influenzilla is a leading design and marketing agency that offers creative solutions to businesses of all sizes. Our team of experts specializes in creating unique and effective designs that help our clients stand out in a crowded market.<br/><br/> Our mission is to help our clients achieve their business objectives through innovative and effective design solutions. We believe that great design is more than just aesthetics. It's about creating a seamless user experience that engages and delights your audience.</p>
            <p className='min-[320px]:max-lg:w-1/2 min-[320px]:max-sm:hidden'>We take pride in our ability to understand the unique needs and goals of each of our clients, and to develop customized solutions that exceed their expectations. Our team of talented designers and marketers work closely with our clients to create a cohesive brand identity, effective marketing strategies, and user-friendly websites and applications.<br/><br/> We offer a wide range of services, including branding, web design, social media marketing, graphic design, and more. Our goal is to help our clients achieve success by providing them with the tools and resources they need to grow their business.</p>
          </div>
          <Table/>
          <div className={`w-3/6 min-[320px]:max-sm:w-full transition-all duration-500 delay-300 ${isIntersecting ? `translate-x-0 opacity-100` : `translate-x-[300px] opacity-0`}`}>
            <p>We specialize in creating unique and innovative designs that not only capture the essence of your business but also help you achieve your goals. We believe that great design is about creating a seamless user experience that engages and delights your audience, and we work hard to ensure that every design we create meets this high standard.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content