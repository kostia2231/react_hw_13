import React from "react";
import Filter from "./components/filter";
import UserList from "./components/userList";
import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <h1 className="heading">User List</h1>
      <Filter />
      <UserList />
    </div>
  );
}
