import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import InputTag from "../custemTags/InputTag";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DateTime } from 'luxon';

function AssignmentCard({ props }) {

  const [showPopup, submitShowPopup] = useState(false);
  const [submissionLink, setSubmissionLink] = useState(''); 

const navigate = useNavigate();

  const onLinkChange = (event) => {
    setSubmissionLink(event.target.value)
  }

  const submitAssignment = () => {

axios.put(`https//api.codeyogi.oi/${props.id}/submit`,
     {submissionLink}, {withCredentials: true} )
     submitShowPopup(false)

  }

  return (
    <div key={props.id}>
      <div  className="bg-white rounded-lg shadow-lg mx-auto shrink-0 p-5">
       <div onClick={() => navigate(`/assignments/${props.id}/Details`)}>
        <div className="flex">
          <div className="text-black font-bold text-xl"># {props.id} </div>
          <div className="text-black font-bold text-xl"> {props.title}</div>
        </div>
        <span>{DateTime.fromISO(props.due_date).toLocaleString(DateTime.DATE_MED)}</span>
        <MDEditor.Markdown source={props.description} className="p-2 rounded-md" />
      </div>
      
      <div>
      <button onClick={() => submitShowPopup(true)} className="bg-yellow-500 py-2 px-8 border border-gray-500 focus:bg-green-500">Submit</button>
      </div>
      </div>


      {showPopup && <div className="p-8 bg-indigo-500 rounded-lg flex justify-center item-center ">
        <InputTag value={submissionLink}  onChange={onLinkChange} placeholder="Enter Url Link" type="text" />
        <button onClick={submitAssignment} className=" bg-red-500 rounded-lg py-2 px-8 border border-gray-500 mb-4 text-mediem">Submit Url</button>
      </div>}
    </div>
  );
};

export default AssignmentCard;
