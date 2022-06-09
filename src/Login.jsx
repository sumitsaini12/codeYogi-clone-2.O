import React, { useState } from "react";
import InputTag from "./custemTags/InputTag";
import { string } from "yup";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidPassward, setIsValidPassword] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const attempLogni = () => {

        const emailValidator = string().email();
        const passwordValidater = string().min(8);

        const passwordValid = passwordValidater.isValidSync(password);
        const emailValid = emailValidator.isValidSync(email);
        setIsValidPassword(passwordValid);
        setIsValidEmail(emailValid);


        if (emailValid && passwordValid) {
            console.log('coll for API', email, password);

        } else {
            console.error('data invalid', email, password);
        }
    };




    return (

        <div className="flex items-center justity-center">
            <div className="p-4 rounded-lg bg-gray-500 flex flex-col justify-center w-96 space-y-2 shadow-lg  ">
                <InputTag error={!isValidEmail && 'email is not valid'} value={email} onChange={handleEmailChange} placeholder="Enter your E-mail" type="text" />
                <InputTag error={!isValidPassward && 'password is not long enough'} value={password} onChange={handlePasswordChange} placeholder="Enter your possword" type="text" />
                <button onClick={attempLogni} className="py-2 px-6 bg-indigo-500 rounded-lg text-2xl text-white border border-indigo-900 focus:bg-white focus:border-green-500 focus:text-green-500">Logni</button>
            </div>
        </div>
    );
}

export default Login;
