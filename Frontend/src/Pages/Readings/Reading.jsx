import React, { useState } from 'react';
import './Reading.css';
import '../Common.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import Overview from '../Overview';

function Reading(props) {
  const [myReading, setmyReading] = useState(0);
  const [energyType, setEnergyType] = useState("");
  
    const [reading, setReading] = useState(null); 

  const apiUrl = process.env.REACT_APP_API_URL;
  const user = useSelector(selectUser);
  const handleSubmit = async () => {
    // Log the energy type and level for debugging
    console.log(`Energy Type - ${energyType} \n Energy Package ${myReading} kWh`);

    const newValue = {
      energyType: energyType,
      energyLevel: myReading,
    };
    
        try {
          const res = await fetch(`${apiUrl}/readings/${user.email}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                         energyType: energyType,
                        energyLevel: myReading,
                        email:user.email
                    }),
          });
          const data = await res.json();
    
          if (data.success) {
            setReading(data.updatedRead); // Update the state with the new reading
            console.log('Reading updated:', data.updatedRead);
          } else {
            console.log('Error updating reading');
          }
        } catch (e) {
          console.error('Error:', e);
        }
      
    
    console.log()
    // try {
    //   // Construct the correct URL for API request
    //   const res = await fetch(`${apiUrl}/readings`, {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //          energyType: energyType,
    //         energyLevel: myReading,
    //         email:user.email
    //     }), // Send the correct JSON body
    //   });

    //   // Check if the request was successful
    //   const data = await res.json();
    //   if (res.ok) {
    //     console.log("Reading created", data);
    //   } else {
    //     console.log("Reading not updated", data);
    //   }
    // } catch (e) {
    //   console.log("Error:", e.message);
    // }
  };
  

  // Energy options for the user to select
  const energyOption = ["Gas & Electricity", "Electricity"];

  return (
    <div className="MainPage">
      <div className="energy_read">
        <h3>What energy do you need?</h3>
        <div className="option_selector">
          {energyOption.map((myOption, index) => (
            <button
              key={index}
              onClick={() => setEnergyType(myOption)}
              className={myOption === energyType ? 'selected' : ''}
            >
              {myOption}
            </button>
          ))}
        </div>
      </div>

      <div className="energy_read">
        <h3>How much energy do you use?</h3>
        <input
          type="number"
          placeholder="Enter kWh"
          value={myReading}
          onChange={(event) => setmyReading(event.target.value)}
        />
        <button onClick={handleSubmit}>Request Energy Estimate</button>
      
       
      </div>
    </div>
  );
}

export default Reading;
