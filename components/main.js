import React, { useState, createContext } from "react";

import styles from "../styles/Home.module.css";
import { employeesProfile } from "../constants/employee-profile";
import Profile from "./profile";

export const DataContext = createContext();

const Main = () => {
  const [name, setName] = useState("");
  console.log("outside" + name);
  return (
    <DataContext.Provider value={name}>
      <div>
        <main className={styles.main}>
          <h1 className={styles.title}>Employees</h1>

          <p className={styles.description}>Profiles</p>

          <div className={styles.grid}>
            {employeesProfile.map((user) => (
              <a
                onClick={() => {
                  setName(user.name);
                  console.log("inside" + name);
                }}
                key={user.id}
                // href="/User profiles"
                className={styles.card}
              >
                <h2>{`Name: ${user.name}`}</h2>
                <p>{`Role: ${user.position}`}</p>
                <p>{`Employee ID: ${user.id}`}</p>
              </a>
            ))}
          </div>
        </main>
      </div>
    </DataContext.Provider>
  );
};

export default Main;
