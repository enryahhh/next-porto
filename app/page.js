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
      <div className='flex items-center justify-between w-full'>
              <div className='w-1/2'>
                <Image src={pp} alt='poto propil' className='w-3/5 h-auto rounded-full'></Image>
              </div>

              <div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedText text={"Hacking the Future. Inspiring Through Code"} className='!text-5xl !text-left'>

                </AnimatedText>
                <p className='my-4 text-base font-medium'>
                  Halo, Selamat datang!!Saya adalah seorang fullstack developer yang selalu haus akan ilmu pengetahuan khususnya teknologi. <br>
                  </br>Silahkan mengeksplorasi karya-karya yang telah saya buat dan hubungi saya jika anda perlu seorang developer. 
                </p>

                <div className='flex items-center self-start mt-2'>
                  <Link href="/LINGGA_RESUME.pdf" target={"_blank"} className='flex items-center text-light p-2.5 px-6 rounded-lg border-2 border-solid text-lg font-semibold 
                                          bg-black hover:bg-transparent hover:border-black hover:border-solid hover:text-dark'>
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
