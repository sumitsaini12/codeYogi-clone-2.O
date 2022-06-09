import React from 'react'

import { Link } from "react-router-dom";
import { MdOutlineQuiz, MdOutlineAssignment } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { BiCommentDetail } from 'react-icons/bi';


const Sidebar = () => {
    return (
        <div className="hidden md:flex flex-col justify-between w-72 space-y-4 h-screen bg-slate-500 p-2">
            <div className="space-y-4">
                <h1 className="text-white font-bold text-5xl text-center ">CodeYogi</h1>

                <Link to="/quiz" className="flex py-1 pl-5 w-68 rounded-lg bg-slate-800 border border-black hover:bg-gray-500 focus:bg-black text-2xl text-white"><MdOutlineQuiz className='w-8 h-8 mr-3' />Quiz </Link >
                <Link to="/assignments" className="flex py-1 pl-5 w-68 rounded-lg bg-slate-800 border hover:bg-gray-500 border-black focus:bg-black text-2xl text-white"> <MdOutlineAssignment className='w-8 h-8 mr-3' /> Assingment </Link >
                <Link to="/lechures" className="flex py-1 pl-5 w-68 rounded-lg bg-slate-800 border hover:bg-gray-500 border-black focus:bg-black text-2xl text-white" ><GiTeacher className='w-8 h-8 mr-3' /> Lectures </Link >
                <Link to='/Details' className="flex py-1 pl-5 w-68 rounded-lg bg-slate-800 border hover:bg-gray-500 border-black focus:bg-black text-2xl text-white"> <BiCommentDetail className='w-8 h-8 mr-3' />Student Details</Link>
            </div>
            <div>
                <Link to='/profile' className="flex py-1 pl-5 w-68 rounded-lg bg-slate-800 border hover:bg-gray-500 border-black focus:bg-black text-2xl text-white" > <CgProfile className='w-8 h-8 mr-3' /> Profile</Link>
            </div>
        </div>

    )
}

export default Sidebar;
