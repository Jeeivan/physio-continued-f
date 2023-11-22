import '../../css/Home.css'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const userId = localStorage.getItem('decoded_token')
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/home/`, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("access_token")}`
            },
          });
          setMessage(data.message);
        } catch (e) {
          console.log("not auth");
        }
      })();
    }
  }, []);
  return (
    <div className="home-container">
      <div>
        {userId}
      </div>
      <p>{message}</p>
    </div>
    )
}
