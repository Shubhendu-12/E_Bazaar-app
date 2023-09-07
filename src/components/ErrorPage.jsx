import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useContext } from 'react'
// import AppContext from '../context/ProductContext'

const ErrorPage = () => {
    // const {name} = useContext(AppContext);

  return (
    <>
     {/* <p> {name}</p> */}
      <div className='flex justify-center text-7xl mt-12 '>404 </div>
      <div className='flex justify-center text-2xl my-6 font-semibold'> UH OH! Looks like you are lost</div>
      <div className='flex justify-center text-xl my-4'><p>Nobody knows how you got here,but it's time to <span className='underline underline-offset-auto'>Go Back Home</span></p></div>
      <div className='flex justify-center mt-2 mb-24 '>
      <NavLink to={'/'} >
     <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back Home</button>
     </NavLink>
     </div>
    </>
  )
}

export default ErrorPage
