import React, { useEffect } from "react";
import LoginStyle from "@styles/Login.module.css";
import { useState } from "react";
import Router from "next/router";
import { addNewUser } from "../src/apiInteractions";
function Autentification() {
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = () => {
    const newUser = {
      username: addUser.name,
      email: addUser.email,
      password: addUser.password,
    };
    addNewUser(newUser, setAllUsers, "register");
  };
  return (
    <div className={LoginStyle["Login"]}>
      <form onSubmit={submitHandler} className={LoginStyle["Login-header"]}>
        <div className={LoginStyle["form"]}>
          <header className={LoginStyle["text-login"]}>REGISTER</header>
          <br></br>
          <label className={LoginStyle["text-other"]}> Name:</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={addUser.name}
            placeholder="Choose your name..."
            onChange={(e) => setAddUser({ ...addUser, name: e.target.value })}
            className={LoginStyle["text-box"]}
          />
          <br></br>
          <label className={LoginStyle["text-other"]}> Email:</label>
          <br></br>
          <input
            type="email"
            value={addUser.email}
            placeholder="Write your email..."
            onChange={(e) => setAddUser({ ...addUser, email: e.target.value })}
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
            value={addUser.password}
            minLength="8"
            onChange={(e) =>
              setAddUser({ ...addUser, password: e.target.value })
            }
            placeholder="Choose your password.."
            className={LoginStyle["text-box"]}
          />
          <br></br>
          <label className={LoginStyle["text-other"]} htmlFor="pwd"></label>
          <input
            className={LoginStyle["button-submit"]}
            type="submit"
            value="REGISTER"
          />
        </div>
        <a
          className={LoginStyle["text-align"]}
          href="http://localhost:3000/LoginForm"
        >
          If you have an account CLICK here to LOGIN..
        </a>
      </form>
    </div>
  );
}
export default Autentification;
