import React, { useContext } from "react";

import styles from "../styles/Home.module.css";
import { DataContext } from "./main";

const Profile = () => {
  const data = useContext(DataContext);
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>User Profile</h1>
      {/* <h1>{`Employee Name: ${value}`}</h1> */}
      <div>The answer is {value} </div>
    </div>
  );
};

export default Profile;
