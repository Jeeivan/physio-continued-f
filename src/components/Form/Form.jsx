import {useState} from 'react'
import '../../css/PhysioForm.css'

export default function Form() {
    const areaOptions = ['low back', 'neck', 'shoulder', 'elbow', 'wrist', 'hand', 'hip', 'knee', 'ankle/foot'];

    const [formData, setFormData] = useState({
      date: '',
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
      user: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can handle form submission logic here, e.g., sending data to the backend
      console.log('Form submitted:', formData);
      // Call your backend API to send the formData
    };
  
    return (
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
          <br />
    
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
              type="number"
              name="time"
              value={formData.time}
              onChange={handleChange}
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
      );
    };
