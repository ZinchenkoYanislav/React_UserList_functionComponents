import React from "react";
import UserListItem from "./UserListItem";

export default function UserList({ users, deleteUser }) {
  return (
    <table className="table table-bordered ">
      <thead>
        <tr className="table-primary ">
          <th className="text-center" scope="col">
            Name
          </th>
          <th className="text-center" scope="col">
            Email
          </th>
          <th className="text-center" scope="col">
            Phone Number
          </th>
          <th className="text-center" scope="col">
            Buttons
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => {
          return (
            <UserListItem key={item.id} item={item} deleteUser={deleteUser} />
          );
        })}
      </tbody>
    </table>
  );
}
