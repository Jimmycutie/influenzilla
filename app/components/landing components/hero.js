import React from 'react'
import Image from 'next/image'
import star from '@/static/Starbody.png'

const Hero = () => {
  return (
    <content className='px-[6%]'>
        <div className='flex flex-row items-center mb-20'>
            <h1 className='font-unbounded text-3xl mr-6 font-extralight gradient-4colors'>2023</h1>
            <div className='w-20'>
                <p className='text-xs gradient-4colors'>hi there, let's het started!</p>
            </div>
            
        </div>
        <div className='flex flex-row w-full justify-between'>
            <div className='flex flex-col font-unbounded'>
                <div>
                    <h1 className='flex flex-row gap-5 text-6xl leading-relaxed font-light bg-gradient-to-r from-[#C6F1F7] via-[#F983E9] via-25% to-[#B877FF] inline-block text-transparent bg-clip-text'>
                        Influence
                        <p>your</p> 
                        <p 
                            data-text='your'
                            className='relative -left-44 w-[150px] h-[40px] overflow-hidden before:content-[attr(data-text)attr(data-text)] before:font-unbounded before:overline before:decoration-wavy before:decoration-[3px] before:relative before:text-black before:animate-wave gradient-overline before:top-2'
                        >
                        </p>

                    </h1>
                    
                </div>
                <div className='flex flex-row gap-10 items-center'>
                    <h1 className='text-6xl font-light bg-gradient-to-r from-[#C6F1F7] via-[#F983E9] to-[#B877FF] inline-block text-transparent bg-clip-text'>audience</h1>
                    <p className='text-sm font-light w-64'>boost your brand with our marketing expertise</p>
                </div>
            </div>
            <div className='w-1/6 flex flex-col gap-6 justify-end'>
                <Image src={star} className='w-[12%]'/>
                <p className='text-base gradient-4colors'>We believe in the power of digital media to transform businesses and connect them with their audiences in meaningful ways.</p>
            </div>
        </div>
    </content>
  )
}

export default Hero