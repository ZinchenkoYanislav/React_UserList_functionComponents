import { useEffect, useState } from "react";

export default function useUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  const [formVisible, setformVisible] = useState(false);

  function toggleForm() {
    setformVisible(!formVisible);
  }

  function addUser(name, email, phone) {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((user) => {
        const newUsers = [...users, user];
        setUsers(newUsers);
      });
  }

  function deleteUser(id) {
    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const newUsers = users.filter((item) => item.id !== id);
        setUsers(newUsers);
      });
  }

  return {
    users,
    formVisible,
    toggleForm,
    addUser,
    deleteUser,
  };
}
