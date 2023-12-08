'use client';
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const MotionLink = motion(Link);

function Logo() {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 bg-light text-dark flex items-center justify-center rounded-full text-2xl'
        whileHover={{scale:1.3}}
        >LJ</MotionLink>
    </div>
  )
}

export default Logo