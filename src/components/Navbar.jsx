import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { images } from '../constant'
import { List, XLg } from 'react-bootstrap-icons'

const Navbar = () => {

  const [ sidebar, setSidebar ] = useState(false)
  const [ bg, setBg ] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 90) {
      setBg(true)
    } else {
      setBg(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  const navBg = `sticky top-0 p-5 h-[100px] w-full duration-300`
  const navChangeBg = `sticky top-0 p-5 h-[100px] w-full bg-zinc-800 duration-300`
  
  return (
    <div className={ bg ? navChangeBg : navBg }>
        <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="me"
          spy={true} 
          smooth={true} 
          offset={-250} 
          duration={500}
        >
          <img src={bg ? images.logoW : images.logoB} alt="logo" className='cursor-pointer pt-2 w-40 lg:w-56' />
        </Link>

          <div className='space-x-8 ml-auto hidden lg:block'>
          <Link 
                  to="me"
                  href='#me'
                  spy={true} 
                  smooth={true} 
                  offset={-250} 
                  duration={500} 
                  className={`text-xl lg:text-2xl cursor-pointer ${bg && 'text-white'}`}
                  >Home</Link>

                  <Link 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={-150} 
                  duration={500} 
                  className={`text-xl lg:text-2xl cursor-pointer ${bg && 'text-white'}`}
                  >About</Link>

                  <Link 
                  to="project" 
                  spy={true} 
                  smooth={true} 
                  offset={-150} 
                  duration={500} 
                  className={`text-xl lg:text-2xl cursor-pointer ${bg && 'text-white'}`}
                  >Projects</Link>

                  <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-200} 
                  duration={500} 
                  className={`text-xl lg:text-2xl cursor-pointer ${bg && 'text-white'}`}
                  >Contact</Link>
          </div>



            {/* Menu */}
            <div className='block lg:hidden'>
              <List 
                size={50} 
                className={bg ? ' cursor-pointer text-white' : ' cursor-pointer'}
                onClick={ () => setSidebar(!sidebar)}
              />
            </div>

            { /* Overlay */}
            { sidebar && 
              <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" onClick={() => setSidebar(!sidebar)}>
              </div>
            }

            {/* Drawer */}
              <div className = {sidebar ? 'fixed top-0 right-0 w-1/2 lg:w-1/4 h-screen duration-300 text-center bg-white z-10 flex flex-col items-center pt-20 space-y-12' : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}  >                
                  
                  <div className='absolute top-5 left-5 cursor-pointer duration-200 hover:bg-black/80 p-2 rounded-full hover:text-white' onClick={() => setSidebar(!sidebar)}><XLg  size={30}/></div>

                  <Link 
                  to="me"
                  href='#me'
                  spy={true} 
                  smooth={true} 
                  offset={-250} 
                  duration={500} 
                  className='text-xl lg:text-2xl cursor-pointer'
                  onClick={() => setSidebar(!sidebar)}>Home</Link>

                  <Link 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={-150} 
                  duration={500} 
                  className='text-xl lg:text-2xl  cursor-pointer'
                  onClick={() => setSidebar(!sidebar)}>About</Link>

                  <Link 
                  to="project" 
                  spy={true} 
                  smooth={true} 
                  offset={-150} 
                  duration={500} 
                  className='text-xl lg:text-2xl  cursor-pointer'
                  onClick={() => setSidebar(!sidebar)}>Projects</Link>

                  <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-200} 
                  duration={500} 
                  className='text-xl lg:text-2xl  cursor-pointer'
                  onClick={() => setSidebar(!sidebar)}>Contact</Link>
              </div>
            
            
            
        </div>
      
    </div>
  )
}

export default Navbar