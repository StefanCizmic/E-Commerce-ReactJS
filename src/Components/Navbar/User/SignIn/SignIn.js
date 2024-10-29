import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SignIn.css";

export const SignIn = ({setLogin}) => {
  return (
    <form className="sign-in">
      <h2>Sign In</h2>
      <div className="email-field">
        <TextField
          label="Email"
          variant="outlined"
          sx={{
            width: "300px",
            fontSize: "5px",
            "& .MuiInputBase-root": {
              height: "40px",
            },
          }}
        />
      </div>
      <div className="password-field">
        <TextField
          label="Password"
          variant="outlined"
          sx={{
            width: "300px",
            "& .MuiInputBase-root": {
              height: "40px",
            },
          }}
        />
        <p>Forgot password?</p>
      </div>
      <Button variant="contained" sx={{ width: "300px", fontFamily: "Playfair Display" }}>
        Sign In
      </Button>
      <p>
        Don't have an account? <span className="sign-up-span" onClick={() => setLogin(false)}>Sign up</span> for
        free
      </p>
    </form>
  );
};
