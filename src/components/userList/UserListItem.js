import React from "react";

export default function UserListItem({ item, deleteUser }) {
  function onDelete() {
    deleteUser(item.id);
  }
  return (
    <tr className="table-primary">
      <td className="text-center">{item.name}</td>
      <td className="text-center">{item.email}</td>
      <td className="text-center">{item.phone}</td>
      <td className="text-center">
        <button onClick={onDelete} type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
