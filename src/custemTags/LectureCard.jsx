import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { DateTime } from 'luxon';
// import { MdOutlineVideoLibrary } from 'react-icons/Md';

function LectureCard({ props }) {

    return (
        <>
            <div className="bg-white rounded-lg shadow-lg mx-auto shrink-0 p-5">
                <div>
                    <div className="flex">
                        <div className="text-black font-bold text-xl">Lecture # {props.id} </div>
                        <span className="pl-5 pt-1 text-gray-700">{DateTime.fromISO(props.created_at).toLocaleString(DateTime.DATE_MED)}</span>
                    </div>
                    <MDEditor.Markdown source={props.topic} className="markdown text-gray-700 " />
                    <a href={props.recording_url} target="_blank" className="w-full block px-2 pt-5 pb-2 text-center items-center justify-between text-gray-500 hover:text-gray-700">Watch/Download Recording</a>
                </div>


            </div>
        </>
    );
};

export default LectureCard;
