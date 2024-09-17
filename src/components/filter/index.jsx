import React from "react";
import { setFilterAction } from "../../redux/actions";
import { connect } from "react-redux";
import styles from "./Filter.module.css";

function Filter({ setFilterAction }) {
  function handleChange(e) {
    setFilterAction(e.target.value);
  }
  return (
    <>
      <input
        autoFocus
        className={styles.input}
        type="text"
        placeholder="Filter Users..."
        onChange={handleChange}
      />
    </>
  );
}

const mapDispatchToProps = { setFilterAction };
export default connect(null, mapDispatchToProps)(Filter);
