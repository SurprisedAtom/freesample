import React from 'react'
import Logo from '../assets/freesample-logo.svg'

function LandingPage() {
  return (
    <div className=" bg-[url('assets/fs-hero-bg.png')] bg-no-repeat bg-cover h-screen">
        <div id='header'>
            <img src={Logo} width={120} alt="logo" />
        </div>
    </div>
  )
}

export default LandingPage