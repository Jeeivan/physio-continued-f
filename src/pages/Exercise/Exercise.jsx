import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Modal, Button } from 'react-bootstrap'
import LowBack from '../../components/ExerciseVideos/LowBack';
import Ankle from '../../components/ExerciseVideos/Ankle';
import Hip from '../../components/ExerciseVideos/Hip';
import Knee from '../../components/ExerciseVideos/Knee';
import Neck from '../../components/ExerciseVideos/Neck';
import Shoulder from '../../components/ExerciseVideos/Shoulder';
import '../../css/Exercise.css'

export default function Exercise() {
        const [showModal, setShowModal] = useState(true);
        const [selectedBodyPart, setSelectedBodyPart] = useState(null)

        const handleBodyPartClick = (bodyPart) => {
            setSelectedBodyPart(bodyPart)
            setShowModal(false)
        }

        const bodyPartHeadings = {
            lowBack: 'Low Back Exercises',
            neck: 'Neck Exercises',
            knee: 'Knee Exercises',
            shoulder: 'Shoulder Exercises',
            hip: 'Hip Exercises',
            ankle: 'Ankle Exercises',
          };

  return (
    <Container>
        <h1>{bodyPartHeadings[selectedBodyPart] || 'Exercises'}</h1>
        <div className="exercise-buttons">
        <Button onClick={() => handleBodyPartClick('lowBack')}>Low Back</Button>
        <Button onClick={() => handleBodyPartClick('neck')}>Neck</Button>
        <Button onClick={() => handleBodyPartClick('knee')}>Knee</Button>
        <Button onClick={() => handleBodyPartClick('shoulder')}>Shoulder</Button>
        <Button onClick={() => handleBodyPartClick('hip')}>Hip</Button>
        <Button onClick={() => handleBodyPartClick('ankle')}>Ankle</Button>
        </div>
        {selectedBodyPart && (
        <>
          {selectedBodyPart === 'lowBack' && <LowBack />}
          {selectedBodyPart === 'neck' && <Neck />}
          {selectedBodyPart === 'knee' && <Knee />}
          {selectedBodyPart === 'shoulder' && <Shoulder />}
          {selectedBodyPart === 'hip' && <Hip />}
          {selectedBodyPart === 'ankle' && <Ankle />}
        </>
      )}

        <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to the Exercise Page. DISCLAIMER!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>These exercises serve as examples, and while we cannot guarantee they will alleviate your pain, it's crucial to understand that treatment extends beyond exercises alone. It's worth noting that exercises performed on the floor can also be adapted for bed. It's important to emphasize that there's no such thing as a 'perfect' exercise, and you're not expected to perform every exercise listed here. The key is to discover the exercises that work specifically for you.<br /> Don't feel pressured to adhere to a specific repetition count – focus on what feels comfortable for you. Gradually ease into each exercise and steadily increase repetitions at your own pace. Remember, it's about finding the right exercise tailored to your needs. So, don't worry about the quantity; prioritize comfort and gradual progress.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

