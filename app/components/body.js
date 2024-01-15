'use client'
import React from 'react'
import Intro from './body components/intro'
import Imagegrid from './body components/imagegrid'
import Content from './body components/content'

const Body = () => {
  return (
    <div className='flex flex-col gap-y-32 w-full px-[6%] py-[5%]'>
        <Intro />
        <Imagegrid />
        <Content />
    </div>
  )
}

export default Body