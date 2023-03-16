import React, { useState } from 'react';
import OtpInput from "otp-input-react"
import logo from "../../assets/image/Subtract.png";
import './Verification.css'
const Verification = () => {
    const [otp, setOtp] = useState("");
    return (
        <div className="p-10 flex">
        <div className="w-1/2">
          <img src={logo} alt="" />
          <div className="mt-[188px] ml-[156px] w-[345px]">
            <h1 className="text-3xl font-bold mb-4 text-black">
              Enter the verification <br /> code to continue
            </h1>
            <p className='text-gray'>We send a code in your number, <br /> Please check your inbox.</p>
            {/* <label htmlFor="ph" className='font-bold text-gray text-2xl text-center'>
                Enter your OTP
            </label> */}
            <OtpInput
                 OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container mt-10"
            ></OtpInput>
            <button className="btn btn-primary mt-10 w-full mx-1">Next</button>
            <p className="text-blue mt-6 text-center font-semibold">Forgot Password</p>
          </div>
          <p className="mt-[268px]">
            Not member <span className="text-blue">Create Account</span>
          </p>
        </div>
        <div className="w-1/2">
        <p>HI</p>
        </div>
      </div>
    );
};

export default Verification;