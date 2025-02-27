import React from 'react'
import tickmark from "/Component 1.png"
import Nav from '../components/Nav'
const Home = () => {
    return (
        <div id="home">
            <Nav />
        <div  className='flex flex-col items-center justify-center' >
             

            <h1 className=" sm:text-3xl md:text-6xl font-bold text-red " >AI-Powered Unified Platform; <br></br><span className='flex justify-center gap-7'><span className='bg-gradient-to-r from-[#a8d2f4] via-[#254A76] to-[#254A76] inline-block text-transparent bg-clip-text'>Create</span> Effortlessly</span> </h1>

            <h2 className='text-sm sm:text-base md:text-lg  lg:text-xl  text-[#262626] mt-10 font-Poppins font-smibold sm:align-middle text-center'>
             Fast, Smart & Secure –Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools 
            </h2>

            <div className='flex flex-col sm:grid sm:grid-cols-3 gap-5 mt-7 align-middle justify-center'>

             <div className='flex gap-2 '>
                <img  className="size-4 mt-1.5" src={tickmark} alt="tickmark" />
                <p className='text-lg'>ESIGN Compliant</p> 
            </div> 

            <div className='flex gap-2'>
                <img  className="size-4 mt-1.5" src={tickmark} alt="tickmark" />
                 <p className='text-lg'>UETA Approved</p>
            </div>

            <div className='flex gap-2'>
                <img  className="size-4 mt-1.5" src={tickmark} alt="tickmark" />
                <p className='text-lg'>EIDAS Certified</p>

            </div>
            
            </div>

        </div> 
        </div>
    );
};

export default Home;


