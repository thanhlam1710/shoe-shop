// HOOK
import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// CSS
import "../style/login.css";


const Login = () => {

  const {googleSignIn, user} = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log("Lỗi: ",error);
    }
  }

  useEffect(() => {
    if(user != null) {
      navigate('/');
    }
  }, [user])

  return (
    <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">ĐĂNG NHẬP</span>
      </h2>
      <div className="container">
        <div className="forms">
          <div className="form login">
            <span className="title">ĐĂNG NHẬP</span>

            <form action="#">
              <div className="input-field">
                <input type="text" placeholder="Nhập email của bạn" required />
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="password"
                  placeholder="Nhập mật khẩu của bạn"
                  required
                />
                <i className="uil uil-lock icon"></i>
                <i className="uil uil-eye-slash showHidePw"></i>
              </div>

              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="logCheck" />
                  <label for="logCheck" className="text">
                    Ghi nhớ mật khẩu
                  </label>
                </div>

                <a href="#logo" className="text">
                  Quên mật khẩu?
                </a>
              </div>

              <div className="input-field button">
                <input type="button" value="ĐĂNG NHẬP" />
              </div>
            </form>

            <div className="login-signup">
              <span className="text">
                Chưa đăng ký?
                <a href="#logo" className="text signup-link">
                  Đăng ký ngay
                </a>
              </span>
            </div>
            <div className="login-signup">
              <div className="login-google">
                <GoogleButton onClick={handleGoogleSignIn}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
