import { useState } from "react";
import axios from "axios";

const SignIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIN = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });
      if (response.data.status === 200) {
        setMessage("User Login!");
      } else {
        setMessage("User already exists!");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setMessage("An error occurred while signing up. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIN}>Sign Up</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignIN;
