import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/sendOtp", {
        email,
      });
      console.log(res, "14 forget pass");
      if (res.status === 200) {
        alert("otp send");
        navigate("/otp");
      } else if (res.status === 404) {
        alert("User not found!");
      } else if (res.status === 401) {
        alert("Incorrect Password!");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("An error occurred while signing in. Please try again later.");
    }
  };
  return (
    <div className="flex justify-center items-center h-3/6">
      <div className="w-96">
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-500 w-full text-xl py-2 rounded pl-2 my-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSendOtp}
          className="bg-black text-white text-xl text-center w-full py-2"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default ForgetPass;
