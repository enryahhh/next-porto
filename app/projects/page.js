import BaseLayout from '../components/BaseLayout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import pp from '../../public/images/pp.jpeg'
import { GithubIcon } from '../components/Icons'

const FeaturedProjects = ({type,title,summary,img})=>{

    return (
            <article className='w-full flex items-center justify-between rounded-3xl border
            border-solid border-dark bg-light shadow-2xl p-12'>
                <Link href='/' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} className="w-full h-auto"/>
                </Link>

                <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                    <span className='text-blue-700 font-medium text-xl'>{type}</span>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                    <p className='my-2 font-medium text-dark '>{summary}</p>
                </div>
            </article>
    )
}

const Project = ({type,title,img,summary})=>{

    return (
            <article className='w-full flex flex-col items-start justify-center rounded-2xl border
            border-solid border-dark bg-light shadow-2xl p-6'>
                <Link href='/' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} className="w-full h-auto"/>
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-blue-700 font-medium text-xl'>{type}</span>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                    <p className='w-full'>{summary}</p>
                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href='/' className='text-lg font-semibold underline'>
                            Visit
                        </Link>
                        <Link href='/' target='_blank' className='w-8'>
                        {" "}
                        <GithubIcon></GithubIcon>
                        </Link>
                    </div>
                </div>
            </article>
    )
}

export default function Projects() {
    return (
        <>
        <BaseLayout className='pt-12'>
          <AnimatedText text={"Programming is the closest thing we have to magic."} className='!text-6xl !text-center mb-14'></AnimatedText>
          
            <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-12'>
                    <FeaturedProjects title={'judul'} img={pp} type='Featured Project' summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis nunc id nibh viverra scelerisque vel quis leo. 
                    Phasellus massa tortor, vehicula quis turpis semper, ullamcorper cursus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Maecenas convallis vitae lectus in imperdiet. Nulla ullamcorper scelerisque ultricies.' >

                    </FeaturedProjects>
                </div>

                <div className='col-span-6'>
                    <Project title={'judul'} img={pp} type='Project' summary='Maecenas convallis vitae lectus in imperdiet. Nulla ullamcorper scelerisque ultricies.'></Project>
                </div>
            </div>
        </BaseLayout>
        </>
    );
}