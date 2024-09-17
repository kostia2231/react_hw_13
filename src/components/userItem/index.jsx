import React from "react";
import styles from "./UserItems.module.css";

export default function UserItem({ user }) {
  return <li className={styles.item}>{user.name}</li>;
}
