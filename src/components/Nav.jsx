import React from 'react'
import i from '/Container.png'
import social from '/Socials.png'
import {Button, ButtonGroup} from "@heroui/button";

const Nav = () => {
  return (
    <div className="max-w-7xl mx-auto mt-7 ntre mb-10">
        <div className="flex items-center    justify-between h-14 ">  
            <div className=' flex items-center justify-between px-4 py-3 sm:flex-col sm:items-center'>
            <img src={i} alt='logo' className='h-12 w-auto sm:w-auto '/>
            </div>
    
            <div className="hidden sm:flex md:flex items-center gap-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-10">
                <a href="#" className="text-[#262626]">Features</a>
                <a href="#" className="text-[#262626]">Why Choose Us</a>
                <a href="#" className="text-[#262626]">Pricing</a>
                <a href="#" className="text-[#262626]">FAQ</a>
            </div>
            <div className="flex items-center gap-4">
                <img src={social} alt="profile" className="h-10 w-auto "/>
                <Button variant="solid" color="Get Started" className='text-bold h-10 rounded-lg text-white  px-8 bg-[#254A76] border-0' >
                    Get Started
                </Button>
            </div>
            </div>
        </div>
    
    </div>
  )
}

export default Nav
