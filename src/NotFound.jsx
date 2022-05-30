import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    
    <div className="h-screen bg-slate-700 flex justify-center items-center flex-col space-y-3">
        <h1 className="text-9xl text-white ">Not Found</h1>
        <p className="text-white text-2xl">Sorry, this page is not found please click this button</p>
      <Link to="assignments" className="text-2xl text-white rounded-lg py-2 px-5 text-center border border-red-700 bg-red-500 "> Go back to Assignment</Link>
    </div>

  )
}

export default NotFound ;
