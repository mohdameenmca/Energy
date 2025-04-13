import React, { useState, useEffect } from 'react';
import './Common.css';
import Due from './Due';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Overview(props) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const user = useSelector(selectUser);
  
  const [reading, setReading] = useState(null); // Initialize as null, to show loading state initially
  
  useEffect(() => {
    fetch(`${apiUrl}/showreadings/${user.email}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.showRead.length > 0) {
          setReading(res.showRead[0]); // Display only the first reading if available
        }
      });
  }, [user.email, apiUrl]);


  
  return (
    <div className="MainPage">
      <div className="Greet">
        <h2>Welcome {user.fname}</h2>
      </div>

      {/* Display Current Reading Information */}
      <div className="readings-info">
        {reading ? (
          <h4>
           Current Energy Consumption for {reading.energyType}: {reading.energyLevel} kWh
          </h4>
        ) : (
          <p>No readings available</p>
        )}
      </div>

  

      <div className="splitscreen">
       
      </div>
    </div>
  );
}

export default Overview;
