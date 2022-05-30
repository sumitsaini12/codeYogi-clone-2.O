import React from 'react'
import { useParams } from 'react-router-dom'

const AssignmentDetails = () => {

    const data = useParams();

    return (

        <div className="h-full bg-pink-500 flex justify-center items-center">
            <h1 className="text-3xl text-white">Details of assignment number {data.assignmentNumber}</h1>
        </div>

    )
}

export default AssignmentDetails
