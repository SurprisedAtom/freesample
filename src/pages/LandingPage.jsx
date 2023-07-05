import React from 'react'
import Logo from '../assets/freesample-logo.svg'

function LandingPage() {
  return (
    <div className=" bg-[url('assets/fs-hero-bg.png')] bg-no-repeat bg-cover h-screen text-fs-text px-24">
        <div id='header' className='h-[90px] border-b border-fs-light/20 flex text-xs'>
            <img src={Logo} width={120} alt="logo" />
            <div className="ml-auto">
            <button>Login</button>
            <button className="h-full bg-fs-yellow px-8 ml-8">Sign up</button>
            </div>
        </div>
        <div className="px-24">

        </div>
    </div>
  )
}

export default LandingPage