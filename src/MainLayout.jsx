import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar";

const MainLayout = () => {
    return (

        <div className="flex items-stretch h-screen">

            <Sidebar />

            <div className="p-2 bg-yellow-500 grow">
                <Outlet />
            </div>
        </div>

    )
}

export default MainLayout
