import React from 'react'
import BaseLayout from './BaseLayout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium
                      text-lg'>
        <BaseLayout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
            <div className='flex items-center'>
                Build With <span className=' text-red-600 text-2xl px-1'>&#9825;</span>
                by&nbsp; <Link href="/" className='underline'>Lingga Juliansyah</Link>
            </div>
        </BaseLayout>
    </footer>
  )
}

export default Footer