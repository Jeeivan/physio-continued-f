import axios from "axios";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/token/`,
        user,
        {
          headers: { "Content-Type": "application/json" },
        },
        {
          withCredentials: true,
        }
      );

      const decodedToken = jwtDecode(data.access);
      const userId = decodedToken.user_id;

      // Fetch user information to determine if the user is a superuser
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/users/${userId}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.access}`,
            },
          }
        );
        const userData = response.data;

        localStorage.clear();
        localStorage.setItem("name", username)
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        localStorage.setItem("decoded_token", userId);

        // Set the isSuperUser state based on the user information
        if (userData.is_staff === true) {
          localStorage.setItem("isSuperUser", "true");
        } else {
          localStorage.setItem("isSuperUser", "false");
        }

        console.log("Is SuperUser:", userData.is_staff);
        axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
        window.location.href = `/`;
      } catch (error) {
        console.error("Error during login:", error);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setPasswordError("The details you have provided are incorrect!")
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              className="form-control mt-1"
              placeholder="Enter Username"
              name="username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
