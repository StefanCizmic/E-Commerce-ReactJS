import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SignUp.css";

export const SignUp = ({ setLogin }) => {
  return (
    <form className="sign-up">
      <h2>Sign Up</h2>
      <div className="create-username">
        <TextField
          label="Enter username"
          variant="outlined"
          sx={{
            width: {
              xs: "100%",
              sm: "300px",
            },
            "& .MuiInputBase-root": {
              height: "40px",
            },
          }}
        />
      </div>
      <div className="enter-email">
        <TextField
          label="Enter email"
          variant="outlined"
          sx={{
            width: {
              xs: "100%",
              sm: "300px",
            },
            "& .MuiInputBase-root": {
              height: "40px",
            },
          }}
        />
      </div>
      <div className="create-password">
        <TextField
          label="Enter password"
          variant="outlined"
          sx={{
            width: {
              xs: "100%",
              sm: "300px",
            },
            "& .MuiInputBase-root": {
              height: "40px",
            },
          }}
        />
      </div>
      <Button
        className="sign-up-button"
        variant="contained"
        sx={{
          width: { xs: "100%", sm: "300px" },
          fontSize: {
            xs: "12px",
            sm: "16px",
          },
          fontFamily: "Playfair Display",
          marginTop: "20px"
        }}
        onClick={() => setLogin(true)}
      >
        Submit
      </Button>
    </form>
  );
};
