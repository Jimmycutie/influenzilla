'use client'

import React from 'react'
import { Parallax } from 'react-parallax';
import Nav from './landing components/nav';
import Hero from './landing components/hero'
import { useIntersectionObserver } from '../hooks/intersection';

const footer = ['digital branding', 'influence marketing', 'content creation', 'design/development']

const Landing = () => {
  const {scrollEf, isIntersecting } = useIntersectionObserver()
  console.log(isIntersecting)
  return (
    <Parallax 
      className='relative flex h-screen'
      bgImage={'../../static/background/mainbg.png'}
      strength={100} 
    >
      <Nav />
      <Hero />

      <footer
        ref={scrollEf} 
        className={`flex flex-row min-[320px]:max-sm:flex-wrap min-[320px]:max-sm:text-sm w-screen h-1/5 justify-between items-center bg-black/70 font-unbounded px-[6%] min-[320px]:max-sm:p-5 
        [&>*:nth-child(1)]:transition-all [&>*:nth-child(1)]:duration-500 ${isIntersecting ? `[&>*:nth-child(1)]:translate-x-0 [&>*:nth-child(1)]:opacity-100` : `[&>*:nth-child(1)]:-translate-x-44 [&>*:nth-child(1)]:opacity-0`}
        [&>*:nth-child(2)]:transition-all [&>*:nth-child(2)]:duration-500 [&>*:nth-child(2)]:delay-75 ${isIntersecting ? `[&>*:nth-child(2)]:translate-x-0 [&>*:nth-child(2)]:opacity-100` : `[&>*:nth-child(2)]:-translate-x-44 [&>*:nth-child(2)]:opacity-0`}
        [&>*:nth-child(3)]:transition-all [&>*:nth-child(3)]:duration-500 [&>*:nth-child(3)]:delay-100 ${isIntersecting ? `[&>*:nth-child(3)]:translate-x-0 [&>*:nth-child(3)]:opacity-100` : `[&>*:nth-child(3)]:-translate-x-44 [&>*:nth-child(3)]:opacity-0`}
        [&>*:nth-child(4)]:transition-all [&>*:nth-child(4)]:duration-500 [&>*:nth-child(4)]:delay-150 ${isIntersecting ? `[&>*:nth-child(4)]:translate-x-0 [&>*:nth-child(4)]:opacity-100` : `[&>*:nth-child(4)]:-translate-x-44 [&>*:nth-child(4)]:opacity-0`}`
        }
      >
        {
          footer.map(item => (
            <h4 
              key={item}
              className='relative block gradient-4colors cursor-pointer after:absolute after:content-[""] after:w-full after:h-[2px] after:bg-white after:-bottom-4 min-[320px]:max-sm:after:-bottom-2 after:left-0 after:transition-all after:duration-500 after:hover:opacity-0 after:hover:w-0 after:hover:-translate-x-1/2'
            >{item}</h4>
          ))
        }
      </footer>
    </Parallax>
  )
  
}

export default Landing