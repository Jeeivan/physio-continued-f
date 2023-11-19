import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/ExerciseVideos.css";

export default function Ankle() {
  return (
    <div className="exercise-container">
      <div className="exercise-item">
        <h4>Heel raises</h4>
        <div className="video-description-container">
          <div className="video-container ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/A_npfqG65vs?si=koucuqXvPAjCoyBw"
              title="YouTube video2"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Stand tall, with your weight distributed evenly on both feet, and
            take support if needed. Rise up onto your toes and in a controlled
            manner return to the starting position. If this is too easy go up on
            both feet and slowly come down on one foot. If this is too painful
            try doing sitting down. Repeat 8 - 12 times. 3 sets.
          </p>
        </div>
      </div>

      <div className="exercise-item">
        <h4>Ankle Alphabet</h4>
        <div className="video-description-container">
          <div className="video-container ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/ro0eWSYbSuY?si=jSdZU37iuSIKTgBS"
              title="YouTube video4"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Sitting or lying. Keep you foot in the air. Rotate your ankle in a
            circular motion. Change directions. Repeat 8 - 10 times. 2-3 sets.
          </p>
        </div>
      </div>

      <div className="exercise-item">
        <h4>Eccentric Heel Raises</h4>
        <div className="video-description-container">
          <div className="video-container ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/fX2ca6Vgp9s?si=wqrrqclN3EV1JB2O"
              title="YouTube video3"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Stand tall, with your weight distributed evenly on both feet, and
            take support if needed. Rise up onto your toes and in a controlled
            manner slowly take one foot off the ground and slowly come down on
            the foot you would like to exercise. Repeat 8 - 10 times. 2-3 sets.
          </p>
        </div>
      </div>

      <div className="exercise-item">
        <h4>Gastrocnemius-Soleus Stretch</h4>
        <div className="video-description-container">
          <div className="video-container ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/mCEBa9MFckI?si=5IOmJ6mu4UMj8Kp5"
              title="YouTube video1"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Stand in a walking position with the right leg to be stretched
            straight behind you and the other leg bent in front of you. Take
            support from a wall or chair. Lean your body forwards and down until
            you feel the stretching in the calf of the straight leg. Hold
            approx. 10 - 15 secs. - relax. Repeat 3 times.
          </p>
        </div>
      </div>

      <div className="exercise-item">
        <h4>Single Leg Balance Exercise</h4>
        <div className="video-description-container">
          <div className="video-container ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/7SF7AYh2_Yw?si=YiFfjfAVc9U1h6cj"
              title="YouTube video5"
              allowFullScreen
            ></iframe>
          </div>
          <p className="description">
            Start by standing. Move weight over to one leg and lift the other
            leg off the floor. The knee of your stance leg should point straight
            forwards as should your toes and hips. Hold this position. Have a
            wall or table as support close by if needed. Stand on a pillow or
            any unstable surface if this is easy for you. Continue for 5-30
            seconds. Progress and you feel comfortable.
          </p>
        </div>
      </div>
    </div>
  );
}
