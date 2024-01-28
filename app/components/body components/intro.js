'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import star from '@/static/Starbody.png'
import { Canvas } from '@react-three/fiber'
import Blob from './blob'
import { useIntersectionObserver } from '@/app/hooks/intersection'

const Intro = () => {
    const { scrollEf, isIntersecting } = useIntersectionObserver()
  return (
    <section ref={scrollEf} className='w-full overflow-clip grid grid-cols-3 min-[320px]:max-md:flex min-[320px]:max-md:flex-col'>
        <div className='col-span-2 flex flex-col gap-12'>
            <div className={`grid grid-cols-4 items-end min-[320px]:max-lg:items-start min-[320px]:max-lg:gap-6 min-[320px]:max-lg:flex min-[320px]:max-lg:flex-col min-[320px]:max-lg:w-full
                    [&>*:nth-child(1)]:transition-all [&>*:nth-child(1)]:duration-1000 ${isIntersecting ? `[&>*:nth-child(1)]:translate-y-0 [&>*:nth-child(1)]:opacity-100` : `[&>*:nth-child(1)]:-translate-y-22 [&>*:nth-child(1)]:opacity-0`}
                    [&>*:nth-child(2)]:transition-all [&>*:nth-child(2)]:duration-500 [&>*:nth-child(2)]:delay-75 ${isIntersecting ? `[&>*:nth-child(2)]:translate-y-0 [&>*:nth-child(2)]:opacity-100` : `[&>*:nth-child(2)]:-translate-y-22 [&>*:nth-child(2)]:opacity-0`}
                `}
            >
                <h5 className='col-span-2 text-sm gradient-4colors'>London 2006</h5>
                <div className=' col-span-2 text-base font-extralight '>
                    <div className='flex flex-col gap-5 w-4/5 min-[320px]:max-md:w-full'>
                        <p>Our creative design bureau is based in the heart of London and specializes in digital branding, website design, and influence marketing.</p>   
                        <p>We believe in the power of digital media to transform businesses and connect them with their audiences in meaningful ways.</p> 
                    </div>
                    
                </div>
            </div>
            <h1 className={`font-unbounded text-6xl min-[320px]:max-sm:text-4xl sm:max-md:leading-loose leading-relaxed font-light bg-gradient-to-r from-[#C6F1F7] via-[#F983E9] via-25% to-[#B877FF] inline-block text-transparent bg-clip-text transition-all duration-500 ${isIntersecting ? `translate-x-0 opacity-100` : `-translate-x-[300px] opacity-0`}`}>
                We turn your digital
                <p>dreams into reality</p> 
                <p 
                    data-text='dreams'
                    className='relative -left-50 w-[260px] h-[20px] overflow-hidden before:content-[attr(data-text)attr(data-text)] before:font-unbounded before:underline before:decoration-wavy before:decoration-[3px] before:relative before:text-black before:animate-wave gradient-overline before:-top-[72px]'
                >
                </p>
                
            </h1>
            <div className={`grid grid-cols-4 items-end min-[320px]:max-md:items-start min-[320px]:max-lg:gap-6 min-[320px]:max-lg:flex min-[320px]:max-lg:flex-col
                    [&>*:nth-child(1)]:transition-all [&>*:nth-child(1)]:duration-500 [&>*:nth-child(1)]:delay-300 ${isIntersecting ? `[&>*:nth-child(1)]:translate-y-0 [&>*:nth-child(1)]:opacity-100` : `[&>*:nth-child(1)]:-translate-y-22 [&>*:nth-child(1)]:opacity-0`}
                    [&>*:nth-child(2)]:transition-all [&>*:nth-child(2)]:duration-500 [&>*:nth-child(2)]:delay-300 ${isIntersecting ? `[&>*:nth-child(2)]:translate-y-0 [&>*:nth-child(2)]:opacity-100` : `[&>*:nth-child(2)]:-translate-y-40 [&>*:nth-child(2)]:opacity-0`}
                `}
            >
                <div className='col-span-2 flex flex-row'>
                    <Image src={star} width={40}/>
                    <Image src={star} width={40}/>
                    <Image src={star} width={40}/>
                </div>
                <div className=' col-span-2 text-base font-extralight '>
                    <div className='flex flex-col gap-5 w-4/5 min-[320px]:max-lg:w-full'>
                        <p>Our team of experienced designers and marketing professionals work closely with each client to understand their unique vision and develop tailored solutions that align with their goals.</p>   
                        <p>From designing eye-catching logos and brand identities, to building custom websites that engage and convert visitors, to crafting effective influencer marketing campaigns, we are dedicated to helping our clients succeed in the digital space.</p> 
                    </div>
                    
                </div>
            </div>
        </div>
        <div className={`flex flex-col justify-self-end self-end justify-center items-center bg-[#202020] w-3/5 h-3/6 md:max-xl:h-72 min-[320px]:max-md:hidden p-5 transition-all duration-500 delay-500 ${isIntersecting ? `translate-x-0 opacity-100` : `translate-x-[300px] opacity-0`}`}>
            <Canvas camera={{position:[0.0, 0.0, 8.0]}}>
                <Blob />
            </Canvas>
            <h5 className='col-span-2 text-sm font-inter gradient-4colors'>since 2006</h5>
        </div>  
    </section>
  )
}

export default Intro