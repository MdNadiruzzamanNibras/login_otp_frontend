// UseGetUser.js
import { useEffect, useState } from "react";

export const UseGetUser = () => {
  const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      // setLoading(true);
      const token = localStorage.getItem("Token");

      if (!token) {
        // setLoading(false);
        setError("Access token not found");
        return;
      }
      let bearer = "Bearer " + token;
      fetch("http://localhost:5000/getUser", {
        method: "POST",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          setError(error);
        });
      // const response = await fetch("http://localhost:5000/getUser", {
      //   method: "POST",
      //   withCredentials: true,
      //   credentials: "include",
      //   headers: {
      //     Authorization: bearer,
      //     "content-type": "application/json",
      //   },
      // });

      // const response = await fetch("http://localhost:5000/getUser", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     authorization: `Bearer ${token}`,
      //   }),
      // });
      // console.log(response, "response");

      // const data = await response.json();
      // console.log(data, "data");
      // if (response.ok && data?.email) {
      //   setUser(data);
      //   // setLoading(false);
      // } else {
      //   setError(data?.error?.message || "Unknown error occurred");
      //   setLoading(false);
      // }
    } catch (err) {
      setError(err.message || "Failed to fetch user data");
      // setLoading(false);
    }
  };

  return { user, error };
};
