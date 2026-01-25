import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  // let count = 0;

  // worst way of doing this kind of stuff
  // function increament() {
  //   count++;
  //   let para = document.querySelector("p");
  //   para.textContent = `Counter ${count}`;
  //   let button = document.querySelector("button");
  //   button.textContent = `Counter ${count}`;
  //   console.log(count);
  // }

  function increaseNumber() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={increaseNumber}>Increament: {count}</button>
    </>
  );
}

export default App;
