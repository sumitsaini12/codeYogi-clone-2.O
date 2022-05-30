import React from 'react'

import { Link } from "react-router-dom";

const Sidebar = () => {
    return (

        <div className="w-72 flex flex-col space-y-4 h-screen bg-slate-500 p-2">

            <h1 className="text-white font-bold text-5xl text-center ">CodeYogi</h1>

            <Link to="/quiz" className="py-1 pl-5 w-68 rounded-lg bg-slate-800 border border-black focus:bg-black text-2xl text-white">Quiz </Link >
            <Link to="/assignments" className="py-1 pl-5 w-68 rounded-lg bg-slate-800 border border-black focus:bg-black text-2xl text-white">Assingment </Link >
            <Link to="/lechures" className="py-1 pl-5 w-68 rounded-lg bg-slate-800 border border-black focus:bg-black text-2xl text-white" > Lectures </Link >
        </div>

    )
}

export default Sidebar;
