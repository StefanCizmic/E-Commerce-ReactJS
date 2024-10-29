import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      <form>
        <h2>Sign In</h2>
        <div className="email">
          <input placeholder="Email"></input>
        </div>
        <div className="password">
          <input placeholder="Password"></input>
        </div>
        <div className="login-btn">
        <button>Sign In</button>
        </div>
      </form>
    </div>
  );
};
