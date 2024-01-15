import React from 'react'
import Star from '@/static/Starbody.png'
import Image from 'next/image'
import Blob from './blob'
import { Canvas } from '@react-three/fiber'

const Content = () => {
  return (
    <div className='flex flex-col gap-y-24'>
      <h1 className='font-unbounded text-6xl leading-relaxed font-light bg-gradient-to-r from-[#C6F1F7] via-[#F983E9] via-25% to-[#B877FF] inline-block text-transparent bg-clip-text'>
        
        <p 
            data-text='achieve'
            className='relative left-[33%] w-[260px] h-[20px] overflow-hidden before:content-[attr(data-text)attr(data-text)] before:font-unbounded before:overline before:decoration-wavy before:decoration-[3px] before:relative before:text-black before:animate-wave gradient-overline before:top-2'
        >
        </p>
        Help our clients achieve
        
        <p>their business objectives</p>   
      </h1>
      <div className='grid grid-cols-6'>
        <div className='col-span-2 flex flex-col justify-between'>
          <h5 className='text-sm gradient-4colors'>London 2006</h5>
          <Image src={Star} width={40} className='mb-[30%]'/>
        </div>

        <div className='col-span-4 flex flex-col gap-y-10 font-extralight w-full'>
          <div className='flex flex-row gap-x-56'>
            <p>Influenzilla is a leading design and marketing agency that offers creative solutions to businesses of all sizes. Our team of experts specializes in creating unique and effective designs that help our clients stand out in a crowded market.<br/><br/> Our mission is to help our clients achieve their business objectives through innovative and effective design solutions. We believe that great design is more than just aesthetics. It's about creating a seamless user experience that engages and delights your audience.</p>
            <p>We take pride in our ability to understand the unique needs and goals of each of our clients, and to develop customized solutions that exceed their expectations. Our team of talented designers and marketers work closely with our clients to create a cohesive brand identity, effective marketing strategies, and user-friendly websites and applications.<br/><br/> We offer a wide range of services, including branding, web design, social media marketing, graphic design, and more. Our goal is to help our clients achieve success by providing them with the tools and resources they need to grow their business.</p>
          </div>
          <div>
            <div className=''>
              <table className='w-full'>
                <tbody>
                  <tr>
                    <td>
                      <Canvas 
                        camera={{position:[0.0, 0.0, 5.0]}}
                      >
                        <Blob />
                      </Canvas>
                    </td>
                    <td>
                      <div className='flex flex-row'>
                        <Canvas camera={{position:[0.0, 0.0, 5.0]}}>
                          <Blob />
                        </Canvas>
                        <Canvas 
                          camera={{position:[0.0, 0.0, 5.0]}}
                          className='-ml-48'
                        >
                          <Blob />
                        </Canvas>
                      </div>
                    </td>
                    <td>
                      <div className='flex flex-row'>
                        <Canvas camera={{position:[0.0, 0.0, 5.0]}}>
                          <Blob />
                        </Canvas>
                        <Canvas 
                          camera={{position:[0.0, 0.0, 5.0]}}
                          className='-ml-40'
                        >
                          <Blob />
                        </Canvas>
                        <Canvas 
                          camera={{position:[0.0, 0.0, 5.0]}}
                          className='-ml-40'
                        >
                          <Blob />
                        </Canvas>
                      </div>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='flex flex-col gap-y-6'>
                        <h1 className='font-unbounded font-light text-3xl gradient-4colors'>Branding</h1>
                        <p className='text-sm w-48'>Our team of experts specializes in creating unique and effective designs</p>
                      </div>
                    </td>
                    <td>
                      <div className='flex flex-col gap-y-6'>
                        <h1 className='font-unbounded font-light text-3xl gradient-4colors'>Design</h1>
                        <p className='text-sm w-48'>Innovative and effective design solutions for business of our clients</p>
                      </div>
                    </td>
                    <td>
                      <div className='flex flex-col gap-y-6'>
                        <h1 className='font-unbounded font-light text-3xl gradient-4colors'>Marketing</h1>
                        <p className='text-sm w-48'>Our team of experienced designers and marketing professionals work closely</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='w-3/6'>
            <p>We specialize in creating unique and innovative designs that not only capture the essence of your business but also help you achieve your goals. We believe that great design is about creating a seamless user experience that engages and delights your audience, and we work hard to ensure that every design we create meets this high standard.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content