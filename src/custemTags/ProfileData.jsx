import React from "react";
import InputTag from "./InputTag";

function ProfileData(props) {

  return (
    <div>
   <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
         <div className="">
         <span className="text-sm font-medium text-gray-500">{props.children}</span>
        </div>
        <div className="">
         <InputTag placeholder={props.placeholder} type={props.type} value={props.value} />
        </div>
    </div>
    <hr className="hidden md:block" />
</div>
  );
};

export default ProfileData;
