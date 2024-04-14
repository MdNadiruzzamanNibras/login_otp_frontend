const ForgetPass = () => {
  return (
    <div className="flex justify-center items-center h-3/6">
      <div className="w-96">
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-500 w-full text-xl py-2 rounded pl-2 my-3"
        />
        <button className="bg-black text-white text-xl text-center w-full py-2">
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default ForgetPass;
