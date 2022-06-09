import React from 'react'
import QuizTitleBar from "./custemTags/QuizTitleBar";

const Quiz = () => {
  return (
    <>
      <QuizTitleBar />
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-xl">No Active Question</h1>
      </div>
    </>
  )
}

export default Quiz
