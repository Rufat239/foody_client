import React, { useState } from "react";
import "../../style/register.css";
import image from "../../assets/loginimages/Register.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useFormik } from "formik";
import { registerSchema } from "../Schema/schema";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

function Register() {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setShowPass(!showPass);
  };

  const {
    values,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    resetForm,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyG34t6yFnMuYrg1IkTGR0HQUugxr6zco",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
              returnSecureToken: true,
            }),
          }
        );
        const data = await response.json();
        console.log(data);

        const fullData = {
          email: values.email,
          password: values.password,
          fullname: values.fullname,
          username: values.username,
        };

        const { data: fireData } = await axios.patch(
          `https://test-foody-admin-default-rtdb.firebaseio.com/users/${data.localId}.json`,
          fullData
        );

        console.log(fireData);

        navigate("/loginPage");
        resetForm();
      } catch (error) {
        setError("Failed to create an account!");
        setOpen(true);
        console.error("Error registering user:", error.message);
      }
      setSubmitting(false);
    },
  });

  const handleClose = (x) => {
    if (x === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="register-form-container">
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
      <div className="register-image">
        <img src={image} alt="Register"></img>
      </div>
      <div className="register-form">
        <div className="register-buttons">
          <NavLink to="/loginPage">
            <button className="login-box-btnSwitch">Login</button>
          </NavLink>
          <NavLink to="/registerPage">
            <button className="register-box-btnswitch">Register</button>
          </NavLink>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="fullName-container-register">
            <label htmlFor="fullname">Full Name</label>
            <div className="fullName-input-register">
              <input
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Full name"
                id="fullname"
                name="fullname"
                className={
                  errors.fullname && touched.fullname
                    ? "register-error-input"
                    : !errors.fullname && touched.fullname
                    ? "register-success-input"
                    : ""
                }
              />
            </div>
            {errors.fullname && (
              <p className="fullname-error-register">{errors.fullname}</p>
            )}
          </div>
          {/* Username Input */}
          <div className="username-container-register">
            <label htmlFor="username">Username</label>
            <div className="username-input-register">
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
                    ? "register-error-input"
                    : !errors.username && touched.username
                    ? "register-success-input"
                    : ""
                }
              />
            </div>
            {errors.username && (
              <p className="username-error-register">{errors.username}</p>
            )}
          </div>
          {/* Email Input */}
          <div className="email-container-register">
            <label htmlFor="email">Email</label>
            <div className="email-input-register">
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="youremail@gmail.com"
                id="email"
                name="email"
                className={
                  errors.email && touched.email
                    ? "register-error-input"
                    : !errors.email && touched.email
                    ? "register-success-input"
                    : ""
                }
              />
            </div>
            {errors.email && (
              <p className="email-error-register">{errors.email}</p>
            )}
          </div>
          {/* Password Input */}
          <div className="password-container-register">
            <label htmlFor="password">Password</label>
            <div className="register-password-input">
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
                    ? "register-error-input"
                    : !errors.password && touched.password
                    ? "register-success-input"
                    : ""
                }
              />
              <div className="register-loginEye">
                {showPass ? (
                  <FaRegEyeSlash onClick={toggle} className="loginEye-icons" />
                ) : (
                  <FaRegEye onClick={toggle} className="loginEye-icons" />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="password-error-register">{errors.password}</p>
            )}
          </div>
          <input
            className="register-submit-button"
            type="submit"
            value={"Register"}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
