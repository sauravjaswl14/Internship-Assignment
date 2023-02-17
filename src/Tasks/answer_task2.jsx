import React, { useState, useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/users";

function FakeUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  const removeUser = (id) => {
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    document.title = "Users display page";
  });

  return (
    <>
      <h2>Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, name, username } = user;
          return (
            <div>
              <li key={id}>
                <div>
                  <h4>{name}</h4>
                  <a href="#">@{username}</a>
                </div>
                <button className="rm-btn" onClick={() => removeUser(id)}>
                  remove
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
export default FakeUsers;
