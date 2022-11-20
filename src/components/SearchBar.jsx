import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function SearchBar({ usersX, updateSearch }) {
  console.log("search UsersX", usersX);

  const search = () => {
    const name = document.querySelector(".request").value;

    function check(checkName) {
      console.log("checkName", checkName.first_name);
      if (checkName.first_name === name) return name;
    }

    console.log(name);

    const filter = usersX.filter(check);
    updateSearch(filter);
    console.log("Searched User", filter);
  };

  return (
    <>
      <Form.Label htmlFor="inputPassword5">Search Employee</Form.Label>
      <Form.Control
        type="email"
        aria-describedby="passwordHelpBlock"
        className="request"
      />

      <Button variant="primary" type="submit" onClick={search}>
        Submit
      </Button>
    </>
  );
}

export default SearchBar;
