import React, { useState } from "react";

export default function FormUser({ toggleForm, addUser }) {
  const [newTitleForm, setNewTitleForm] = useState({
    newName: "",
    newEmail: "",
    newPhone: "",
  });

  function changeHandler(e) {
    setNewTitleForm({
      ...newTitleForm,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    addUser(newTitleForm.newName, newTitleForm.newEmail, newTitleForm.newPhone);
    toggleForm();
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          name="newName"
          value={newTitleForm.newName}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group mb-3">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email"
          name="newEmail"
          value={newTitleForm.newEmail}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group mb-3">
        <label>Phone number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your phone number"
          name="newPhone"
          value={newTitleForm.newPhone}
          onChange={changeHandler}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary btnMargin">
          Submit
        </button>
        <button
          onClick={toggleForm}
          type="button"
          className="btn btn-warning ml-5"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
