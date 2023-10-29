import React from 'react'
import souzparket from '../assets/logo/souzparket.svg'
import titaniumBlockchain from '../assets/logo/titanium-blockchain.svg'
import globalCollect from '../assets/logo/globalcollect.svg'
import vitoria from '../assets/logo/vitoria-2.svg'
import bolsBlue from '../assets/logo/bols-blue.svg'

const Trusted = () => {
  return (
    <>
      <div className='px-8  mx-auto'>
        {/* Main div */}
        <div className='flex items-center justify-center font-semibold my-6'>
            {/* 1st div */}
            Trusted by 1000+ companies
        </div>
        <div className='px-4 mx-40 h-20 flex items-center justify-around gap-x-4 max-sm:flex-col max-md:flex-col max-sm:h-auto max-md:h-auto '>
            {/* 2nd div */}
            <div className=' mx-4 px-4 max-sm:py-1 max-md:py-1'>
            <img className='h-12 w-12' src={souzparket} alt="logo" />
            </div>  
            <div className='mx-4 px-4'>
            <img className='h-12 w-12 ' src={titaniumBlockchain} alt="logo" />

            </div>
            <div className=' mx-4 px-4 max-sm:py-1 max-md:py-1'>
            <img className='h-16 w-16' src={globalCollect} alt="logo" />
            </div>

            <div className=' mx-4 px-4'>
            <img className='h-12 w-12' src={vitoria} alt="logo" />
            </div>
            <div className=' mx-4 px-4 max-sm:py-1 max-md:py-1'>
            <img className='h-12 w-12' src={bolsBlue} alt="logo" />

            </div>
        </div>
      </div>

    </>
  )
}

export default Trusted
