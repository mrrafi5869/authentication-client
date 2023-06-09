import React, { useContext, useEffect, useState } from "react";
import "./Verification.css";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";
import logo from "../../assets/image/Subtract.png";
import GbSwiper from "../Swiper/GbSwiper";
import { Link, useNavigate } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { AuthContext } from "../../context/AuthProvider";

const Verification = () => {
  const [otp, setOtp] = useState("");
  const {email} = useContext(AuthContext);
  const navigate = useNavigate();

  function onOTPVerify() {
    navigate("/success")
  }

  const [counter, setCounter] = useState(59);
  useEffect(() => {
      const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
    
  return (
    <div className="py-10 p-2">
      <img src={logo} alt="" className="ml-12"/>
      <div className="lg:flex justify-center items-center">
        <div className="lg:w-1/2">
          <div id="recaptcha-container"></div>
            <div className="mt-[188px] w-[300px] md:w-[345px] mx-auto">
              <h1 className="text-3xl font-bold mb-4 text-black">
                Enter the verification <br /> code to continue
              </h1>
              <p className="text-gray-400">
                We sent to <span className="text-blu font-semibold">{email}</span>, <br /> If you don't see, Please check your spam.
              </p>
              <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container mt-10"
              ></OtpInput>
              <div className="flex justify-between mt-4 text-blu font-semibold px-1">
              <Link to="/login" className="">
                Back
              </Link>
              {
                <p className="text-gray-400">00:{ counter < 10 ? "0" + counter : counter}</p>
              }
              </div>
              
              <button class="btn btn-primary w-full mt-10 mb-4 relative group overflow-hidden flex space-x-2 items-center" onClick={onOTPVerify}>
                <span class="relative text-sm text-white transition-all duration-300 group-hover:scale-x-100 group-hover:mr-2">Next</span>
                <div class="flex items-center -space-x-3">
                  <div class="rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <BiRightArrowAlt className="h-7 w-7 text-white hidden stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0 group-hover:block"></BiRightArrowAlt>
                </div>
              </button>
            </div>
          
        </div>
        <div className="lg:w-1/2 hidden lg:block">
          <GbSwiper></GbSwiper>
        </div>
      </div>
    </div>
  );
};

export default Verification;
