import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      navigate("/signin");
    }
  }, []);
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="flex justify-center mt-8 text-3xl">
      <div>
        <h1>this home page</h1> <br />
        <div>
          <p>{localStorage.getItem("EMAIL")}</p>
          <button onClick={logOut}>LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
