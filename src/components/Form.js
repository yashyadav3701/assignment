import React, { useState } from 'react';
import './Form.css'

const Form = ({ onSubmit,data }) => {
  const [formData, setFormData] = useState({
    name: data.name,
    email: data.email,
    phone: data.phoneNo,
    website: data.website,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-field'>
        <label htmlFor="name"><span className='star'>*</span>Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
      </div>
      <div className='form-field'>
        <label htmlFor="email"><span className='star'>*</span>Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className='form-field'>
        <label htmlFor="phone"><span className='star'>*</span>Phone:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className='form-field'>
        <label htmlFor="website"><span className='star'>*</span>Website:</label>
        <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} required/>
      </div>
      {/* <button onClick={handleSubmit}>Ok</button> */}
    </form>
  );
};

export default Form;
