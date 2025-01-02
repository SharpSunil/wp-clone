import React from "react";
import "../styles/login.scss";
import { FaWhatsapp } from "react-icons/fa";
import { IoFingerPrint } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";
const Login = () => {
  return (
    <>
      <div className="login-parent parent">
        <div className="login-cont cont">
          <div className="icon">
            <FaWhatsapp /> Whatsapp
          </div>
        </div>

        <div className="second-box cont">
          <div className="icon2">
            <IoFingerPrint />
          </div>
          <div className="heading">Sign In</div>
          <p className="desc">
            Sign in with your google account to get started.
          </p>
          <Link to="#" className="btn">
            Sign in with google <FaArrowRightToBracket />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
