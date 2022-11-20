import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function Employee_Table() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=100")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }, []);

  const renderTableRow = () => {
    let result = null;

    if (users.length > 0) {
      result = users.map((user) => {
        return (
          <Card className="card">
            <Card.Body>
              <p>
                <div className="card-picture">
                  <img src={user.avatar} />
                </div>
                <div className="card-name">
                  {user.first_name} {user.last_name}
                </div>
                <div className="card-employment">
                  <p>{user.employment.title}</p>
                </div>
                <div className="seperator">
                  <hr className="line"></hr>
                  <p className="line-text">Contact</p>
                  <hr className="line"></hr>
                </div>
                <div className="card-contact">
                  {user.email} {user.phone_number}
                </div>
              </p>
            </Card.Body>
          </Card>
        );
      });
    }

    return result;
  };

  return <>{renderTableRow()}</>;
}
