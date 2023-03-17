import React, { useState } from "react";
import "./Verification.css";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";
import logo from "../../assets/image/Subtract.png";
import PhoneInput from "react-phone-input-2";
import { CgSpinner } from "react-icons/cg";
import { auth } from "../../Firebase/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import GbSwiper from "../Swiper/GbSwiper";
import { Link, useNavigate } from "react-router-dom";

const Verification = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        navigate("/success");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div className="py-10 p-2">
      <Toaster toastOptions={{ duration: 4000 }} />
      <img src={logo} alt="" />
      <div className="lg:flex justify-center items-center">
        <div className="w-1/2">
          <div id="recaptcha-container"></div>
          {showOTP ? (
            <div className="lg:mt-[188px]">
              <h1 className="text-3xl font-bold mb-4 text-black">
                Enter the verification <br /> code to continue
              </h1>
              <p className="text-gray">
                We send a code in your number, <br /> Please check your inbox.
              </p>
              <label
                htmlFor="otp"
                className="font-bold text-gray text-2xl text-center"
              >
                Enter your OTP
              </label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container mt-10"
              ></OtpInput>
              <Link to="/login" className="mt-4 block text-blue font-semibold">
                Back
              </Link>
              <button
                className="btn btn-primary mt-10 w-full mx-1"
                onClick={onOTPVerify}
              >
                {loading && (
                  <CgSpinner
                    size={20}
                    className="mr-2 animate-spin"
                  ></CgSpinner>
                )}
                <span>Verify OTP</span>
              </button>
            </div>
          ) : (
            <div className="lg:mt-[188px]">
              <p className="text-gray mb-5">Verify Your Phone Number</p>
              <p
                htmlFor=""
                className="font-bold text-gray text-2xl text-center"
              >
                Enter your Number
              </p>
              <PhoneInput
                country={"in"}
                value={ph}
                onChange={setPh}
              ></PhoneInput>
              <button
                className="btn btn-primary mt-10 w-full mx-1"
                onClick={onSignup}
              >
                {loading && (
                  <CgSpinner
                    size={20}
                    className="mr-2 animate-spin"
                  ></CgSpinner>
                )}
                <span>Send code via SMS</span>
              </button>
            </div>
          )}
        </div>
        <div className="lg:w-1/2 hidden lg:block">
          <GbSwiper></GbSwiper>
        </div>
      </div>
    </div>
  );
};

export default Verification;
