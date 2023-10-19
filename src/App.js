import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const apiUrl = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        alert(error);
      });
  }, []);

  return (
    <div className="App">
      {loading ? <Loader /> : ""}
      {data ? <UserList data={data} loading={loading} /> : ""}
    </div>
  );
}

export default App;
