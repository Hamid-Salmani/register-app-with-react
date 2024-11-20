import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import "./Menu.css";
function Menu() {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleLogout = () => {
    setToken();
    navigate("/", { replace: true });
  };

  function teacherListClick() {
    navigate("/techerList");
  }
  function registerClick() {
    navigate("/studentregister");
  }
  function listClick() {
    navigate("/studentlist");
  }

  return (
    <>
      <div className="menu--container">
        <h1 className="menu--header">منوی سیستم</h1>
        <button className="logout--btn" onClick={handleLogout}>
          خروج
        </button>
        <form className="menu--form">
          <button className="menu--btn" onClick={teacherListClick}>
            لیست کاربران
          </button>
          <button className="menu--btn" onClick={registerClick}>
            ثبت نام دانش آموز
          </button>
          <button className="menu--btn" onClick={listClick}>
            لیست دانش آموز
          </button>
        </form>
      </div>
    </>
  );
}
export default Menu;
