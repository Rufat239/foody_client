import React, { useState, useEffect } from "react";
import "../../style/login.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import image from "../../assets/loginimages/Login.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../components/Schema/schema";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    values,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    isSubmitting,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });
  const handleClose = (x) => {
    if (x === "clickaway") {
      return;
    }
    setOpen(false);
  };
  async function onSubmit(values) {
    console.log(values);

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAyG34t6yFnMuYrg1IkTGR0HQUugxr6zco`;

    const formData = {
      email: values.username,
      password: values.password,
      returnSecureToken: true,
    };
    try {
      const { data } = await axios.post(url, formData);

      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", "true")
      navigate("/profilePage");
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/profilePage");
    }
  }, [navigate]);
  const toggle = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="login-form-container">
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        style={{ top: "18vh" }}
      >
        <MuiAlert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </MuiAlert>
      </Snackbar>
      <div className="login-image">
        <img src={image} alt="Login" />
      </div>
      <div className="login-form">
        <div className="login-buttons">
          <NavLink to="/loginPage">
            <button className="login-btnSwitch">Login</button>
          </NavLink>
          <NavLink to="/registerPage">
            <button className="register-btnswitch">Register</button>
          </NavLink>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="username-container-login">
            <label htmlFor="username">Email</label>
            <div className="login-username-input">
              <input
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Write Your Username"
                id="username"
                name="username"
                className={
                  errors.username && touched.username
                    ? "login-error-input"
                    : !errors.username && touched.username
                    ? "login-success-input"
                    : ""
                }
              />
            </div>
            {errors.username && (
              <p className="username-error-login">{errors.username}</p>
            )}
          </div>
          <div className="password-container-login">
            <label htmlFor="password">Password</label>
            <div className="login-password-input">
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={showPass ? "text" : "password"}
                placeholder="********"
                id="password"
                name="password"
                className={
                  errors.password && touched.password
                    ? "login-error-input"
                    : !errors.password && touched.password
                    ? "login-success-input"
                    : ""
                }
              />
              <div className="loginEye">
                {showPass ? (
                  <FaRegEyeSlash onClick={toggle} className="loginEye-icons" />
                ) : (
                  <FaRegEye onClick={toggle} className="loginEye-icons" />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="password-error-login">{errors.password}</p>
            )}
          </div>
          <input
            type="submit"
            className="login-submit-button"
            value={"Log in"}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
}
export default Login;
