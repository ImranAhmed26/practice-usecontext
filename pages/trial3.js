import { useState, createContext, useContext } from "react";
import Component5 from "../components/trial-3";

export const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <Component5 />
      <button
        onClick={() => {
          `${
            user === "Jesse Hall"
              ? setUser("Jesse James")
              : user === "Jesse James"
              ? setUser("Jesse Tempa")
              : setUser("Jesse Hall")
          }`;
        }}
      >
        Click Me
      </button>
    </UserContext.Provider>
  );
}
export default Component1;
