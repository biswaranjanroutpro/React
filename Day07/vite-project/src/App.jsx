import { use, useCallback, useMemo, useState } from "react";
import Sum from "./Sum";
import "./App.css";
import Post from "./Post";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10000);

  // function calcPrime() {
  //   let total = 0;

  //   if (number > 1) total++;
  //   for (let i = 3; i <= number; i++) {
  //     total++;
  //     for (let j = 2; j < i; j++) {
  //       if (i % j == 0) {
  //         total--;
  //         break;
  //       }
  //     }
  //   }

  //   return total;
  // }

  // function handleClick() {
  //   console.log("Hello World!");
  // }

  const handleClick = useCallback(() => {
    console.log("Hello World!", count);
  }, [count]);

  const prime = useMemo(() => {
    let total = 0;

    if (number > 1) total++;
    for (let i = 3; i <= number; i++) {
      total++;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          total--;
          break;
        }
      }
    }

    return total;
  }, [number]);

  const obj = useMemo(() => {
    return { name: "Aayush", age: 26 };
  }, []);

  // function sayHello() {
  //   console.log("Hello Aayush");
  // }

  const sayHello = useCallback(() => {
    console.log("Hello Aayush");
  }, []);

  console.log("app render");

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <h2>Your current number: {number}</h2>
      <button onClick={() => setNumber(number + 1000)}>
        Increament Number
      </button>
      <h3>Total Prime Number: {prime}</h3>
      <button onClick={handleClick}>Click</button>
      <Sum number={number} />
      {/* <Post value={obj} /> */}
      <Post xyz={sayHello} />
    </>
  );
}

export default App;
