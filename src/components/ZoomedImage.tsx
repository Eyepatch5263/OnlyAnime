"use client"

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'

const ZoomedImage = ({ className, imgSrc }: { className?: string, imgSrc: string }) => {
    const [mousePointer, setMousePointer] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = (e.target as HTMLDivElement).getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePointer({ x: x, y: y })

    }

    return (
        <div onMouseMove={(e)=>handleMouseMove(e)} className={cn("w-full relative overflow-hidden h-96", className)}>
            <Image alt="Product Image" src={imgSrc} fill style={{ transformOrigin:`${mousePointer.x}% ${mousePointer.y}%` }} className='transition-transform duration-500 ease-in-out transform hover:scale-[2.5] cursor-pointer' />
        </div>
    )
}

export default ZoomedImage
