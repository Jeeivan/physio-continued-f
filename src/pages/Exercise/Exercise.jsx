import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Modal, Button } from 'react-bootstrap'

export default function Exercise() {
        const [showModal, setShowModal] = useState(true);
  return (
    <Container>
        <h1>Exercises To Try</h1>
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
        <h4>Knee Rolls</h4>
        <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/39gL6fOqKWI?si=THUISPCoNrJmX0oF" title="YouTube video1" allowFullScreen></iframe>
</div>
        <h4>Knee Hugs</h4>
        <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/eP0DkztNhcs?si=XtTt44NgyJCXRKyN" title="YouTube video2" allowFullScreen></iframe>
</div>
        <h4>Pelvic Tilts</h4>
        <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/44D6Xc2Fkek?si=ePRC28KBw3saJmo3" title="YouTube video3" allowFullScreen></iframe>
</div>
        <h4>Bridge</h4>
        <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/Ls0ge81SeeQ?si=TJp06wsIPaZilgt3" title="YouTube video4" allowFullScreen></iframe>
</div>
        <h4>4 point kneeling with alternate arm raise</h4>
        <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/wz3N_VVe9nE?si=xtnIh297iBLkfb9z" title="YouTube video5" allowFullScreen></iframe>
</div>
        <h4>4 point kneeling with alternate leg raise</h4>
        <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/ypYVo4UqNwU?si=4d_djZPJOIo34qz7" title="YouTube video6" allowFullScreen></iframe>
</div>
    </Container>
  )
}
