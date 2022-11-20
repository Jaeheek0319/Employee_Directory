import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee_Table from "./components/Employee_Table";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar />
        <Employee_Table />
      </div>
    </Router>
  );
}

export default App;
