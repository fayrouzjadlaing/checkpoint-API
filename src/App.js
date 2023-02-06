import axios from "axios";
import { useState, useEffect } from "react";
import UserListe from "./components/UserListe";
function App() {
  const [listes, setListes] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getlistes = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setListes(res.data);
      setLoading(false);
    } catch (err) {
      console.log("error:", err.message);
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getlistes();
  }, []);
  if (loading === true) {
    return <div>loading...</div>;
  }

  if (error !== "") {
    return <div>{error}</div>;
  }
  return <UserListe listes={listes} />;
}

export default App;
