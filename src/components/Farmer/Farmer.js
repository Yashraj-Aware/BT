import React from 'react'
import { useState } from 'react'
import '../Farmer/FarmerSignupForm.css'

const Farmer = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phone: '',
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
        
      };
    
      const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10}$/; 
        return phoneRegex.test(phone);
      };

    
  return (
    <div>
      <form onSubmit = {handleSubmit} className="farmer-signup-form">
      <h2>Farmer Signup</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" placeholder="Enter your location" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
          {formData.phone && !validatePhoneNumber(formData.phone) && <p className="error">Please enter a valid phone number.</p>}
        </div>
        <button  type="submit">Submit</button>
      </form>
    </form>
    </div>
  )
}

export default Farmer
