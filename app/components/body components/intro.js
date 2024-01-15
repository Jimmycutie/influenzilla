'use client'
import React from 'react'
import Image from 'next/image'
import star from '@/static/Starbody.png'
import { Canvas } from '@react-three/fiber'
import Blob from './blob'

const Intro = () => {
  return (
    <section className='w-full grid grid-cols-3'>
        <div className='col-span-2 flex flex-col gap-12'>
            <div className='grid grid-cols-4 items-end'>
                <h5 className='col-span-2 text-sm gradient-4colors'>London 2006</h5>
                <div className=' col-span-2 text-base font-extralight '>
                    <div className='flex flex-col gap-5 w-4/5'>
                        <p>Our creative design bureau is based in the heart of London and specializes in digital branding, website design, and influence marketing.</p>   
                        <p>We believe in the power of digital media to transform businesses and connect them with their audiences in meaningful ways.</p> 
                    </div>
                    
                </div>
            </div>
            <h1 className='font-unbounded text-6xl leading-relaxed font-light bg-gradient-to-r from-[#C6F1F7] via-[#F983E9] via-25% to-[#B877FF] inline-block text-transparent bg-clip-text'>
                We turn your digital
                <p>dreams into reality</p> 
                <p 
                    data-text='dreams'
                    className='relative -left-50 w-[260px] h-[20px] overflow-hidden before:content-[attr(data-text)attr(data-text)] before:font-unbounded before:underline before:decoration-wavy before:decoration-[3px] before:relative before:text-black before:animate-wave gradient-overline before:-top-[72px]'
                >
                </p>
                
            </h1>
            <div className='grid grid-cols-4 items-end'>
                <div className='col-span-2 flex flex-row'>
                    <Image src={star} width={40}/>
                    <Image src={star} width={40}/>
                    <Image src={star} width={40}/>
                </div>
                <div className=' col-span-2 text-base font-extralight '>
                    <div className='flex flex-col gap-5 w-4/5'>
                        <p>Our team of experienced designers and marketing professionals work closely with each client to understand their unique vision and develop tailored solutions that align with their goals.</p>   
                        <p>From designing eye-catching logos and brand identities, to building custom websites that engage and convert visitors, to crafting effective influencer marketing campaigns, we are dedicated to helping our clients succeed in the digital space.</p> 
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-self-end self-end justify-center items-center bg-[#202020] w-3/5 h-3/6 p-5'>
            <Canvas camera={{position:[0.0, 0.0, 8.0]}}>
                <Blob />
            </Canvas>
            <h5 className='col-span-2 text-sm font-inter gradient-4colors'>since 2006</h5>
        </div>  
    </section>
  )
}

export default Intro