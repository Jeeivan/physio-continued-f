import React, { useState, useEffect } from 'react';
import Form from '../../components/Form/Form';

export default function PhysioFormUpdate() {
  const [existingData, setExistingData] = useState({});
  const physioFormId = localStorage.getItem("physio_form");
  const isEditMode = !!physioFormId;

  useEffect(() => {
    async function fetchExistingData() {
      try {
        const response = await fetch(`http://localhost:8000/physioform/${physioFormId}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        const data = await response.json();
        setExistingData(data);
      } catch (error) {
        console.error('Error fetching existing data:', error);
      }
    }

    if (isEditMode) {
      fetchExistingData();
    }
  }, [physioFormId, isEditMode]);

  return (
    <div>
      <Form existingData={existingData} isEditMode={isEditMode} />
    </div>
  );
}
