import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import "./StudentList.css";

function TeacherList() {
  const [teacher, setTeacher] = useState([]);
  const [teacherIndex, setTeacherIndex] = useState(0);
  const [load, setLoad] = useState(false);

  async function fetchData() {
    const resp = await axios.get("https://serv.steelchat.ir/sma/api/Teachers");

    setTeacher(resp.data);
    console.log(resp.data);
    setLoad(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function nextIndex() {
    if (teacherIndex < teacher.length - 1) {
      setTeacherIndex((prevIndex) => prevIndex + 1);
    }
  }
  function prevIndex() {
    if (teacherIndex > 0) {
      setTeacherIndex((prevIndex) => prevIndex - 1);
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="Header">لیست کاربران </h1>
        <form className="form-reg">
          {load && (
            <div>
              <div className="student--data">
                نام :‌ {teacher[teacherIndex].firstName}
              </div>
              <div className="student--data">
                نام خانوادگی : {teacher[teacherIndex].lastName}
              </div>
            </div>
          )}
        </form>
        <button onClick={nextIndex} className="add--btn">
          بعدی
        </button>
        <button onClick={prevIndex} className="prev--btn">
          قبلی
        </button>
      </div>
    </>
  );
}
export default TeacherList;
