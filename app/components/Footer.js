import React from 'react'
import BaseLayout from './BaseLayout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-white font-medium
                      text-lg'>
        <BaseLayout className='py-8 flex items-center justify-between sm:flex-col'>
            <span className='sm:order-1'>{new Date().getFullYear()} &copy; All Right Reserved</span>
            <div className='flex items-center'>
                Build With <span className=' text-red-600 text-2xl px-1 sm:px-0'>&#9825;</span>
                by&nbsp; <Link href="/" className='underline'>Lingga Juliansyah</Link>
            </div>
        </BaseLayout>
    </footer>
  )
}

export default Footer