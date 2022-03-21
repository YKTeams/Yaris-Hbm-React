import React, { useState, useEffect } from "react";
import Axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://localhost:44303/api/values/5").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;