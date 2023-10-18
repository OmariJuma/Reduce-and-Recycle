import React from 'react'

const NavBar = () => {
  return (
    <nav className=' hidden md:flex font-poppins text-white w-full h-fit lg:px-24 lg:py-6 md:px-6 md:py-4 justify-between items-center'>
        <div className=' flex h-full items-center'>
            <img src='../../../public/signInLogoDesktop.svg'/>
            <p className=' font-semibold lg:text-3xl md:text-xl lg:ml-2'>Recyclit</p>
        </div>
        <ul className=' flex font-thin text-gray-300 lg:gap-10 md:gap-6 text-sm lg:text-base'>
            <li className=' cursor-pointer hover:text-[#7C9636]'>Recycle</li>
            <li className=' cursor-pointer hover:text-[#7C9636]'>Find me a nearby center</li>
            <li className=' cursor-pointer hover:text-[#7C9636]'>Schedule Pickup</li>
        </ul>
        <div className=' flex font-thin h-full items-center lg:gap-6 md:gap-3 text-sm lg:text-base'>
            <p className=' cursor-pointer hover:bg-[#7C9636] lg:px-5 lg:py-3 md:p-2 hover:rounded-lg'>Contact Us</p>
            <p className=' cursor-pointer bg-[#7C9636] lg:px-5 lg:py-3 md:p-2 rounded-lg hover:bg-transparent border border-[#7C9636]'>Get Started</p>
        </div>
    </nav>
  )
}

export default NavBar