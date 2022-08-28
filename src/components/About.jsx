import React from 'react'

import { images } from '../constant'

const About = () => {
  return (
    <div className='container mx-auto my-[100px] px-3 lg:p-0' id='about'>
        <h2 className='text-2xl lg:text-5xl font-semibold text-center'>About</h2>
        <div className="border border-black rounded-lg mt-5 lg:mt-20 p-5 lg:p-12">
            <p className='lg:text-xl leading-relaxed text-center'>
                I'm a web developer who is passionate about building Web applications. I am the kind of person who is open for learning and strives to build new skills.
            </p>
        </div>
        <div className='flex-col lg:flex-row flex gap-5 mt-5 lg:mt-10'>
            <div className="basis-2/5 mt-5 lg:mt-0 p-8 border border-black rounded-lg grid grid-cols-3 gap-5 items-center justify-items-center">
                <img src={images.html} alt="html5" className='w-12 lg:w-20'/>
                <img src={images.css} alt="css3" className='w-12 lg:w-20'/>
                <img src={images.js} alt="js" className='w-12 lg:w-20'/>
                <img src={images.tailwind} alt="tailwind" className='w-12 lg:w-20'/>
                <img src={images.bootstrap} alt="bootstrap"className='w-12 lg:w-20'/>
                <img src={images.react} alt="react"className='w-12 lg:w-20'/>
                <img src={images.node} alt="node" className='col-span-3 mx-auto w-12 lg:w-20' />
            </div>
            <div className="basis-3/5 mt-5 lg:mt-0 p-5 lg:p-10 border border-black rounded-lg flex items-center justify-center">
                <div className='w-full lg:text-lg'>
                    <div className="flex justify-between mt-5">
                        <p className='pr-3'>College</p>
                        <p className=''>Datacom Institure of Computer Technology.</p>
                        <p className=''>2019-2021</p>
                    </div>
                    <hr  className='mt-3 border-gray-300'/>
                    <div className="flex justify-between mt-5">
                        <p>Senior High School</p>
                        <p>Souther Philippines Institute of Science and Technology.</p>
                        <p>2016-2018</p>
                    </div>
                    <hr  className='mt-3 border-gray-300'/>
                    <div className="flex justify-between mt-5">
                        <p>Junior High School</p>
                        <p>General Emilio Aguinaldo National High School.</p>
                        <p>2012-2016</p>
                    </div>
                    <hr  className='mt-3 border-gray-300'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About