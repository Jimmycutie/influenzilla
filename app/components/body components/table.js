import React from 'react'
import Blob from './blob'
import { Canvas } from '@react-three/fiber'
import { useIntersectionObserver } from '@/app/hooks/intersection'

const Table = () => {
    const {scrollEf, isIntersecting} = useIntersectionObserver()
  return (
    <div className='overflow-clip'>
        <div>
            <div className='w-full overflow-scroll'>
                <table className='w-full min-[320px]:max-sm:hidden'>
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
                <div className='w-full hidden min-[320px]:max-sm:flex flex-col justify-start border-solid border-2'>
                    <div className='border-solid border-b-2 py-5'>
                        <Canvas 
                            camera={{position:[0.0, 0.0, 5.0]}}
                        >
                            <Blob />
                        </Canvas>
                    </div>
                    <div className='border-solid border-b-2 p-10'>
                        <div className='flex flex-col gap-y-6'>
                            <h1 className='font-unbounded font-light text-3xl gradient-4colors'>Branding</h1>
                            <p className='text-sm w-48'>Our team of experts specializes in creating unique and effective designs</p>
                        </div>
                    </div>
                    <div className='border-solid border-b-2 py-5'>
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
                    </div>
                    <div className='border-solid border-b-2 p-10'>
                        <div className='flex flex-col gap-y-6'>
                            <h1 className='font-unbounded font-light text-3xl gradient-4colors'>Design</h1>
                            <p className='text-sm w-48'>Innovative and effective design solutions for business of our clients</p>
                        </div>
                    </div>
                    <div className='border-solid border-b-2 py-5'>
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
                    
                    </div>
                    
                    
                    <div className='border-solid border-b-2 p-10'>
                        <div className='flex flex-col gap-y-6'>
                            <h1 className='font-unbounded font-light text-3xl gradient-4colors'>Marketing</h1>
                            <p className='text-sm w-48'>Our team of experienced designers and marketing professionals work closely</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table