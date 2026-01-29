import { useState } from "react";

function App() {
  const [count, setCount] = useState([10, 20, 30]);

  function handleChange() {
    setCount([...count, 40]);
  }

  return (
    <>
      <p>This is the counter for react App</p>
      <h1>Counter:{count}</h1>
      <button onClick={handleChange}>Increment</button>
      {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
    </>
  );
}

export default App;
