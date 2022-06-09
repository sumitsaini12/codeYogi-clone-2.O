// import React from 'react'

// const LectureList = () => {
//   return (
//     <div className="h-full bg-red-500 flex justify-center items-center">
//       <h1 className="text-9xl ">Lecture List </h1>
//     </div>
//   )
// }

// export default LectureList;


import React, { useState, useEffect } from "react";
import axios from 'axios';
import LectureCard from "./custemTags/LectureCard";

function LectureList() {

  const [lecture, setLecture] = useState([]);

  useEffect(() => {
    const token = axios.get(`https://api.codeyogi.io/batches/1/sessions`, {
      withCredentials: true,
    });

    token.then((response) => {

      console.log('response aa gya ');
      console.log(response.data);
      setLecture(response.data);
    });

  }, []);

  console.log('deta dikhao');

  return (

    <div className="py-5 px-12 rounded-lg bg-gray-50 shadow-xl mx-auto shrink-0 space-y-4">

      {lecture.map((a) => {
        return (
          <LectureCard props={a} />
        )
      })};

    </div>

  );
}

export default LectureList;


