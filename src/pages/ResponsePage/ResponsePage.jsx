import React, { useState, useEffect } from 'react';

export default function ResponsePage() {
  const [physioFormData, setPhysioFormData] = useState([]);
  const userId = localStorage.getItem('decoded_token');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/physioform/user/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        const data = await response.json();
        console.log("API Response:", data);

        setPhysioFormData(data);
      } catch (error) {
        console.log("Error fetching physioform data", error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <div>
      <h1>Physioform Details</h1>
      {physioFormData.map((formData, index) => (
        <div key={index}>
          <strong>Date:</strong> {formData.date}<br />
          <strong>Body Part:</strong> {formData.body_part}<br />
          <strong>Time:</strong> {formData.time}<br />
          <strong>Trauma:</strong> {formData.trauma}<br />
          <strong>Location:</strong> {formData.location}<br />
          <strong>Scans:</strong> {formData.scans}<br />
          <strong>Aggravating Factors:</strong> {formData.aggs}<br />
          <strong>Easing Factors:</strong> {formData.eases}<br />
          <strong>Past Treatment:</strong> {formData.past_treatment}<br />
          <strong>Medication:</strong> {formData.medication}<br />
          <strong>Work:</strong> {formData.work}<br />
          <strong>Goals:</strong> {formData.goals}<br />
          <hr />
        </div>
      ))}
    </div>
  );
}
