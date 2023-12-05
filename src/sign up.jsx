import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate('/login'); 
  };

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");
    setNameError("");
    setConfirmError("");

  
    const validateName = () => {
      if (name === "") {
        setNameError("Please enter your name");
        return false;
      }
      return true;
    };

    const validateEmail = () => {
      if (email === "") {
        setEmailError("Please enter your email");
        return false;
      }
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError("Please enter a valid email");
        return false;
      }
      return true;
    };

    const validatePassword = () => {
      if (password === "") {
        setPasswordError("Please enter a password");
        return false;
      }
      if (password.length < 8) {
        setPasswordError("The password must be 8 characters or longer");
        return false;
      }
      return true;
    };

    const validateConfirmPassword = () => {
      if (confirm !== password) {
        setConfirmError("Passwords do not match");
        return false;
      }
      return true;
    };

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      
      localStorage.setItem("user", JSON.stringify({ name, email }));

      navigate('/login');
    }
  };

  return (
    <div className={"mainContainer"}>
        <div className="Container">
      <div className={"titleContainer"}>
        <div>Sign Up</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={name}
          placeholder="Enter your name here"
          onChange={(ev) => setName(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{nameError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="****"
          type="password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={confirm}
          placeholder="Confirm Password"
          type="password"
          onChange={(ev) => setConfirm(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{confirmError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Sign Up"}
        />
      </div>
       </div>
      <div className="text-center">
        <p>
          Already have an account? <Link to="/login">Log-In here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;