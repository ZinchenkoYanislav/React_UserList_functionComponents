import React from "react";
import FormUser from "./FormUser";
import UserList from "./UserList";
import useUser from "./useUser";

export default function UserListComponent() {
  const { users, formVisible, toggleForm, addUser, deleteUser } = useUser();
  return (
    <>
      <div className="container">
        <button
          type="button"
          onClick={toggleForm}
          className="btn btn-primary mb-3"
        >
          Add User
        </button>
        {formVisible ? (
          <FormUser toggleForm={toggleForm} addUser={addUser} />
        ) : (
          ""
        )}
        <UserList users={users} deleteUser={deleteUser} />
      </div>
    </>
  );
}
