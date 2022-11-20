import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchBar() {
  return (
    <>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control type="email" aria-describedby="passwordHelpBlock" />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
}

export default SearchBar;
