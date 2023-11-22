import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Treatment() {
    const { id } = useParams()
    const [treatmentText, setTreatmentText] = useState('');
    const navigate = useNavigate();
  
    const handleAddTreatment = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/treatmentsadd/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
          body: JSON.stringify({ response: treatmentText, physio_form_id: id }),
        });
  
        if (response.ok) {
          console.log('Treatment added successfully');
          navigate("/response")
          // Handle any further logic, such as redirecting or updating state
        } else {
          console.error('Error adding treatment');
        }
      } catch (error) {
        console.error('Error adding treatment:', error);
      }
    };
  
    return (
      <div>
        <h1>Add Treatment</h1>
        {/* Input for treatment text */}
        <textarea value={treatmentText} onChange={(e) => setTreatmentText(e.target.value)} />
  
        {/* Button to add treatment */}
        <button onClick={handleAddTreatment}>Add Treatment</button>
      </div>
    );
  };
  
