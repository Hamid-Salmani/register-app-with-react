import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
function Register() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordRepetition: "",
    firstName: "",
    lastName: "",
  });
  function HandleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordRepetition) {
      alert("کلمه عبور با تکرار کلمه عبور یکسان نمی باشد");
    } else {
      try {
        const response = await axios.post(
          "https://serv.steelchat.ir/sma/api/Auth/register",
          formData
        );
        console.log("Form data submitted successfully:");
        navigate("/login");
      } catch (error) {
        alert("کلمه عبور باید دارای یک حرف بزرک عدد و یک علامت نگارشی باشد");
      }
    }
  };

  return (
    <>
      <div className="container-reg">
        <h1 className="Header-reg">ثبت نام کاربر</h1>
        <form className="form-reg">
          <input
            type="email"
            placeholder="آدرس ایمیل"
            name="email"
            onChange={HandleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="کلمه ورود"
            name="password"
            onChange={HandleChange}
            value={formData.password}
          />
          <input
            type="password"
            placeholder="تکرار کلمه ورود "
            name="passwordRepetition"
            onChange={HandleChange}
            value={formData.passwordRepetition}
          />
          <input
            type="text"
            placeholder="نام"
            name="firstName"
            onChange={HandleChange}
            value={formData.firstName}
          />
          <input
            type="text"
            placeholder="نام خانوادگی"
            name="lastName"
            onChange={HandleChange}
            value={formData.lastName}
          />
        </form>
        <div className="btn-reg">
          <button onClick={handleSubmit} className="register">
            ذخیره
          </button>
        </div>
      </div>
    </>
  );
}
export default Register;
