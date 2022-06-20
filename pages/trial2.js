import useCustomHook from "../components/custom-hook";

const Trial2 = () => {
  const [bigData] = useCustomHook("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {bigData &&
        bigData.map((item) => {
          return (
            <div key={item.id}>
              <h3>username: {item.username} :</h3>
              <p>name: {item.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Trial2;
