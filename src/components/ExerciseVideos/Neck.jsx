import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/ExerciseVideos.css";

export default function Neck() {
  return (
    <div className="exercise-container">
      <div className="exercise-item">
        <h4>Chin Tucks</h4>
        <div className="video-description-container">
          <div className="video-container ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/7rnlAVhAK-8?si=q4HaMaL1dlP96Bi9"
              title="YouTube video1"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Sitting straight-backed or even lying down. Pull your chin in,
            keeping your neck and back straight (not tipping your head
            forwards). Hold at the end position and feel the stretch in your
            neck for 3-5 seconds. Repeat 10 times.
          </p>
        </div>
      </div>

      <div className="exercise-item">
        <h4>Upper Trapezius Stretch</h4>
        <div className="video-description-container">
          <div className="video-container ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/-r0eoFS7_5Q?si=JP6hK6aAOQ6KFR6D"
              title="YouTube video2"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Sitting on a chair. Hold on to the side of the chair with one hand.
            Put the other hand over your head onto the opposite ear. Tilt your
            trunk and let the hand on the ear bend your head away from the side
            to be stretched. Hold for approx 10-15 seconds. Repeat 3 times.
          </p>
        </div>
      </div>

      <div className="exercise-item">
        <h4>Isometric Neck Flexion</h4>
        <div className="video-description-container">
          <div className="video-container ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/4rK-m6GvNCk?si=gOwb4NXa8ikvM5dg"
              title="YouTube video3"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Sitting. Try to bend your head forward while resisting the movement
            with your hand. Hold approx. 1 - 3 secs. Repeat 5 times. 2-3 sets.
          </p>
        </div>
      </div>

      <div className="exercise-item">
        <h4>Isometric Neck Side Flexion</h4>
        <div className="video-description-container">
          <div className="video-container ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/3Owy1hurobA?si=8z1iwnrnQJvNuF3W"
              title="YouTube video4"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Sitting. Tilt your head to one side while resisting the movement
            with your hand. Hold approx. 1 - 3 secs. Repeat to other side.
            Repeat 5 times. 2-3 sets.
          </p>
        </div>
      </div>

      <div className="exercise-item">
        <h4>Scap Retraction</h4>
        <div className="video-description-container">
          <div className="video-container ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/WklUZWulQao?si=kRQjd2ZR1QVlzgoU"
              title="YouTube video5"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Start by sitting on a chair with your hands resting on your thighs.
            Pull your shoulder blades together. Then relax. Hold for 1-3
            seconds. Repeat 10 times.
          </p>
        </div>
      </div>
    </div>
  );
}
