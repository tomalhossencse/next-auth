"use client";
import React from "react";

const LoginButton = () => {
  return (
    <button onClick={() => alert("clicked")} className="btn">
      Login Now
    </button>
  );
};

export default LoginButton;
