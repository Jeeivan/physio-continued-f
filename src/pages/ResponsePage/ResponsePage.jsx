import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ResponsePage() {
  const [physioFormData, setPhysioFormData] = useState([]);
  const [treatmentData, setTreatmentData] = useState([]);
  const userId = localStorage.getItem('decoded_token');
  const isSuperUser = localStorage.getItem('isSuperUser') === 'true';

  useEffect(() => {
    // Clear isSuperUser when the component mounts or when the user logs out
    console.log(userId);
    console.log('Before fetching user data. isSuperUser:', isSuperUser);

    // Fetch user information to determine if the user is a superuser
    async function fetchUserData() {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${userId}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        const userData = await response.json();

        // Set the isSuperUser state based on the user information
        if (userData.is_staff === true) {
          localStorage.setItem('isSuperUser', 'true'); // Save to local storage
        }
        console.log(userData.is_staff);
        console.log('After setting isSuperUser:', localStorage.getItem('isSuperUser'));
      } catch (error) {
        console.log('Error fetching user data', error);
      }
    }

    // Fetch user data when the component mounts or when the user logs in
    if (userId) {
      fetchUserData();
    }
  }, [userId, isSuperUser]);

  useEffect(() => {
    async function fetchData() {
      try {
        let apiUrl = `${process.env.REACT_APP_BACKEND_URL}/physioform/`;

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
          if (data.length > 0) { 
            if (!isSuperUser) {
              // If the user is not a superuser, sort and get the most recent entry
              const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
              const mostRecentPhysioformData = sortedData[0];
              setPhysioFormData([mostRecentPhysioformData]);
              console.log(data);
            } else {
              // If the user is a superuser, set all physioform data
              setPhysioFormData(data);
              console.log(physioFormData);
            }
          } else {
            console.error("Physioform data is not an array:", data);
          }
        }
      } catch (error) {
        console.log("Error fetching physioform data", error);
      }
    }

    fetchData();
  }, [isSuperUser, userId, setPhysioFormData, physioFormData]);

  useEffect(() => {
    // Fetch treatment data for the most recent physioform entry
    if (!isSuperUser && physioFormData && physioFormData.length > 0) {
      const physioFormId = getIdFromUrl(physioFormData[0].url);

      async function fetchTreatmentData() {
        try {
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/treatments/physioform/${physioFormId}/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });

          const data = await response.json();

          if (Array.isArray(data)) {
            setTreatmentData(data);
            localStorage.setItem("physio_form", physioFormId);
          } else {
            console.error("Treatment data is not an array:", data);
          }
        } catch (error) {
          console.log("Error fetching treatment data", error);
        }
      }

      fetchTreatmentData();
    }
  }, [physioFormData, isSuperUser, setTreatmentData]);

  const handleDeletePhysioForm = async () => {
    // Check if physioFormData has at least one element
    if (physioFormData.length > 0) {
      const physioFormId = getIdFromUrl(physioFormData[0].url);
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/physioformdelete/${physioFormId}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        if (response.ok) {
          console.log('Physio Form deleted successfully');
          setPhysioFormData([]);
          // window.location.href = "/";
        } else {
          console.error('Error deleting physio form');
        }
      } catch (error) {
        console.error('Error deleting physio form:', error);
      }
    } else {
      console.warn('physioFormData is empty. No physioform to delete.');
    }
  };

  const getIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2]; 
  };

  return (
    <div>
      <h1>Physioform Details</h1>
      {console.log(physioFormData)}
      {physioFormData.length > 0 ? (
        physioFormData.map((formData, index) => (
          <div key={index}>
            <h5>{getIdFromUrl(formData.url)}</h5>
            <strong>Date:</strong> {formData.date !== undefined ? formData.date : 'N/A'}<br />
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
            {isSuperUser && (
              <Link to={`/treatments/add/${getIdFromUrl(formData.url)}`}>
                <button>Add Treatment</button>
              </Link>
            )}
          </div>
        ))
      ) : (
        <p>No physioform data available.</p>
      )}

      <button onClick={handleDeletePhysioForm}>Delete</button>
      <Link to="/form/update">
        <button>Edit</button>
      </Link>

      {!isSuperUser && treatmentData.length > 0 ? (
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
      ) : (
        <p>{!isSuperUser ? "A Physio will look to answer your query as soon as they can!" : ""}</p>
      )}
    </div>
  );
}
