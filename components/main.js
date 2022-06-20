import React, { useState, createContext } from "react";
import Link from "Next/link";

import styles from "../styles/Home.module.css";
import { employeesProfile } from "../constants/employee-profile";

export const DataContext = createContext();

const Main = () => {
  const [name, setName] = useState("");
  console.log("outside" + name);
  return (
    <DataContext.Provider value={name}>
      <div>
        <main className={styles.main}>
          <h1 className={styles.title}>Title</h1>

          <p className={styles.description}>Profiles</p>

          <div className={styles.grid}>
            {employeesProfile.map((user) => (
              <Link
                href="/profile"
                onClick={() => {
                  setName(user.name);
                  console.log("inside" + name);
                }}
                key={user.id}
                className={styles.card}
              >
                <h2>{`Name: ${user.name}`}</h2>
                <p>{`Role: ${user.position}`}</p>
                <p>{`Employee ID: ${user.id}`}</p>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </DataContext.Provider>
  );
};

export default Main;
