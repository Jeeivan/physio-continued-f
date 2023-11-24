import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function createUser() {
    try {
      // Password validation
      if (password !== passwordConfirmation) {
        setPasswordError("Passwords do not match");
        return;
      } 

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          password_confirmation: passwordConfirmation,
          // Include other signup fields as needed
        }),
      });

      if (response.ok) {
        await loginUser();
        // User successfully created, handle accordingly
        console.log("User created successfully");
      } else {
        // Handle error cases
        setPasswordError("Password does not meet the criteria");
        console.log("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user", error);
    }
  }

  async function loginUser() {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const decodedToken = jwtDecode(data.access);
        const userId = decodedToken.user_id;
        localStorage.setItem("name", username)
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        localStorage.setItem("decoded_token", userId)
        console.log("User logged in successfully");
        window.location.href = "/";
      } else {
        console.log("Failed to log in user");
      }
    } catch (error) {
      console.error("Error logging in user", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <p>Your username must not have any spaces in it.</p>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Password Confirmation:
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </label>
        <br />
        <p>Your password can’t be too similar to your other personal information.<br />
          Your password must contain at least 8 characters.<br />
          Your password can’t be a commonly used password.<br />
          Your password can’t be entirely numeric.<br />
        </p>
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
