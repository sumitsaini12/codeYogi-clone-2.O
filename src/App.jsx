import React from "react";
import LectureList from "./LectureList";
import AssignmentList from "./AssignmentList";
import Quiz from "./Quiz";
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import AssignmentDetails from "./AssignmentDetails";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="lechures" />} />
      <Route path="*" element={<NotFound />} />
      <Route path="quiz" element={<Quiz />} />

      <Route path="/" element={<MainLayout />} >
        <Route path="assignments" element={<AssignmentList />} />
        <Route path="assignments/:assignmentNumber/Details" element={<AssignmentDetails />} />

        <Route path="lechures" element={<LectureList />} />
      </Route>
    </Routes>

  );
}

export default App;
