import React from "react";
import logo from "../../assets/image/Subtract.png";
import "./Success.css";
const Success = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100vh]">
      <div>
        <img src={logo} alt="" className="mx-auto mb-5 logo w-7 ml-12" />
        <p className="font-semibold text-blu">Success</p>
      </div>
    </div>
  );
};

export default Success;
