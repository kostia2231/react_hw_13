import React from "react";
import UserItem from "../userItem";
import { connect } from "react-redux";
import styles from "./UserList.module.css";

function UserList({ users, filter }) {
  const filteredUsers = users.filter((users) =>
    users.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users,
    filter: state.filter,
  };
}

export default connect(mapStateToProps)(UserList);
