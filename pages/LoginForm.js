import React, { useState } from "react";
import LoginStyle from "@styles/Login.module.css";
import { login } from "../src/apiInteractions";
import Router from "next/router";
import users from "C:/Users/Tuf/OneDrive/Desktop/proiecte-nepuse-pe-git/project.finish/project-with-next/next-crash-course/src/Users";
import handler from "./api/login";
function LoginForm() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    function succesFunct() {
      Router.push("/TODOS");
    }
    function errorFunct() {
      alert("Username, email or password is WRONG");
    }
    login(
      details.name,
      details.email,
      details.password,
      "login",
      succesFunct,
      errorFunct
    );
  };
  return (
    <div className={LoginStyle["Login"]}>
      <form onSubmit={submitHandler} className={LoginStyle["Login-header"]}>
        <div className={LoginStyle["form"]}>
          <header className={LoginStyle["text-login"]}>LOGIN</header>
          <br></br>
          <label className={LoginStyle["text-other"]}> Name:</label>
          <br></br>
          <input
            type="text"
            name="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
            placeholder="Write your name..."
            className={LoginStyle["text-box"]}
          />
          <br></br>
          <label className={LoginStyle["text-other"]}> Email:</label>
          <br></br>
          <input
            type="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            placeholder="Write your email..."
            className={LoginStyle["text-box"]}
          />
          <br></br>
          <label className={LoginStyle["text-other"]} htmlFor="pwd">
            Password:
          </label>
          <br></br>
          <input
            type="password"
            name="pwd"
            id="pwd"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
            minLength="8"
            placeholder="Write your password.."
            className={LoginStyle["text-box"]}
          />
          <br></br>
          <input
            className={LoginStyle["button-submit"]}
            type="submit"
            value="LOGIN"
          />
          <a href="http://localhost:3000/Autentification">
            You don't have an account?
          </a>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
