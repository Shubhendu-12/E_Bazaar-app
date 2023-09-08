import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

const Products = (curElem) => {
    const {id,name,image,price,category} = curElem;
  return (
   
    <NavLink to={`/singleproduct/${id}`}>
    <div className="">
    <div>
        <figure>
        <img className="h-40 w-auto rounded-lg flex" src={image} alt={name}/>
        <figcaption className='font-medium font-sans'>
            {category}
        </figcaption>
        </figure>
    </div>
    <div className='flex justify-between'>
        <div>
        {name}
       </div>
       <div>
       <FormatPrice price={price}/>
       </div>
    </div>


    {/* <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    </div> */}
    </div>

    </NavLink>
    
  )
}

export default Products
