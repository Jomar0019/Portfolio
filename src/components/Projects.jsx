import React from 'react'
import { BoxArrowUpRight, Github } from 'react-bootstrap-icons'
import { images } from '../constant'

const Projects = () => {
  return (
    <div className='container mx-auto mt-[150px]' id='project'>
      <h2 className='text-2xl lg:text-5xl font-semibold text-center'>Projects</h2>
      <div className="grid lg:grid-cols-2 gap-5 mt-5 lg:mt-20 px-5">

      <div className='border rounded-lg overflow-hidden'>
          <img src={images.portfolio} alt=""/>
          <div className='flex bg-gray-800 py-2 justify-between px-5'>
            <div className="flex gap-5">
              <img src={images.react2} alt="html5" className='w-8'/>
              <img src={images.tailwind} alt="html5" className='w-8'/>

            </div>
            <div className='flex gap-5 items-center'>
              <a href="https://github.com/Jomar0019/Portfolio/tree/master"><Github size={28} color='white' /></a>
              <span className='text-white'>|</span>
              <a href="https://jomar0019.github.io/Portfolio"><BoxArrowUpRight size={24} color='white'/></a>
            </div>
          </div>
        </div>

        <div className='border rounded-lg overflow-hidden'>
          <img src={images.pizza24} alt=""/>
          <div className='flex bg-gray-800 py-2 justify-between px-5'>
            <div className="flex gap-5">
              <img src={images.html} alt="html5" className='w-9'/>
              <img src={images.css} alt="html5" className='w-9'/>
              <img src={images.tailwind} alt="html5" className='w-9'/>

            </div>
            <div className='flex items-center gap-5'>
              <a href="https://github.com/Jomar0019/24Pizza" target="_blank" rel="noreferrer noopener"><Github size={28} color='white' /></a>
              <span className='text-white'>|</span>
              <a href="https://jomar0019.github.io/24Pizza/" target="_blank" rel="noreferrer noopener"><BoxArrowUpRight size={24} color='white'/></a>
            </div>
          </div>
        </div>

        <div className='border rounded-lg overflow-hidden'>
          <img src={images.tenzie} alt=""/>
          <div className='flex bg-gray-800 py-2 justify-between px-5'>
            <div className="flex gap-5">
              <img src={images.react2} alt="html5" className='w-8'/>
              <img src={images.tailwind} alt="html5" className='w-8'/>

            </div>
            <div className='flex items-center gap-5'>
              <a href="https://github.com/Jomar0019/Tenzie-Game/tree/master" target="_blank" rel="noreferrer noopener"><Github size={28} color='white' /></a>
              <span className='text-white'>|</span>
              <a href="https://jomar0019.github.io/Tenzie-Game/" target="_blank" rel="noreferrer noopener"><BoxArrowUpRight size={24} color='white'/></a>
            </div>
          </div>
        </div>

        <div className='border rounded-lg overflow-hidden'>
          <img src={images.notes} alt=""/>
          <div className='flex flex-col lg:flex-row bg-gray-800 py-2 justify-between px-5'>
            <div className="flex justify-center  items-center lg:justify-start gap-5">
              <img src={images.mongo} alt="html5" className=' w-8'/>
              <img src={images.express} alt="html5" className=' w-10 h-8 px-1 rounded bg-white'/>
              <img src={images.react2} alt="html5" className=' w-8'/>
              <img src={images.node} alt="html5" className='w-8'/>
              <img src={images.tailwind} alt="html5" className='w-8'/>

            </div>
            <div className='flex items-center justify-center gap-5 mt-3 lg:mt-0'>
              <a href='$'><Github size={28} color='white' /></a>
              <span className='text-white'>|</span>
              <a href='$'><BoxArrowUpRight size={24} color='white'/></a>
            </div>
          </div>
        </div>

        <div className='border rounded-lg overflow-hidden'>
          <img src={images.seabnb} alt=""/>
          <div className='flex flex-col lg:flex-row bg-gray-800 py-2 justify-between px-5'>
            <div className="flex justify-center  items-center lg:justify-start gap-5">
              <img src={images.mongo} alt="html5" className=' w-8'/>
              <img src={images.express} alt="html5" className=' w-10 h-8 px-1 rounded bg-white'/>
              <img src={images.node} alt="html5" className='w-8'/>
              <img src={images.tailwind} alt="html5" className='w-8'/>

            </div>
            <div className='flex items-center justify-center gap-5 mt-3 lg:mt-0'>
              <a href="https://github.com/Jomar0019/seabnb/tree/master"><Github size={28} color='white' /></a>
              <span className='text-white'>|</span>
              <a href="$"><BoxArrowUpRight size={24} color='white'/></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects