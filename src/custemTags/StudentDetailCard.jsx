import React from "react";
import { FaInstagramSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';


function StudentDetailCard({ user }) {

    return (

        <div className="bg-green-500 w-64 h-86 rounded-lg mx-auto shrink-0 p-3">
            <img className=" mx-auto rounded-md  h-48 w-48 mt-3 object-cover " src={user.picture} />
            <div className=" mt-2">
                <div className=" font-semibold truncate">
                    <div className="text-xl text-white font-medium"><span className="text-black">Name:-</span> {user.name} </div>
                    <div className="text-indigo-600"><span className="text-black text-xl">E-mail:-</span> {user.email}</div>
                    <div className="text-xl text-red-500"><span className="text-black">DOB:-</span>{user.dob}</div>
                </div>
                <div className="flex flex-shrink-0 mt-3">

                 <BsTwitter className="w-8 h-8 mr-3 text-blue-500" />
                <FaInstagramSquare className="w-8 h-8 mr-3 text-pink-500" /> 
                   

                </div>
            </div>
        </div>
    );
};

export default StudentDetailCard;
