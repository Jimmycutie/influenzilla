'use client'
import React from 'react'
import { Parallax } from 'react-parallax'
import img from '../../../static/grid/22.png'
const Imagegrid = () => {
    const clips = [
        {
            id: '01',
            text: 'We create unique brand identities that resonate with your target audience and help you stand out in a crowded marketplace',
            url: '../../../static/grid/20.png'
        },
        {
            id: '02',
            text: 'We build custom websites that are visually stunning, easy to navigate, and optimized for search engines',
            url: '../../../static/grid/21.png'
        },
        {
            id: '03',
            text: 'We develop influencer campaigns that help you reach a wider audience, build brand awareness, and drive conversions',
            url: '../../../static/grid/22.png'
        },
        {
            id: '04',
            text: 'We produce high-quality content that engages your audience, builds trust, and reinforces your brand message',
            url: '../../../static/grid/23.png'
        },
    ]
    return (
        <div className='flex flex-row min-[320px]:max-lg:flex-col min-[320px]:max-md:flex-nowrap h-full min-[320px]:max-lg:w-full flex-wrap min-[320px]:max-lg:justify-center'>
            {
                clips.map(items => (
                    <Parallax 
                        key={items.id}
                        className='relative flex flex-row w-1/2 min-[320px]:max-lg:w-full'
                        bgImage={items.url}
                        strength={300}
                    >
                        <div className='flex flex-col h-full w-4/6 min-[320px]:max-lg:w-full justify-end p-20 min-[320px]:max-sm:p-5 font-unbounded gap-12 min-[320px]:max-sm:gap-8'>
                            <h1 className='text-5xl font-light'>{items.id}</h1>
                            <p className='font-extralight'>{items.text}</p> 
                        </div>
                        
                    </Parallax>
                ))
            }
        </div>
    )
}

export default Imagegrid