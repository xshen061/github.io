import React from "react";
import SignUpForm from "../SignUpForm";
import Paper from "@material-ui/core/Paper";

export default function Register() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "4rem 0" }}
    >
      <Paper
        style={{
          padding: "2rem",
          maxWidth: "18rem",
        }}
      >
        <SignUpForm></SignUpForm>
      </Paper>
    </div>
  );
}
