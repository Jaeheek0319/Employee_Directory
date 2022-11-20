import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function Employee_Table({ usersX, searchUsers }) {
  console.log("table usersX", usersX);

  const renderTableRow = () => {
    let result = null;

    if (searchUsers.length > 0) {
      result = searchUsers.map((user) => {
        console.log("user.avatar", user.avatar);
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
    } else if (usersX.length > 0) {
      result = usersX.map((user) => {
        console.log("user.avatar", user.avatar);
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
