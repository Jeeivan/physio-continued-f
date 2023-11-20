import React, { useState, useEffect } from 'react';

export default function ResponsePage() {
  const [physioFormData, setPhysioFormData] = useState([]);
  const [treatmentData, setTreatmentData] = useState([]);
  const [isSuperUser, setIsSuperUser] = useState(false);  // New state
  const userId = localStorage.getItem('decoded_token');

  useEffect(() => {
    // Fetch user information to determine if the user is a superuser
    async function fetchUserData() {
      try {
        const response = await fetch(`http://localhost:8000/users/${userId}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        const userData = await response.json();

        // Set the isSuperUser state based on the user information
        setIsSuperUser(userData.is_staff);
      } catch (error) {
        console.log("Error fetching user data", error);
      }
    }

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    async function fetchData() {
      try {
        let apiUrl = `http://localhost:8000/physioform/`;

        // If the user is not a superuser, fetch only their most recent physioform data
        if (!isSuperUser) {
          apiUrl += `user/${userId}`;
        }

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        const data = await response.json();

        if (Array.isArray(data)) {
          if (!isSuperUser) {
            // If the user is not a superuser, sort and get the most recent entry
            const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            const mostRecentPhysioformData = sortedData[0];
            setPhysioFormData([mostRecentPhysioformData]);
          } else {
            // If the user is a superuser, set all physioform data
            setPhysioFormData(data);
          }
        } else {
          console.error("Physioform data is not an array:", data);
        }
      } catch (error) {
        console.log("Error fetching physioform data", error);
      }
    }

    fetchData();
  }, [userId, isSuperUser]);

  useEffect(() => {
    // Fetch treatment data for the most recent physioform entry
    
    if (!isSuperUser && physioFormData.length > 0) {
      const physioFormId = getIdFromUrl(physioFormData[0].url);

      async function fetchTreatmentData() {
        try {
          const response = await fetch(`http://localhost:8000/treatments/physioform/${physioFormId}/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });

          const data = await response.json();

          if (Array.isArray(data)) {
            setTreatmentData(data);
          } else {
            console.error("Treatment data is not an array:", data);
          }
        } catch (error) {
          console.log("Error fetching treatment data", error);
        }
      }

      fetchTreatmentData();
    }
  }, [physioFormData, isSuperUser]);

  const getIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2]; // Assuming the id is the second-to-last part
  };

  return (
    <div>
      <h1>Physioform Details</h1>
      <h1>Is a super user = {isSuperUser.toString()}</h1>
      {physioFormData.map((formData, index) => (
        <div key={index}>
          <h1>{getIdFromUrl(formData.url)}</h1>
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
      
      {!isSuperUser && treatmentData.length > 0 && (
      <div>
        <h2>Treatment Details</h2>
        {treatmentData.map((treatment, treatmentIndex) => (
          <div key={treatmentIndex}>
            <strong>Date:</strong> {treatment.date}<br />
            <strong>Response:</strong> {treatment.response}<br />
            <hr />
          </div>
        ))}
      </div>
    )}

    {(!isSuperUser && treatmentData.length === 0) && (
      <p>A Physio will answer you as soon as they can!</p>
    )}
  </div>
  );
}
