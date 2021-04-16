import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const dummyFunc = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res, 'coming from .then')
  //   })
  // }
  // GET
  // POST
  // PUT
  // DELETE
  useEffect(() => {
    const asyncDemo = async () => {
      /*  let result1 = await fetch(
        "https://face-recognition-pc.herokuapp.com/register",
        {
          method: "POST",
          body: JSON.stringify({
            name: "xyzzzss",
            email: "shubhszsssz@gmail.com",
            password: "1234"
          }),
          headers: {
            "Content-type": "application/json"
          }
        }
      );
      console.log(result1.status);
      result1 = await result1.json();
      console.log(result1);*/

      let result2 = await fetch(
        "https://face-recognition-pc.herokuapp.com/image",
        {
          method: "PUT",
          body: JSON.stringify({
            id: 20
          }),
          headers: {
            "Content-type": "application/json"
          }
        }
      );
      console.log(result2.status);
      result12 = await result2.json();
      console.log(result2);
    };
    asyncDemo();
  }, []);
  const renderUsers = () => {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filteredUsers.map(user => <div>{user.name}</div>);
  };
  return (
    <div>
      <h1>Search users</h1>
      <input
        type="search"
        onChange={event => setSearchValue(event.target.value)}
      />
      {renderUsers()}
    </div>
  );
}
