// Home.js

// import { useNavigate } from "react-router-dom";
import { UseGetUser } from "../Hook/UseGetUser";

const Home = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("Token");
  //   if (!token) {
  //     navigate("/signin");
  //   }
  // }, []);

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const { user, error } = UseGetUser(); // Corrected usage of UseGetUser
  // const userAuth = UseGetUser();

  return (
    <div className="flex justify-center mt-8 text-3xl">
      <div>
        <h1>This is the home page</h1>
        <br />
        <div>
          <p>{user.email}</p>
          <button onClick={logOut}>Log Out</button>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
