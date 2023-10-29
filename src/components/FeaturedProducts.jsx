import React,{useContext} from 'react'
import { AppContext } from '../context/ProductContext';
import Products from './Products';



const FeaturedProducts = () => {
    const {isLoading,featureProducts} = useContext(AppContext);

    if (isLoading) {
        return <div>
            .....Loading
        </div>
    }
  return (
    <div>
      <div className='pt-4 ml-32 pl-20'>
        {/* 1st div  */}
        Check Out!
      </div>
      <div className='text-2xl font-semibold pb-6 pl-20 ml-32'>
      {/* 2nd div  */}
      Our Feature Services 
      </div>
      <div className='flex mx-20 px-6 h-auto justify-around max-sm:flex-col max-md:flex-col'>
        {featureProducts.map((curElem)=> {
            return <Products key={curElem.id} {...curElem}/>
        })}
      </div>
    </div>
  )
}

export default FeaturedProducts
