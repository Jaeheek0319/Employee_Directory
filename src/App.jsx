import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee_Table from "./components/Employee_Table";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";

function App() {
  const [usersX, setUserX] = useState([]);
  const [searchUsers, setSearchUser] = useState([]);

  const searchData = (users) => {
    setSearchUser(users);
  };

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=20")
      .then((res) => res.json())
      .then((data) => {
        setUserX(data);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <SearchBar usersX={usersX} updateSearch={searchData} />
        <Employee_Table usersX={usersX} searchUsers={searchUsers} />
      </div>
    </Router>
  );
}

export default App;
