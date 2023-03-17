import React, { useContext, useState } from "react";
import logo from "../../assets/image/Subtract.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GbSwiper from "../Swiper/GbSwiper";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const { emailSingIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    emailSingIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/verification");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="py-10 p-2">
      <img src={logo} alt=""/>
      <div className="lg:flex justify-center items-center mt-10">
        <div className="w-1/2">
          <div className="w-[345px] mx-auto">
            <form onSubmit={handleSignIn}>
              <h1 className="text-3xl font-bold mb-10 text-black">
                Welcome to <br /> System package
              </h1>
              <div className="form-control relative flex justify-center items-center">
                <input
                  type="text"
                  name="email"
                  placeholder="Name"
                  className="input w-full mb-8 bg-gray-200 border"
                  required
                />
                {/* <input
                type="text"
                name=""
                placeholder="@gmail.com"
                className="input h-10 w-44 absolute right-1 top-1 flex justify-center items-center"
                required
              /> */}
              </div>
              <div className="form-control relative flex justify-center items-center">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input w-full bg-gray-200"
                  required
                />
                <div onClick={() => setShow(!show)}>
                  {show ? (
                    <AiOutlineEyeInvisible className="absolute text-2xl right-2 top-0 h-full flex justify-center items-center cursor-pointer"></AiOutlineEyeInvisible>
                  ) : (
                    <AiOutlineEye className="absolute text-2xl right-2 top-0 h-full flex justify-center items-center cursor-pointer"></AiOutlineEye>
                  )}
                </div>
              </div>
              <Link to="/login">
                All ready have an Account? Please{" "}
                <span className="text-blue">Login</span>
              </Link>
              <button className="form-control btn btn-primary mt-10 w-full mx-1">
                Next
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2 hidden lg:block">
          <GbSwiper></GbSwiper>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
