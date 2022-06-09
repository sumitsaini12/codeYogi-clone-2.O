import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function AssignmentDetail() {

    const data = useParams();

    console.log(data);


    const [assignmentDetails, setAssignmentDetails] = useState([]);

    useEffect(() => {
      const token = axios.get(`https://api.codeyogi.io/assignments/:assignmentId`,{
        withCredentials: true,
      } );
  
      token.then((response) => {
  
        console.log('response aa gya assignments ');
        console.log(response.data);
        setAssignmentDetails(response.data);
      });
  
    }, []);


    // https://api.codeyogi.io/assignments/:assignmentId 

  return (

    <div className="h-screen  flex justify-center items-center">

      <h1 className="text-5xl">Details  to Assignments Number {data.assignmentNumber} </h1>
    </div>

  );
}

export default AssignmentDetail;
