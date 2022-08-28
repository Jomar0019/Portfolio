import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { CheckLg } from 'react-bootstrap-icons';

const Contact = () => {
  const form = useRef();
  const [ success, setSuccess ] = useState(false) 

  const handleSubmit = e => {
    e.preventDefault()

    emailjs.sendForm('service_c5b0xg7', 'template_dh3lxu7', form.current, 'Y6a4xsu-3998DYwGF')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset();
  }


  return (
    <div className='container mx-auto my-[200px]' id='contact'>
      <h2 className='text-2xl lg:text-5xl font-semibold text-center'>Contact</h2>
      <div className='flex items-center justify-center mt-5 lg:mt-12 p-5'>
        <form ref={form} className='w-full lg:w-1/2 p-5 border border-black rounded-lg' onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='fullname'
                className='border w-full py-2 px-4 mt-5' 
                placeholder='Name'
            />
            <input 
                type="text" 
                name='email'
                className='border w-full py-2 px-4 mt-5' 
                placeholder='Email'
            />
            <textarea 
                placeholder='Message'
                name='message'
                className='border w-full py-2 px-4 mt-5 '
                rows={8}
            />
            <div className="flex justify-end items-center mt-5 space-x-2">
              { success && <p className='text-sm text-green-600'>Submitted!</p>}
              { success && <CheckLg size={30} className="border rounded-full p-1 text-green-400 bg-green-50 border-green-400" />}
              <button className='bg-black py-1 px-5 text-white text-lg'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact