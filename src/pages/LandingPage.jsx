import React from 'react'
import Logo from '../assets/freesample-logo.svg'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className=" bg-[url('assets/fs-hero-bg.png')] bg-no-repeat bg-cover h-screen text-fs-text px-24">
        <div id='header' className='h-[90px] border-b border-fs-light/20 flex text-sm'>
            <img src={Logo} width={120} alt="logo" />
            <div className="ml-auto">
            <Link to={`signin`}><button>Sign in</button></Link>
            <Link to={'signup'}><button className="h-full bg-fs-yellow px-8 ml-8">Sign up</button></Link>
            </div>
        </div>
        <div className="px-24">

        </div>
    </div>
  )
}

export default LandingPage