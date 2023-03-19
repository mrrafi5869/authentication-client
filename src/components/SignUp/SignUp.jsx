import React, { useContext, useState } from "react";
import logo from "../../assets/image/Subtract.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GbSwiper from "../Swiper/GbSwiper";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState('@google.com');
  const { emailSingIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value + selectedValue;
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
      <img src={logo} alt="" />
      <div className="md:flex justify-center items-center mt-10">
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
                  className="input w-full bg-gray-200 focus:bg-white hover:bg-white transition hover:border-blue"
                  required
                />
                <select value={selectedValue} onChange={handleSelectChange} className="select w-44 absolute right-1 bg-gray-100 text-gray-400 hover:bg-sky-100 hover:text-blue">
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
