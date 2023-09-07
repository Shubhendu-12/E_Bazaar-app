import React from 'react'
// import e_shopping_banner1 from '../assets/logo/E_bazaar_logo.png'

const style1 = {backgroundImage:'url("https://cdn.pixabay.com/photo/2018/03/26/23/07/dropshipping-3264486_1280.jpg")'};
// const style2= {opacity:'0.9'};
// const style3 = {backgroundAttachment: 'fixed'};
// const style3= {backgroundPosition: center}; 
// const style4 = {backgroundRepeat: no-repeat};
// These 2 didn't work but the opacity property worked



const HeroSection = () => {
  return (
    <>
     {/* https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg */}
    
<section className="bg-center bg-no-repeat bg-cover bg-opacity-90 bg-fixed bg-gray-700 bg-blend-multiply1"
style={{...style1}}>
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome to E Bazaar </h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">Your E market for every need, come explore new and exciting products</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
                Shop Now
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>
 
    </>
  )
}

export default HeroSection
