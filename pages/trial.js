import { useState, useEffect } from "react";
import useCustomHook from "../components/custom-hook";

const Trial1 = () => {
  const [data] = useCustomHook("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <div key={item.userid}>
              <h1>{item.id}</h1>
              <p1>{item.completed.toString()}</p1>
            </div>
          );
        })}
    </>
  );
};

export default Trial1;
