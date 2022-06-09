import React from "react";
import LectureList from "./LectureList";
import AssignmentList from "./AssignmentList";
import Quiz from "./Quiz";
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import AssignmentDetails from "./AssignmentDetails";
import ProfilePage from "./ProfilePage";
import StudentDetails from "./StudentDetails";
import Login from "./Login";

import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="lechures" />} />
      <Route path="*" element={<NotFound />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/" element={<MainLayout />} >
        <Route path="assignments" element={<AssignmentList />} />
        <Route path="Details" element={<StudentDetails />} />
        <Route path="assignments/:assignmentNumber/Details" element={<AssignmentDetails />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="lechures" element={<LectureList />} />
      </Route>
    </Routes>

  );
}

export default App;
