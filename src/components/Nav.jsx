import React from 'react'
import i from '/Container.png'
import social from '/Socials.png'
import {Button, ButtonGroup} from "@heroui/button";

const Nav = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14">  
            <img src={i} alt='logo' className='h-12 w-auto sm:h-14'/>
            <div className="hidden md:flex items-center gap-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-10">
                <a href="#" className="text-[#262626]">Features</a>
                <a href="#" className="text-[#262626]">Why Choose Us</a>
                <a href="#" className="text-[#262626]">Pricing</a>
                <a href="#" className="text-[#262626]">FAQ</a>
            </div>
            <div className="flex items-center gap-4">
                <img src={social} alt="profile" className="h-12 w-12 rounded-full"/>
                <Button variant="solid" color="Get Started" className='text-bold h-12 rounded-lg text-white  px-8 bg-[#254A76] border-0' >
                    Get Started
                </Button>
            </div>
            </div>
        </div>
    
    </div>
  )
}

export default Nav
