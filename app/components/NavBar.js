"use client";
import Link from 'next/link'
import { useRouter,usePathname } from 'next/navigation'
import React, { useState } from 'react'
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
                            h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
                            group-hover:w-full transition-[width] ease duration-300
                            ${pathName == href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

const CustomLinkMobile = ({href,title,className="",toggle})=>{
    const router = useRouter();
    const pathName = usePathname();
    
    const handleClick = () => {
        toggle()
        router.push(href)
    }


    return(
        <button className={`${className} text-dark relative group my-2`} onClick={handleClick}>
            {title}

            <span className={`
                            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
                            group-hover:w-full transition-[width] ease duration-300
                            ${pathName == href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </button>
    )
}

export default function NavBar () {
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
        <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between bg-black text-light sm:px-8'
        >
            
            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-white block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" className='' title={'Home'}></CustomLink>
                    <CustomLink href="/about" className='mx-4' title={'About'}></CustomLink>
                    <CustomLink href="/projects" className='mr-4' title={'Projects'}></CustomLink>
                </nav>


                <nav className='flex items-center justify-between flex-wrap'>
                    <motion.a href="https://www.instagram.com/lingjul_05/" className='w-6 ml-3' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}}>
                        <InstagramIcon></InstagramIcon>
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/lingga-juliansyah" target={"_blank"} className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}}><LinkedInIcon></LinkedInIcon></motion.a>
                    <motion.a href="https://www.github.com/enryahhh" className='w-6 mr-3' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}}><GithubIcon></GithubIcon></motion.a>
                </nav>
            </div>

            {
                isOpen ?
                <motion.div 
                initial={{scale:0,opacity:0, x:'-50%', y:'-50%'}}
                animate={{scale:1,opacity:1}}
                className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            bg-light/90 rounded-lg backdrop-blur-md py-32 sm:left-[12.5rem] sm:py-16 md:z-30'>
                <nav className='flex items-center flex-col justify-center'>
                    <CustomLinkMobile toggle={handleClick} href="/" className='' title={'Home'}></CustomLinkMobile>
                    <CustomLinkMobile toggle={handleClick} href="/about" className='' title={'About'}></CustomLinkMobile>
                    <CustomLinkMobile toggle={handleClick} href="/projects" className='' title={'Projects'}></CustomLinkMobile>
                </nav>


                <nav className='flex items-center justify-between flex-wrap'>
                    <motion.a href="https://www.instagram.com/lingjul_05/" className='p-0 text-center bg-dark rounded-md' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}}>
                        <InstagramIcon></InstagramIcon>
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/lingga-juliansyah" target={"_blank"} className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}}><LinkedInIcon></LinkedInIcon></motion.a>
                    <motion.a href="https://www.github.com/enryahhh" className='w-6 mr-3 bg-dark rounded-md' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}}><GithubIcon></GithubIcon></motion.a>
                </nav>
               </motion.div>
                : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%] sm:self-end sm:translate-x-[6.25rem]'>
                <Logo></Logo>
            </div>
        </header>
    </>
  )
}
