import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Del = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email) {
      setEmailError("Please enter your email");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Please enter your password");
      return false;
    }
    return true;
  };

  const onButtonClick = () => {
    
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      const mockEmail = "ongie@gmail.com";
      const mockPassword = "password123";

      if (email === mockEmail && password === mockPassword) {
      
        navigate("/home");

        alert("You have successfully logged in!");
      } else {
        setLoginError("Incorrect email or password. Please try again.");
      }
    }
  };

  return (
    <div className={"mainContainer"}>
        <div className="Container">
      <div className={"titleContainer"}>
        <div>Login</div>
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
          placeholder="Enter your password here"
          type="password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <label className={"rememberForgotContainer"}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <span className="rememberMeText">Remember Me</span>
          <span className="forgotPasswordLink">
            <Link to="/forgot-password">Forgot Password?</Link>
          </span>
        </label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
      </div>
      <div className="text-center">
        <p className="errorLabel">{loginError}</p>
        <p>
          Don't have an account? <Link to="/sign up">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};