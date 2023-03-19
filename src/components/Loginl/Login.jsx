import logo from "../../assets/image/Subtract.png";
import GbSwiper from "../Swiper/GbSwiper";
import React, { useContext, useState } from "react";
import { BiRightArrowAlt } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState("@google.com");
  const { emailLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    emailLogin(email, password)
      .then((result) => {
        navigate("/verification");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="py-10 p-2">
      <img src={logo} alt="" />
      <div className="lg:flex justify-center items-center mt-10">
        <div className="w-1/2">
          <div className="w-[345px] lg:mx-auto">
            <form onSubmit={handleLogin}>
              <h1 className="text-3xl font-bold mb-8 md:mb-10 text-black">
                Welcome to <br /> System package
              </h1>
              <div className="form-control relative flex justify-center items-center">
                <input
                  type="text"
                  name="email"
                  placeholder="Name"
                  className="input w-full bg-gray-200 transition focus:bg-white hover:bg-white hover:border-blue"
                  required
                />
                <select
                  value={selectedValue}
                  onChange={handleSelectChange}
                  className="select w-44 absolute right-1 bg-gray-100 text-gray-400 hover:bg-sky-100 hover:text-blue"
                >
                  <option value="@gmail.com">@gmail.com</option>
                  <option value="@yahoo.com">@yahoo.com</option>
                  <option value="@hotmail.com">@hotmail.com</option>
                </select>
              </div>
              <div className="form-control relative flex justify-center items-center mt-8">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input w-full bg-gray-200 transition hover:border hover:border-blue hover:bg-white"
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
              <Link to="/signUp">
                Not a member? <span className="text-blue">Create account</span>
              </Link>
              {/* <button className="form-control w-full btn btn-primary mt-10 mb-4 mx-1">
                  Next
                </button> */}
              <button class="btn btn-primary w-full mt-10 mb-4 relative group overflow-hidden flex space-x-2 items-center">
                <span class="relative text-sm text-white transition-all duration-300 group-hover:scale-x-100 group-hover:mr-2">Next</span>
                <div class="flex items-center -space-x-3">
                  <div class="rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <BiRightArrowAlt className="h-7 w-7 text-white hidden stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0 group-hover:block"></BiRightArrowAlt>
                </div>
              </button>
              <p className="font-semibold text-blue text-center">
                Forget Password?
              </p>
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

export default Login;
