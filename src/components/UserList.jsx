import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/list.css";
import Loader from "./Loader";

const UserList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint you want to fetch data from
    const apiUrl = "https://602e7c2c4410730017c50b9d.mockapi.io/users"; // Replace with your API URL

    // Make a GET request to the API
    axios
      .get(apiUrl)
      .then((response) => {
        // Set the fetched data in the state
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <p>
          <Loader />
        </p>
      ) : (
        <div className="user-list">
          <h2 className="list-head">User List</h2>
          <ul>
            {data.map((index) => {
              return <li>{index.Bio}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserList;
