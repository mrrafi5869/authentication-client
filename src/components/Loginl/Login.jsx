import React from "react";
import logo from "../../assets/image/Subtract.png";
import { AiFillEyeInvisible } from 'react-icons/ai';
const Login = () => {
  return (
    <div className="p-10 flex">
      <div className="w-1/2">
        <img src={logo} alt="" />
        <div className="mt-[188px] ml-[156px] w-[345px]">
          <h1 className="text-3xl font-bold mb-10">
            Welcome to <br /> Systempackage
          </h1>
          <div>
            <div className="relative flex justify-center items-center">
            <input
                type="text"
                placeholder="Name"
                className="input w-full mb-8 bg-gray-200 border"
            />
            <input
                type="text"
                placeholder="@gmail.com"
                className="input h-10 w-44 absolute right-1 top-1 flex justify-center items-center"
            />
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <input
                type="password"
                placeholder="Password"
                className="input w-full bg-gray-200"
            />
            <AiFillEyeInvisible className="absolute text-2xl right-2 top-0 h-full flex justify-center items-center cursor-pointer"></AiFillEyeInvisible>
          </div>
          <button className="btn btn-primary mt-10 w-full mx-1">Next</button>
          <p className="text-blue-600 mt-6 text-center font-semibold">Forgot Password</p>
        </div>
        <p className="mt-[268px]">
          Not member <span className="text-blue-600">Create Account</span>
        </p>
      </div>
      <div className="w-1/2">
      <p>HI</p>
      </div>
    </div>
  );
};

export default Login;
