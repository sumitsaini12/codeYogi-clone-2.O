import React from "react";


function InputTag(props) {

  return (
    <div>
      <input type={props.type} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10  undefined bg-gray-50
    rounded-md
    " placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
      <div className="h-5">
        {props.error && (<span className="text-center mt-[-5] text-red-500">{props.error}</span>)}
      </div>
    </div>

  );
};

export default InputTag;
