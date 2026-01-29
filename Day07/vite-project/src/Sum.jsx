import React from "react";

const Sum = React.memo(({ number }) => {
  function calcSum() {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }

  const total = calcSum();

  console.log("sum rendered");

  return (
    <>
      <h1>This is our math library</h1>
      <h2>Sum: {total}</h2>
    </>
  );
});

export default Sum;
