import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });
      if (response.data.code === 200) {
        setMessage("User created successfully!");
      } else {
        setMessage("User already exists!");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setMessage("An error occurred while signing up. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-3/6">
      <div className="w-96">
        <h2 className="text-3xl text-center my-9">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-500 w-full text-xl py-2 rounded pl-2 my-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-500 w-full text-xl py-2 rounded pl-2 my-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button
          onClick={handleSignUp}
          className="bg-black text-white text-xl text-center w-full py-2"
        >
          Sign Up
        </button>{" "}
        <br />
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;
