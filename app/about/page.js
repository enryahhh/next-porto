import NavBar from '../components/NavBar'
import BaseLayout from '../components/BaseLayout'
import AnimatedText from '../components/AnimatedText'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import { LinkArrow } from '../components/Icons'
import Link from 'next/link'
import Image from 'next/image'
import pp from '../../public/images/pp.jpeg'
import Education from '../components/Education'

export default function About() {
    return (
        <>
        <BaseLayout className='pt-12'>
          <AnimatedText text={"About Lingga Juliansyah"} className='!text-6xl !text-center mb-14 md:!text-3xl sm:!text-2xl' ></AnimatedText>
          <div className='grid w-full grid-cols-6 gap-16'>
              <div className='col-span-3 md:col-span-6 flex flex-col item-start justify-start md:order-2 md:text-justify'>
                  <h2 className='mb-4 text-lg font-bold uppercase text-white/90'>Tentang Saya</h2>

                  <p className='font-medium'>
                  Saya seorang lulusan baru dari Universitas Komputer Indonesia jurusan Teknik Informatika. Saya berfokus pada spesialisasi dalam pengembangan perangkat lunak, khususnya di bidang backend. 
                  Sejak awal perkuliahan, saya telah membentuk fondasi yang kokoh dalam konsep-konsep pemrograman dan arsitektur perangkat lunak.
                  </p>


                  {/* <p className='font-medium my-3'>
                  Pengalaman akademis saya mencakup berbagai proyek pengembangan perangkat lunak yang menekankan pengetahuan mendalam tentang backend systems dan mobile apps.
                  Saya memahami kompleksitas dalam merancang dan mengimplementasikan server-side logic serta memahami database management system dan yang lainnya.
                  </p> */}

                  <p className='font-medium my-3'>
                    Selama kuliah , saya telah melakukan magang 2x. Pengalaman magang yang pertama saya menjadi bagian dari tim mobile developer yang menggunakan flutter untuk membangun
                    sebuah aplikasi pendanaan bernama Danakoo Syariah, proyek tersebut memungkinkan saya untuk merancang dan mengimplementasikan aplikasi mobile yang responsif dan inovatif.
                  </p>

                  <p className='font-medium my-3'>
                  Selain itu, saya juga memiliki pengalaman kedua sebagai web developer, dengan membuat sebuah Inventory Management System dengan Laravel dan Vue.js. 
                  Selama proyek tersebut, saya terlibat dalam merancang dan mengembangkan antarmuka pengguna yang interaktif menggunakan Vue.js, serta membangun backend yang kuat dan efisien dengan Laravel.
                  </p>


                  {/* <p className='font-medium'>
                  Keinginan saya untuk terus memperdalam pengetahuan saya dalam pengembangan backend mendorong saya untuk menguasai berbagai teknologi terkini yang relevan.
                  Dengan keterampilan ini, saya siap untuk menghadapi tantangan dalam menciptakan solusi-solusi efisien dan andal di dunia pengembangan web
                  </p> */}

              </div>

              <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
              shadow-[15px_10px_0px_0_rgba(0,0,0,1)] md:col-span-4 md:order-1 md:col-start-2'>
              {/* <div className='absolute top-0 -z-5 -right-[1.5rem] w-[102%] h-[100%] rounded-[2rem] bg-dark'/> */}
                    <Image src={pp} className='w-full h-auto rounded-2xl' sizes='(max-width: 760px) 100vw,
                       (max-width: 200px) 75vw, 50vw'></Image>
              </div>
          </div>

          <Skills></Skills>

          <Experience></Experience>

          <Education></Education>

        </BaseLayout>
        </>
    );
}