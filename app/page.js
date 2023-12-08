import Image from 'next/image'
import NavBar from './components/NavBar'
import BaseLayout from './components/BaseLayout'
import pp from '../public/images/pp.jpeg'
import AnimatedText from './components/AnimatedText'
import { LinkArrow } from './components/Icons'
import Link from 'next/link'
import Footer from './components/Footer'

export default function Home() {
  return (
      <>
      <BaseLayout>
      <div className='flex md:flex-col items-center justify-between w-full'>
              <div className='w-1/2 md:w-2/5 sm:w-2/3 md:my-3'>
                <Image src={pp} alt='poto propil' className='md:w-full w-3/5 h-auto rounded-full' 
                sizes='(max-width: 760px) 100vw,
                       (max-width: 200px) 75vw, 50vw'></Image>
              </div>

              <div className='w-1/2 md:w-full flex flex-col items-center self-center'>
                <AnimatedText text={"Hacking the Future. Inspiring Through Code"} 
                className='!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-4xl sm:!text-3xl md:!text-center'>

                </AnimatedText>
                <p className='my-4 text-base font-medium'>
                  Halo, Selamat datang!! Saya adalah seorang fullstack developer yang selalu haus akan ilmu pengetahuan khususnya teknologi. <br>
                  </br>Silahkan mengeksplorasi karya-karya yang telah saya buat dan hubungi saya jika anda perlu seorang developer. 
                </p>

                <div className='flex items-center self-start mt-2'>
                  <Link href="/LINGGA_RESUME.pdf" target={"_blank"} className='flex items-center text-black p-2.5 px-6 rounded-lg border-2 border-solid text-lg font-semibold 
                                          bg-white hover:bg-transparent hover:border-light hover:border-solid hover:text-light'>
                     Resume <LinkArrow className={"w-6 ml-1"}></LinkArrow>
                  </Link>

                  <Link href="mailto:linggaj28@gmail.com" className='ml-4 text-lg font-medium capitalize underline'>Contact Me</Link>
                </div>
              </div>
          </div>
      </BaseLayout>
      </>
  )
}
