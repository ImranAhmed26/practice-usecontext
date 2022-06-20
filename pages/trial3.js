import { useState, createContext } from "react";
import Component5 from "../components/trial-3";

export const UserContext = createContext();

const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "8px 8px",
  margin: "10px 20px",
  fontFamily: "Arial",
  " border-radius": " 15px",
  "font-size": "18px",
};

const container = {
  margin: "10px",
};

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <div style={container}>
        <Component5 />
        <button
          style={myStyle}
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
      </div>
    </UserContext.Provider>
  );
}
export default Component1;
