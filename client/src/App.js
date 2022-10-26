import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listPackages, setlistPackages] = useState([]);
  // useEffect(() => {
  //   Axios.get("https://skwergroupapi.kicklaced.com/getPackages").then((response) => {
  //     setListOfUsers(response.data);
  //   });
  // }, []);

  const getPackages = () => {
    Axios.get("https://skwergroupapi.kicklaced.com/getPackages").then((response) => {
      setlistPackages(response.data);
    });
  };

  return (
    <div className="App">
      <button onClick={getPackages}>Show Employees</button>
      <div className="usersDisplay">
        {listPackages.map((val, key) => {
          return (
            <div key={val._id}>
              <h1>Name: {val.name}</h1>
              <h1>Price: {val.price}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
