import { useState } from "react";
function Home() {
//   let name = ["Bob", "Jill", "Johnny", "Ana", "Genci"];
const [name, setName] = useState(["Bob", "Jill", "Johnny", "Ana", "Genci"])
  //forEach
  //map
  //   name.map((item) => {
  //     console.log(item);
  //   });
  const loading = false;
  const counter = -3;
  return (
    <div>
      <h1 style={{ color: loading === true ? "red" : "blue" }}>Home Page</h1>
      {name.map((item) => (
        <h3>Welcome {item}</h3>
      ))}
      {counter === 0 ? (
        <p>Loading...</p>
      ) : counter > 0 ? (
        <p>Already Loaded</p>
      ) : (
        <p>I dont know</p>
      )}
      <button
        onClick={() => {
          console.log("click");
          setName([...name, 'Jake', 'Tim'])
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Home;
