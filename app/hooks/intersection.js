'use client'
import React, { useState, useRef, useEffect } from 'react';

export const useIntersectionObserver = () => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const scrollEf = useRef(null)
    const options = {
        root:null,
        rootMargin:'',
        threshold:1
    }
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting)
            console.log(`function: ${entry.isIntersecting}`)
        })

        if (scrollEf.current) {
            observer.observe(scrollEf.current)
        }

        return () => {
            if (scrollEf.current) {
                observer.disconnect()
            }
        }
    }, [])

    return {scrollEf, isIntersecting}
}