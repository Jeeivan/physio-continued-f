import React, { useState, useEffect } from 'react';

function App() {
  const [physioFormData, setPhysioFormData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/physioform/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Basic '+btoa(`${process.env.REACT_APP_USER}:${process.env.REACT_APP_PASSWORD}`),
            },
          }
        );
        const data = await response.json();
        setPhysioFormData(data);
      } catch (error) {
        console.log("Error fetching physioform data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Physioform List</h1>
      <ul>
        {physioFormData.map((physioForm) => (
          <li key={physioForm.id}>
            <strong>Date:</strong> {physioForm.date}<br />
            <strong>Body Part:</strong> {physioForm.body_part}<br />
            <strong>Time:</strong> {physioForm.time}<br />
            <strong>Trauma:</strong> {physioForm.trauma}<br />
            <strong>Location:</strong> {physioForm.location}<br />
            <strong>Scans:</strong> {physioForm.scans}<br />
            <strong>Aggravating Factors:</strong> {physioForm.aggs}<br />
            <strong>Easing Factors:</strong> {physioForm.eases}<br />
            <strong>Past Treatment:</strong> {physioForm.past_treatment}<br />
            <strong>Medication:</strong> {physioForm.medication}<br />
            <strong>Work:</strong> {physioForm.work}<br />
            <strong>Goals:</strong> {physioForm.goals}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
