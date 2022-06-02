import React from "react";
import ProfileData from "./custemTags/ProfileData";

function ProfilePage() {

    return (
        <div>

            <div className="bg-white shadow p-4 rounded-md">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal detail</h3>
                <hr className="bg-gray-700 mt-4" />
                <ProfileData type={"text"} placeholder={"First Name"}>First Name</ProfileData>
                <ProfileData type={"text"} placeholder={"Last Name"}>Last Name</ProfileData>
                <ProfileData type={"email"} placeholder={"Email address"}>Email address</ProfileData>
                <ProfileData type={"selecter"} placeholder={"Institute Name"}>Institute Name</ProfileData>
                <ProfileData type={"year"} placeholder={"2022"}>Year Of Passout</ProfileData>
                <ProfileData type={"tel"} placeholder={"Phone Number"}>Phone Number</ProfileData>
                <ProfileData type={"date"} placeholder={"dob"}>Date Of Birth</ProfileData>
                <ProfileData type={"Selecter"} placeholder={""}>Device you are using to do your assignments *</ProfileData>
                <ProfileData type={"number"} placeholder={"Roll No."}>Institute roll no</ProfileData>
                <ProfileData type={"text"} placeholder={"Branch"}>Branch</ProfileData>

            </div>
        </div>
    );
};

export default ProfilePage;
