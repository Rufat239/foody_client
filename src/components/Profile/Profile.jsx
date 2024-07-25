import React from 'react'
import '../../style/Profile.css'

const Profile = () => {

   const [formData, setFormData] = useState({
    contact: '',
    email: '',
    username: '',
    address: '',
    fullname: '',
  });

  const [errors, setErrors] = useState({
    contact: false,
    email: false,
    username: false,
    address: false,
    fullname: false,
  });

  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value !== '') {
      setErrors({ ...errors, [name]: false });
    }
  };

  const validateForm = () => {
    const newErrors = {
      contact: formData.contact === '',
      email: formData.email === '' || !formData.email.includes('@'),
      username: formData.username === '',
      address: formData.address === '',
      fullname: formData.fullname === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({
        contact: '',
        email: '',
        username: '',
        address: '',
        fullname: '',
      });
    } else {
      setShowErrors(true);
      setTimeout(() => {
        setShowErrors(false);
      }, 1000);
    }
  };

  return (
    <div className={styles['profile-container']}>
      <h2>Profile</h2>
      <form className={styles['profile-form']} onSubmit={handleSubmit}>
        <div className={styles['upload-container']}>
          <div className={styles.upload}>
            <span>upload</span>
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="+994"
              value={formData.contact}
              onChange={handleChange}
              style={{ borderColor: showErrors && errors.contact ? 'red' : 'initial' }}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="rahimlisarkhan@gmail.com"
              value={formData.email}
              onChange={handleChange}
              style={{ borderColor: showErrors && errors.email ? 'red' : 'initial' }}
            />
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="rahimlisarkhan"
              value={formData.username}
              onChange={handleChange}
              style={{ borderColor: showErrors && errors.username ? 'red' : 'initial' }}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Ataturk 45 Ganclik Baku"
              value={formData.address}
              onChange={handleChange}
              style={{ borderColor: showErrors && errors.address ? 'red' : 'initial' }}
            />
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Sarkhan Rahimli"
              value={formData.fullname}
              onChange={handleChange}
              style={{ borderColor: showErrors && errors.fullname ? 'red' : 'initial' }}
            />
          </div>
          <div className={styles['form-group']}>
            <button type="submit" className={styles['save-btn']}>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile

