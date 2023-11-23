import '../../css/Home.css'
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          // eslint-disable-next-line
          const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/home/`, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("access_token")}`
            },
          });
        } catch (e) {
          console.log("not auth");
        }
      })();
    }
  }, []);
  return (
    <div className="home-container">
      
      <p>Welcome to WaitlessWellness—your personalized guide to proactive physiotherapy care! Recognizing the prolonged waiting times within the NHS, we understand the urgency of addressing your health concerns. As a seasoned physiotherapist with two years of experience in the NHS, I am here to bridge the gap between your initial inquiry and your face-to-face appointment. Simply submit a brief query outlining your condition, and I will provide tailored advice to kickstart your treatment journey. Our comprehensive platform doesn't stop there—explore our FAQ section for additional insights and peruse valuable general information to empower your health decisions. Additionally, discover a range of targeted exercises designed to empower you on your path to recovery. Take control of your well-being while navigating the waiting game with WaitlessWellness. Your journey to optimal health begins here.</p>
      <img className='wellness' src="https://poemsbyclarabelle.files.wordpress.com/2016/04/no-more-waiting.png" alt="wellness pic" />
      <h4>We guarantee a response from one of our physios within a week!</h4>
    </div>
    )
}
