import React from 'react'
import Star from '@/static/Starbody.png'
import Image from 'next/image.js';

const Footercontent = () => {
  return (
    <div className='grid grid-cols-6 px-[6%] py-[5%]'>
        <div className='col-span-2 flex flex-row'>
            <Image src={Star} width={40} className='mb-[30%]'/>
            <Image src={Star} width={40} className='mb-[30%]'/>
            <Image src={Star} width={40} className='mb-[30%]'/>
        </div>
        <div className='col-span-4 flex flex-row gap-x-16 font-extralight'>
            <p>Our team of talented designers and marketers works closely with each of our clients, taking the time to understand their unique needs and goals, and developing customized solutions that exceed their expectations.<br/><br/> We take pride in our ability to create a cohesive brand identity, effective marketing strategies, and user-friendly websites and applications that help our clients achieve success.</p>
            <p>So if you're a start-up looking to create a strong brand identity, or an established business looking to revamp your marketing strategy, we have the expertise and experience to help you succeed.<br/><br/> Contact us today to learn more about our services and how we can help your business grow. We look forward to hearing from you and starting this exciting journey together.</p>
        </div>
    </div>
    
  )
}

export default Footercontent