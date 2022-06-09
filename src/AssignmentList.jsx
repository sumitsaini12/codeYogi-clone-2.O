import React, { useState, useEffect } from "react";
import axios from 'axios';
import AssignmentCard from "./custemTags/AssignmentCard";

function AssignmentList() {

  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    const token = axios.get(`https://api.codeyogi.io/batches/1/assignments`,{
      withCredentials: true,
    } );

    token.then((response) => {

      console.log('response aa gya assignments ');
      console.log(response.data);
      setAssignment(response.data);
    });

  }, []);

  console.log('deta dikhao assignments');

  return (

    <div className="py-5 px-12 rounded-lg bg-gray-50 shadow-xl mx-auto shrink-0 space-y-4">
     
    {assignment.map((a) => {
      return (

        <AssignmentCard props={a} key={a.id} />
      )
    })}
    </div>

  );
}

export default AssignmentList;
