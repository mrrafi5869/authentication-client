import logo from "../../assets/image/Subtract.png";
import GbSwiper from "../Swiper/GbSwiper";
import React, { useContext, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [selectedValue, setSelectedValue] = useState("");
  const { emailLogin, setEmail, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleEmail = (event) => {
    const email = event.target.value + selectedValue;
    setForgotEmail(email);
    console.log(email);
    console.log(selectedValue);
  };

  const forgetPass = () => {
    if(!forgotEmail){
      alert("Please enter your email address")
      return;
    }
    resetPassword(forgotEmail)
      .then(() => {
        alert("Password reset Email sent.Please Check your email")
      })
      .catch((err) => console.log(err));
  };


  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value + selectedValue;
    const password = from.password.value;
    emailLogin(email, password)
      .then((result) => {
        navigate("/verification");
        setEmail(email);
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
                  className="input w-full bg-gray-200 transition focus:bg-white hover:bg-white hover:border-blu"
                  onBlur={handleEmail} 
                  required
                />
                <select
                  value={selectedValue}
                  onBlur={handleSelectChange}
                  className="select w-44 absolute right-1 bg-gray-100 text-gray-400 hover:bg-blue-200 hover:text-blu"
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
                  className="input w-full bg-gray-200 transition hover:border hover:border-blu hover:bg-white"
                  required
                />
                <div
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-3 text-2xl flex justify-center items-center cursor-pointer"
                >
                  {show ? (
                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                  ) : (
                    <AiOutlineEye></AiOutlineEye>
                  )}
                </div>
              </div>
              <Link to="/signUp">
                Not a member? <span className="text-blu">Create account</span>
              </Link>
              <button class="btn btn-primary w-full mt-10 mb-4 relative group overflow-hidden flex space-x-2 items-center">
                <span class="relative text-sm text-white transition-all duration-300 group-hover:scale-x-100 group-hover:mr-2">
                  Next
                </span>
                <div class="flex items-center -space-x-3">
                  <div class="rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <BiRightArrowAlt className="h-7 w-7 text-white hidden stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0 group-hover:block"></BiRightArrowAlt>
                </div>
              </button>
              <p
                className="font-bold text-blu text-center cursor-pointer"
                onClick={forgetPass}
              >
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
