import React from 'react'
import { images } from '../constant'

const Footer = () => {

  const getYear = new Date().getFullYear()

  return (
    <div className='mt-12 mb-6 px-10'>
        <hr className=''/>
        <div className="flex justify-between items-center pt-3">
            <p className='text-sm text-gray-500'>{getYear} Jomar Magpoot.</p>
            <div className="flex gap-5">
                <a href="https://www.facebook.com/Jomar0019" className='hover:-translate-y-1 duration-200'><img src={images.facebook} alt=""  className='w-8'/></a>
                <a href="/" className='hover:-translate-y-1 duration-200'><img src={images.gmail} alt="" className='w-8'/></a>
                <a href="https://www.linkedin.com/in/jomar-magpoot-69895b238/" className='hover:-translate-y-1 duration-200'><img src={images.linkedIn} alt=""  className='w-8'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer