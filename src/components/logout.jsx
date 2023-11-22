import { useEffect } from "react";
import axios from "axios";

export const Logout = () => {
  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/logout/`,
          {
            refresh_token: localStorage.getItem("refresh_token"),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        // Clear localStorage
        localStorage.clear();

        // Remove Authorization header
        delete axios.defaults.headers.common["Authorization"];

        // Redirect after the asynchronous operations are completed
        window.location.href = "/login";
      } catch (e) {
        console.log("Logout not working", e);
      }
    };

    logout();
  }, []);

  return <div></div>;
};
