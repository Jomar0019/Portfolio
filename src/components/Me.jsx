import React from 'react'

const Me = () => {
  return (
    <div className='container mx-auto my-20 h-[75vh]  p-12 flex justify-center items-center' id='me'>
        <div className='text-center'>
            <h1 className='text-3xl lg:text-8xl font-bold'>I am Jomar Magpoot.</h1>
            <h2 className='text-2xl lg:text-6xl font-semibold mt-5 lg:my-10 text-gray-500'>Web Developer</h2>
            <a 
            href='https://docs.google.com/document/d/1gS1JFEoaSIxLm2xHs1mqc8BhvGcG17cg/edit?usp=sharing&ouid=109052017502887735938&rtpof=true&sd=true' 
            className='mt-5 lg:mt-10 border border-black py-1 lg:py-3 px-5 lg:px-12 text-lg lg:text-xl hover:text-white hover:bg-black transition duration-300'
            target='_blank'
            rel='noreferrer'
            >Resume</a>
        </div>
    </div>
  )
}

export default Me