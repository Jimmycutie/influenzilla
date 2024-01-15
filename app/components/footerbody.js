'use client'

import React from 'react'
import { Parallax } from 'react-parallax';
import Imagecontent from './footer components/Imagecontent.js';
import Footercontent from './footer components/footercontent.js';

const Footerbody = () => {
  return (
    <div className='h-screen w-full'>
      <Parallax 
        className='relative flex h-3/4'
        bgImage={'../../static/background/footerbg.png'}
        strength={600} 
      >
        <Imagecontent />
      </Parallax>

      <Footercontent />
    </div>
  )
}

export default Footerbody