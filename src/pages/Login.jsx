import React from 'react'
import Logo from '../assets/freesample-logo.svg'

function Login() {
  return (
    <div className=' bg-circles bg-contain bg-no-repeat bg-fs-dark h-screen flex px-40 py-28 text-fs-text'>
      <div className='flex flex-col w-1/2 items-center justify-center'>
            <img src={Logo} width={220} alt="" />
            <p>Your free sample community</p>
      </div>
      <div className='w-1/2 '>
          <div className='border border-fs-gold border-opacity-40 rounded-md min-h-full flex flex-col px-10 justify-center bg-fs-dark/80 ' id='sign-up'>
            <p className=' text-sm font-light mb-2  '>Welcome back!</p>
            <h3 className=' text-2xl font-medium mb-14'>Sign in</h3>
            <form className='flex flex-col' action="">    
                <label className='text-sm font-light mb-2' htmlFor="email">Email</label>
                <input className='mb-5 text-sm p-2 rounded-sm' type="text" name='email' placeholder='email' />
                <label className='text-sm font-light mb-2' htmlFor="password">Password</label>
                <input className='mb-14 text-sm p-2 rounded-sm' type="text" name='password' placeholder='password' />
                <div>
                <button className=' btn-primary' type='submit'>Login</button>
                <button className=' text-sm ' >Don't have an account? <span className='underline'>Sign up</span></button>
                </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Login