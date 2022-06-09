import React from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';

function QuizTitleBar() {
  
  return (
    <div className="h-14 bg-slate-800 flex justify-between">
    <div className='flex ml-3 '>
     <a href='https://app.codeyogi.io/' className='text-md font-bold text-white mt-4'>CodeYogi</a>
      <span className='ml-3 mr-3 text-white font-bold mt-4'>|</span>
      <h3 className='text-white font-medium text-md mt-4'>Welcome,sumit</h3>
      </div>
      <div className='flex m-1'>
         <span className='flex text-white py-3 px-3 bg-blue-500 w-20'><AiOutlineClockCircle className='text-white mt-1 mr-2' /> 00:00</span>
         <Link to="../lechures" className='flex text-white bg-blue-500 py-3 px-3  ml-3 mr-8'><BiLogOut className='text-white w-5 h-5 mt-1 mr-2' /> Log Out</Link>
         </div>
      </div>
  );
}

export default QuizTitleBar;
