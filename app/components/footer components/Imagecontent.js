import React from 'react'

const Imagecontent = () => {
  return (
    <div className='px-[6%] py-[4%] h-full w-screen flex flex-col justify-between'>
        <div className='w-20'>
            <p className='text-xs gradient-4colors'>hi there, let's het started!</p>
        </div>
        <div className='flex flex-row w-full justify-between items-end'>
           <h1 className='font-unbounded text-6xl leading-relaxed font-light bg-gradient-to-r from-[#C6F1F7] via-[#F983E9] via-25% to-[#B877FF] inline-block text-transparent bg-clip-text'>
                <p 
                    data-text='and'
                    className='relative left-[72%] w-[150px] h-[21px] overflow-hidden before:content-[attr(data-text)attr(data-text)] before:font-unbounded before:overline before:decoration-wavy before:decoration-[3px] before:relative before:text-black before:animate-wave gradient-overline before:top-3'
                >
                </p>
                Expertise and 
                <br/>
                experience
            </h1>
            <p className='w-[30%] gradient-4color2'>
            We believe that building long-lasting relationships with our clients is key to achieving success. We are passionate about what we do, and we are committed to delivering exceptional results for every client we work with.
            </p>
        </div>
        
    </div>
  )
}

export default Imagecontent