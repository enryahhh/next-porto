"use client";
import Link from 'next/link'
import { useRouter,usePathname } from 'next/navigation'
import React from 'react'
import Logo from './Logo'
import InstagramIcon, { GithubIcon, LinkedInIcon } from './Icons';
import {motion} from "framer-motion"

const CustomLink = ({href,title,className=""})=>{
    const router = useRouter();
    const pathName = usePathname();
    console.log(router);
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
                            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
                            group-hover:w-full transition-[width] ease duration-300
                            ${pathName == href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

export default function NavBar () {
  return (
    <>
        <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >
            <nav>
                <CustomLink href="/" className='' title={'Home'}></CustomLink>
                <CustomLink href="/about" className='mx-4' title={'About'}></CustomLink>
                <CustomLink href="/projects" className='mr-4' title={'Projects'}></CustomLink>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo></Logo>
            </div>

            <nav className='flex items-center justify-between flex-wrap'>
                <motion.a href="https://www.instagram.com/lingjul_05/" className='w-6 ml-3' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}}>
                    <InstagramIcon></InstagramIcon>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/lingga-juliansyah" target={"_blank"} className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}}><LinkedInIcon></LinkedInIcon></motion.a>
                <motion.a href="https://www.github.com/enryahhh" className='w-6 mr-3' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}}><GithubIcon></GithubIcon></motion.a>
            </nav>
        </header>
    </>
  )
}
