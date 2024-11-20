import React from "react";
import { useNavigate } from "react-router-dom";
import {useState } from "react";
import "./StudentRegister.css";
import axios from "axios";
function StudentRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    major: "",
  });
  const [deapartmentID, setDepartmentId] = useState({
    departmentId: "",
  });

  function HandleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function HandleChangeDep(event) {
    const { name, value } = event.target;
    setDepartmentId((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://serv.steelchat.ir/sma/api/Students",
        formData,
        {
          params: {
            deapartmentID,
          },
        }
      );
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_NETWORK") {
        alert("مشکل از سرور داخلی می باشد");
      }
    }
  };
  const navigate = new useNavigate();

  function handleExite() {
    navigate("/menu");
  }
  return (
    <>
      <div className="container--std--reg">
        <h1 className="Header">ثبت نام دانش آموز</h1>
        <form className="form-reg">
          <input
            type="text"
            placeholder="نام "
            name="fistName"
            onChange={HandleChange}
            value={formData.fistName}
          />
          <input
            type="text"
            placeholder="نام خانوادگی"
            name="lastName"
            onChange={HandleChange}
            value={formData.lastName}
          />
          <select
            id="gender"
            value={formData.gender}
            onChange={HandleChange}
            name="gender"
          >
            <option value="">جنسیت </option>
            <option value="male">آقا</option>
            <option value="female">خانوم</option>
          </select>
          <input
            type="text"
            placeholder="رشته تحصیلی "
            name="major"
            onChange={HandleChange}
            value={formData.major}
          />
          <input
            type="number"
            placeholder="دپارتمان"
            name="departmentId"
            onChange={HandleChangeDep}
            value={deapartmentID.departmentId}
          />
          <div className="btn--std--reg">
            <button onClick={handleSubmit} className="login">
              ورود
            </button>
            <button onClick={handleExite}>انصراف</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default StudentRegister;
