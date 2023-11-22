import { useEffect } from "react";
import axios from "axios";

export const Logout = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/logout/`,
          {
            refresh_token: localStorage.getItem("refresh_token"),
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        // Check if the response has a 'status' property
        if (response.status === 200) {
          // Logout was successful
          localStorage.clear();
          axios.defaults.headers.common["Authorization"] = null;
          window.location.href = "/login";
        } else {
          // Handle unsuccessful logout (e.g., display an error message)
          console.log("Logout not successful", response);
        }
      } catch (error) {
        // Handle any network or other errors
        console.log("Logout not working", error);
      }
    })();
  }, []);

  return <div></div>;
};
