'use client'

import React from 'react'
import { Parallax } from 'react-parallax';
import Nav from './landing components/nav';
import Hero from './landing components/hero'

const footer = ['digital branding', 'influence marketing', 'content creation', 'design/development']
const Landing = () => (
  <Parallax 
    className='relative flex h-screen'
    bgImage={'../../static/background/mainbg.png'}
    strength={100} 
  >
    <Nav />
    <Hero />

    <footer className='flex flex-row min-[320px]:max-sm:flex-wrap min-[320px]:max-sm:text-sm w-screen h-1/5 justify-between items-center bg-black/70 font-unbounded px-[6%] min-[320px]:max-sm:p-8'>
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

export default Landing