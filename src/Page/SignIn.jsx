import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSignIN = async () => {
    try {
      const res = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });
      console.log(res, "15 login");
      if (res.status === 200) {
        localStorage.setItem("Token", res.data.token);
        localStorage.setItem("EMAIL", res.data.email);
        navigate("/");
      } else if (res.status === 404) {
        setMessage("User not found!");
      } else if (res.status === 401) {
        setMessage("Incorrect Password!");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setMessage("An error occurred while signing in. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-3/6">
      <div className="w-96">
        <h2 className="text-3xl text-center my-9">Sign In</h2>
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
          onClick={handleSignIN}
          className="bg-black text-white text-xl text-center w-full py-2"
        >
          Sign In
        </button>{" "}
        <a href="/forgetPass" className="text-blue-600">
          Forgate Password
        </a>
        <br />
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default SignIN;
