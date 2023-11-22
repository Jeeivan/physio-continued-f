import { useState, useEffect } from 'react';
import '../../css/PhysioForm.css';

export default function Form({ existingData, isEditMode }) {
  const areaOptions = ['low back', 'neck', 'shoulder', 'elbow', 'wrist', 'hand', 'hip', 'knee', 'ankle/foot'];
  const physioFormId = localStorage.getItem("physio_form");
  const userId = localStorage.getItem('decoded_token');
  console.log(isEditMode);

  const [formData, setFormData] = useState({
    body_part: '',
    time: '',
    trauma: '',
    location: '',
    scans: '',
    aggs: '',
    eases: '',
    past_treatment: '',
    medication: '',
    work: '',
    goals: '',
    user: `${process.env.REACT_APP_BACKEND_URL}/users/${userId}/`,
  });

  useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = isEditMode
      ? `${process.env.REACT_APP_BACKEND_URL}/physioformupdate/${physioFormId}/`
      : `${process.env.REACT_APP_BACKEND_URL}/physioformadd/`;

    try {
      const response = await fetch(apiUrl, {
        method: isEditMode ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        window.location.href = "/response";
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  
    return (
      <div>
      <h1>{isEditMode ? 'Edit' : 'Create'} Physio Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Body Part:
            <select
              name="body_part"
              value={formData.body_part}
              onChange={handleChange}
            >
                <option value="">Select Body Part</option>
                {areaOptions.map((area)=> (
                    <option key={area} value={area}>
                        {area}
                    </option>
                ))}
            </select>
          </label>
          <br />
    
          <label>
            Length of symptoms (months):
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              maxLength="15"
            />
          </label>
          <br />
    
          <label>
            Was there any trauma at the time the symptoms started?:
            <input
              type="text"
              name="trauma"
              value={formData.trauma}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            Location of pain? e.g. front of the knee:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            Have you had any scans for this pain?:
            <input
              type="text"
              name="scans"
              value={formData.scans}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            What aggravates/makes the pain worse?:
            <input
              type="text"
              name="aggs"
              value={formData.aggs}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            What eases/makes the pain better?:
            <input
              type="text"
              name="eases"
              value={formData.eases}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            Any past Physio/Treatment for your current symptoms?:
            <input
              type="text"
              name="past_treatment"
              value={formData.past_treatment}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            Medication:
            <input
              type="text"
              name="medication"
              value={formData.medication}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            Are you working and if so please state your profession and how is this affected?:
            <input
              type="text"
              name="work"
              value={formData.work}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            What are your goals and looking to get out of physiotherapy?:
            <input
              type="text"
              name="goals"
              value={formData.goals}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        </div>
      );
    };

