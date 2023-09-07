import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb';
import {MdOutlineSecurity} from 'react-icons/md';
import {GiReceiveMoney} from 'react-icons/gi';
import {RiSecurePaymentLine} from 'react-icons/ri';


const Services = () => {
  return (
    <>
    <div className=' items-center flex justify-center max-sm:flex-col max-md:flex-col'>
     {/* Main div  */}
     <div className='px-5 pt-8' > 
        {/* 1st div */}
          
<div class="max-w-sm  p-6 h-64 pt-24 bg-blue-50 border border-blue-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <div className=' flex justify-center'> <TbTruckDelivery size={32}/></div> 
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Super Fast and Free Delivery</h5>
    </a>
</div>

     </div>

    
     <div className='pt-16'>
     {/* 2nd div contains 2 more <div> inside */}
     <div>
        {/* 1st sub div */}
        <div class="max-w-sm p-6 bg-blue-50 border border-blue-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-50 flex">
     <div className=' flex justify-center items-center mr-8'> <MdOutlineSecurity size={32}/></div> 
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center justify-center space-x-2"> No-contact Shipping</h5>
    </a>
    </div>
     </div>
     <div className='pt-4'>
        {/* 2nd sub div */}
        <div class="max-w-sm p-6 bg-blue-50 border border-blue-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex">
     <div className=' flex justify-center  items-center mr-8'><GiReceiveMoney size={32} /></div> 
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Money back Guarantee</h5>
    </a>
    </div>
     </div>
     </div>

     <div className='px-5 pt-8 md:px-auto sm:px-auto'>
        {/* 3rd div  */}
        <div class="max-w-sm p-6 h-64 pt-24 bg-blue-50 border border-blue-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <div className=' flex justify-center mr-8'> <RiSecurePaymentLine size={32} /></div> 
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Super Secure Payment System</h5>
    </a>
    </div>
     </div>

    
     </div>
    </> 
  )
}

export default Services
