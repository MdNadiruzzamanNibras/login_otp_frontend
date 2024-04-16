import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const [otp, setOTP] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/submitOtp", {
        otp,
        password,
      });
      console.log(res, "14 submit pass");
      if (res.status === 200) {
        alert("otp send");
        navigate("/signin");
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
        <h2 className="text-3xl text-center my-9">Change Password</h2>
        <input
          type="text"
          placeholder="OTP"
          className="border-2 border-gray-500 w-full text-xl py-2 rounded pl-2 my-3"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
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
          onClick={handleSubmit}
          className="bg-black text-white text-xl text-center w-full py-2"
        >
          Change Password
        </button>{" "}
        <br />
      </div>
    </div>
  );
};

export default NewPassword;
