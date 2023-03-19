import React, { useContext, useState } from "react";
import logo from "../../assets/image/Subtract.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GbSwiper from "../Swiper/GbSwiper";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { BiRightArrowAlt } from "react-icons/bi";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState("@google.com");
  const { emailSingIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
                  className="input w-full bg-gray-200 focus:bg-white hover:bg-white transition hover:border-blu"
                  required
                />
                <select
                  value={selectedValue}
                  onChange={handleSelectChange}
                  className="select w-44 absolute right-1 bg-gray-100 text-gray-400 hover:bg-sky-100 hover:text-blu"
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
              <Link to="/login">
                All ready have an Account? Please{" "}
                <span className="text-blu">Login</span>
              </Link>
              <button class="btn btn-primary w-full mt-10 mb-4 relative group overflow-hidden flex space-x-2 items-center">
                <span class="relative text-sm text-white transition-all duration-300 group-hover:scale-x-100 group-hover:mr-2">Next</span>
                <div class="flex items-center -space-x-3">
                  <div class="rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <BiRightArrowAlt className="h-7 w-7 text-white hidden stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0 group-hover:block"></BiRightArrowAlt>
                </div>
              </button>
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
