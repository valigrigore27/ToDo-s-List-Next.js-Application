import React from "react";
import LoginStyle from "@styles/Login.module.css";
import Link from "next/link";

function LoginForm() {
  return (
    <div className={LoginStyle["Login"]}>
      <form className={LoginStyle["Login-header"]}>
        <div className={LoginStyle["form"]}>
          <header className={LoginStyle["text-login"]}>LOGIN</header>
          <br></br>
          <label className={LoginStyle["text-other"]}> Name:</label>
          <br></br>
          <input
            type="text"
            name="name"
            placeholder="Write your name..."
            className={LoginStyle["text-box"]}
          />
          <br></br>
          <label className={LoginStyle["text-other"]} for="pwd">
            Password:
          </label>
          <ul>
            <li>
              <Link href="/TODOS">AA</Link>
            </li>
          </ul>
          <br></br>
          <input
            type="password"
            name="pwd"
            id="pwd"
            minlength="8"
            placeholder="Write your password.."
            className={LoginStyle["text-box"]}
          />
          <br></br>
          <button className={LoginStyle["button-submit"]}>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
