import React from "react";
import { useNavigate } from "react-router-dom";
import {useState } from "react";
import { useAuth } from "../provider/authProvider";
import axios from "axios";
import "./Login.css";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setToken } = useAuth();

  function HandleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://serv.steelchat.ir/sma/api/Auth/login", formData)
        .then((res) => {
          setToken( res.data.token);
          navigate("/menu", { replace: true });
        });
    } catch (error) {
      alert("ایمیل یا کلمه عبور اشتباه است ");
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="Header">ورود به برنامه</h1>
        <form className="form">
          <input
            type="email"
            placeholder="نام کاربری "
            name="email"
            onChange={HandleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="کلمه عبور"
            name="password"
            onChange={HandleChange}
            value={formData.password}
          />
          <div className="btn">
            <button onClick={handleSubmit} className="login">
              ورود
            </button>
            <button className="exite">انصراف</button>
          </div>
          <br />
          <div className="button">
            <a href="register">ثبت نام</a>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
