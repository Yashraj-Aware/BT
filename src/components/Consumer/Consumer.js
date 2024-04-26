import React from 'react'
import  { useState } from 'react';

// FarmerSignupForm.js

// import React from 'react';
import './Consumer.css';

const Consumer = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  return (
    <div className="grid-container">
    <div className="parent-item">

        <div className="consumer-signup-form">
      <h2>Consumer Transaction</h2>
      <form>
      <div className="form-group">
        <label htmlFor="dropdown">Choose an item:</label>
        <select class = "dropdown" id="dropdown" value={value} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="onion">Onion</option>
            <option value="rice">Rice</option>
            <option value="tomato">Tomato</option>
        </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Farmer ID:</label>
          <input type="text" id="name" name="name" placeholder="Enter id" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Lot ID:</label>
          <input type="text" id="location" name="location" placeholder="Enter lot id" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Enter Amount</label>
          <input type="text" id="location" name="location" placeholder="Enter amt in rupees" />
        </div>
        
        <button type="submit">Pay</button>
      </form>
    </div>
    </div>

        <div className="parent-item">

            <div className="farmer-details">
                <div className="farmer-grid">
                    <div className="grid-item">
                        <h3>Farmer ID</h3>
                        <div className="farmer-id">
                            <p>F123</p>
                            <p>F123</p>
                            <p>F123</p>
                            <p>F123</p>
                            <p>F123</p>
                        </div>
                    </div>

                    <div className="grid-item">
                        <h3>Lot ID</h3>
                        <div className="farmer-lot">
                            <p>L123</p>
                            <p>L123</p>
                            <p>L123</p>
                            <p>L123</p>
                            <p>L123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

// export default FarmerSignupForm;


export default Consumer
