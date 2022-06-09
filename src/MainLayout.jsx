import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar";

const MainLayout = () => {
    return (

        <div className="flex items-stretch h-screen">

            <Sidebar />

            <div className=" px-8 py-16 bg-gray-200 grow">
                <Outlet />
            </div>
        </div>

    )
}

export default MainLayout
