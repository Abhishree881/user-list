import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";

function App() {
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
    <div className="App">
      {data ? <UserList data={data} loading={loading} /> : ""}
    </div>
  );
}

export default App;
