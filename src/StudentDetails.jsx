import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentDetailCard from "./custemTags/StudentDetailCard";
import { DateTime } from 'luxon';

function StudentDetails() {



  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = axios.get("https://randomuser.me/api/?results=10");

    token.then((response) => {

      console.log('response aa gya ');
      console.log(response.data.results);
      setUsers(response.data.results);
    });

  }, []);

  const cleanUpData = users.map((u) => {
    const user = {
      name: `${u.name.title} ${u.name.first} ${u.name.last}`,
      age: u.dob.age,
      email: u.email,
      picture: u.picture.large,
      dob: DateTime.fromISO(u.dob.date).toLocaleString(DateTime.DATE_MED)
    };

    return user;

  });

  console.log('deta dikhao');
  console.log("sumit saini", cleanUpData);

  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500 text-center mb-3">student List</h1>
      <div className="bg-white max-w-screen-lg mx-auto p-5 rounded-lg ">
        <div class='flex flex-wrap justify-between gap-5 mt-2'>

          {cleanUpData.map((a) => {
            return (

              <StudentDetailCard user={a} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;

