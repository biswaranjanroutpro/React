import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [show, setShow] = useState(true);

  //   in this function problem is that when the function render it pass multiple setIntervals to webapi
  // and that can cause of hang of the browser so we use useEffect
  // use effect do run 1 time and the setInterval will pass to web api after every second it will execute the functin
  //   webapi not react or js
  //   setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //     console.log("Hi");//infitiy and hang the browser also
  //   }, 1000);

  useEffect(() => {
    if (!show) {
      return;
    }

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("Hi");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [show]);

  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show && <h1>Current Time : {time}</h1>}
    </>
  );
}

export default Clock;
