import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import "./StudentList.css";

function StudentList() {
  const [student, setStudent] = useState([]);
  const [studentIndex, setStudentIndex] = useState(0);
  const [load, setLoad] = useState(false);

  async function fetchData() {
    const resp = await axios.get("https://serv.steelchat.ir/sma/api/Students");
    console.log(resp);
    setStudent(resp.data);
    setLoad(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function nextIndex() {
    if (studentIndex < student.length - 1) {
      setStudentIndex((prevIndex) => prevIndex + 1);
    }
  }
  function prevIndex() {
    if (studentIndex > 0) {
      setStudentIndex((prevIndex) => prevIndex - 1);
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="Header">لیست دانش اموز</h1>
        <form className="form-reg">
          {load && (
            <div>
              <div className="student--data">
                نام :‌ {student[studentIndex].firstName}
              </div>
              <div className="student--data">
                نام خانوادگی : {student[studentIndex].lastName}
              </div>
              <div className="student--data">
                جنسیت : {student[studentIndex].gender}{" "}
              </div>
              <div className="student--data">
                رشته تحصیلی : {student[studentIndex].major}{" "}
              </div>
              <div className="student--data">
                دپارتمان : {student[studentIndex].params}{" "}
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
export default StudentList;
