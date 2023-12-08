'use client';
import React, { useRef } from 'react'
import {motion,useScroll} from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({position,company,time,work}) => {
    const ref = useRef(null)
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl'>{position}&nbsp; in <span className='text-blue-700'>{company}</span></h3>
                <span className='capitalize font-small text-white/75 sm:text-md'>
                    {time}
                </span>
                <p className='font-medium w-full sm:text-sm text-justify'>
                    {work}
                </p>
            </motion.div>
        </li>)
}

function Experience() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
  return (
    <>
        <div className='my-52 sm:my-15'>
            <h2 className='font-bold text-6xl mt-20 sm:mt-5 w-full text-center mb-16 sm:text-3xl'>Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative sm:w-full'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-emerald-500 origin-top'></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details position={"Mobile Developer"} company={"PT DEVATEK"} time="November 2019 - Februari 2020" work="Membangun sebuah aplikasi keuangan berbasis syariah bernama Danakoo dengan menggunakan flutter yang terintegrasi dengan API." />
                    <Details position={"WEB Developer"} company={"PT DEVIXEL TEKNOLOGI INDONESIA"} time="September 2022 - November 2022" work="Membangun sebuah aplikasi sistem informasi manajemen aset untuk perusahaan dengan menggunakan Laravel, Inertia dan Vue JS" />
                </ul>
            </div>
        </div>
    </>
  )
}

export default Experience