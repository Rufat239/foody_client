import React, { useState, useEffect } from 'react';
import "../../style/profilePage.css";
import upload from "../../assets/ProfileImages/cloud_upload.png";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import postProfile from '../Services/createProfile';  
import updatedProfile from '../Services/updateProfile';  

const Profile = () => {
  const [formData, setFormData] = useState({
    contact: "",
    email: "",
    username: "",
    address: "",
    fullname: "",
    profileImage: null,
  });
  const [errors, setErrors] = useState({
    contact: false,
    email: false,
    username: false,
    address: false,
    fullname: false,
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false); 
  const [currentUserId, setCurrentUserId] = useState(""); 

  useEffect(() => {
    const storedProfileData = JSON.parse(localStorage.getItem("profileData")) || {};
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  
    const loggedInUser = storedUsers[1] || {}; 
    if (loggedInUser || Object.keys(storedProfileData).length > 0) {
      setFormData({
        email: loggedInUser?.email || storedProfileData?.email || "",
        username: loggedInUser?.username || storedProfileData?.username || "",
        fullname: loggedInUser?.fullname || storedProfileData?.fullname || "",
        contact: storedProfileData?.contact || "",
        address: storedProfileData?.address || "",
        profileImage: storedProfileData?.profileImage || null,
      });
      setCurrentUserId(loggedInUser?.id || "");  
      setIsUpdate(!!loggedInUser?.id); 
    }

  }, []);
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    if (value !== "") {
      setErrors({ ...errors, [name]: false });
    }
    localStorage.setItem('profileData', JSON.stringify(updatedFormData));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKeyPress = (e, type) => {
    if (type === 'numeric' && !/[0-9]/.test(e.key)) {
      e.preventDefault();
    } else if (type === 'alpha' && !/[a-zA-Z\s]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const validateForm = () => {
    const newErrors = {
      contact: formData.contact === "" || !/^\d+$/.test(formData.contact),
      email: formData.email === "" || !formData.email.includes("@"),
      username: formData.username === "",
      address: formData.address === "",
      fullname: formData.fullname === "" || !/^[a-zA-Z\s]+$/.test(formData.fullname),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    const cleanFormData = {
      contact: formData.contact || "",
      email: formData.email || "",
      username: formData.username || "",
      address: formData.address || "",
      fullname: formData.fullname || "",
      profileImage: formData.profileImage || null,
    };
  
    if (validateForm()) {
      const updatedFormData = {
        ...cleanFormData,
        image: formData.profileImage,  
      };
  
      try {
        if (isUpdate) {
          await updatedProfile(currentUserId, updatedFormData);
        } else {
          await postProfile(updatedFormData);
        }
  
        localStorage.setItem("profileImage", formData.profileImage);
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 2000);
  
        window.dispatchEvent(new Event("profileUpdated"));
      } catch (error) {
        console.error("Error during profile submission:", error);
      }
    }
  };
  

  return (
    <div className="profile-container">
      <h2 className='Profile-title'>Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="upload-container">
          <label htmlFor="file-upload" className="upload">
            <img src={upload} alt="" />
            <p className='upload-title'>Upload</p>
          </label>
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact" className='label-box'>Contact</label>
            <input
              type="text"
              className={`input-box ${errors.contact ? 'error' : ''}`}
              id="contact"
              name="contact"
              placeholder="+994"
              value={formData.contact}
              onChange={handleChange}
              onKeyPress={(e) => handleKeyPress(e, 'numeric')}
            />
            {errors.contact && <p className="error-message">Please fill in the information</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className='label-box'>Email</label>
            <input
              type="email"
              className={`input-box ${errors.email ? 'error' : ''}`}
              id="email"
              name="email"
              placeholder="rahimlisarkhan@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">Please fill in the information</p>}
          </div>
          <div className="form-group">
            <label htmlFor="username" className='label-box'>Username</label>
            <input
              type="text"
              className={`input-box ${errors.username ? 'error' : ''}`}
              id="username"
              name="username"
              placeholder="rahimlisarkhan"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error-message">Please fill in the information</p>}
          </div>
          <div className="form-group">
            <label htmlFor="address" className='label-box'>Address</label>
            <input
              type="text"
              className={`input-box ${errors.address ? 'error' : ''}`}
              id="address"
              name="address"
              placeholder="Ataturk 45 Ganclik Baku"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error-message">Please fill in the information</p>}
          </div>
          <div className="form-group">
            <label htmlFor="fullname" className='label-box'>Full Name</label>
            <input
              type="text"
              className={`input-box ${errors.fullname ? 'error' : ''}`}
              id="fullname"
              name="fullname"
              placeholder="Sarkhan Rahimli"
              value={formData.fullname}
              onChange={handleChange}
              onKeyPress={(e) => handleKeyPress(e, 'alpha')}
            />
            {errors.fullname && <p className="error-message">Please fill in the information</p>}
          </div>
          <div className="form-group">
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </div>
        {showThankYou && (
          <Alert severity="success" className="thank-you-message">
            <AlertTitle>Success</AlertTitle>
            Thank you! Your information has been saved.
          </Alert>
        )}
      </form>
    </div>
  );
};

export default Profile;
