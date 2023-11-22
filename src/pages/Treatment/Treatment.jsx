import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../css/Treatment.css'

export default function Treatment() {
  const { id } = useParams();
  const [treatmentText, setTreatmentText] = useState('');
  const navigate = useNavigate();

  const handleAddTreatment = async () => {
    try {
      // Add treatment
      const treatmentResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/treatmentsadd/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({ response: treatmentText, physio_form_id: id }),
      });

      if (!treatmentResponse.ok) {
        console.error('Error adding treatment');
        return;
      }

      // Mark physioform as treatment complete
      const physioformResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/physioformupdate/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({ treatment_complete: true }),
      });

      if (physioformResponse.ok) {
        console.log('Treatment added successfully');
        navigate("/response");
        // Handle any further logic, such as redirecting or updating state
      } else {
        console.error('Error updating physioform treatment_complete status');
      }
    } catch (error) {
      console.error('Error adding treatment:', error);
    }
  };

  return (
    <div className="treatment-container">
      <h1 className="treatment-header">Add Treatment</h1>
      {/* Input for treatment text */}
      <textarea
        className="treatment-textarea"
        value={treatmentText}
        onChange={(e) => setTreatmentText(e.target.value)}
      />

      {/* Button to add treatment */}
      <button className="treatment-button" onClick={handleAddTreatment}>
        Add Treatment
      </button>
    </div>
  );
}
