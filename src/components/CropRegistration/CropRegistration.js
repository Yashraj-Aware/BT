import React from 'react'

import '../Farmer/FarmerSignupForm.css'

const CropRegistration = () => {
  return (
    <div>
      <div className="farmer-signup-form">
      <h2>Crop Registrations:</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Crop Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Crop Quantity:</label>
          <input type="text" id="location" name="location" placeholder="Enter your location" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Expected Price:</label>
          <input type="text" id="phone" name="phone" placeholder="Enter your phone number" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default CropRegistration
