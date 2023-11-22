import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/ResponsePage.css'

export default function ResponsePage() {
  const [physioFormData, setPhysioFormData] = useState([]);
  const [treatmentData, setTreatmentData] = useState([]);
  const userId = localStorage.getItem('decoded_token');
  const isSuperUser = localStorage.getItem('isSuperUser') === 'true';

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
              const physioformsWithoutTreatments = data.filter((physioform) => !physioform.treatment_complete);
              setPhysioFormData(physioformsWithoutTreatments);
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
  }, [isSuperUser, userId]);

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
    <div className="container">
      <h1>Physioform Details</h1>
      {console.log(physioFormData)}
      {physioFormData.length > 0 ? (
        physioFormData.map((formData, index) => (
          <div className="physioform-container" key={index}>
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
            <strong>Treatment:</strong> {formData.treatment_complete.toString()}<br />
            {isSuperUser && (
              <Link to={`/treatments/add/${getIdFromUrl(formData.url)}`}>
                <button className="treatment-btn">Add Treatment</button>
              </Link>
            )}
          </div>
        ))
      ) : (
        <p>No physioform data available.</p>
      )}

          {!isSuperUser && (
            <>
              <button className='delete-btn' onClick={handleDeletePhysioForm}>Delete</button>
              <Link to="/form/update">
                <button className='link-btn'>Edit</button>
              </Link>
            </>
          )}

      {!isSuperUser && treatmentData.length > 0 ? (
        <div className="treatment-details">
          <hr />
          <h2>Treatment Details</h2>
          {treatmentData.map((treatment, treatmentIndex) => (
            <div key={treatmentIndex}>
              <strong>Date:</strong> {treatment.date}<br />
              <strong>Response:</strong> {treatment.response}<br />
            </div>
          ))}
        </div>
      ) : (
        <p>{!isSuperUser ? "A Physio will look to answer your query as soon as they can! In the mean time why don't you check out the useful information we have to offer in our other pages!" : ""}</p>
      )}
    </div>
  );
}
