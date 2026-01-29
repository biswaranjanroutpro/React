// const props = {
//  foods: ["Apple","Orange","Banana"],
//  a: 10,
//  }
//  ["Mango", "Apple","Orange","Banana"],
function Food({ foods }) {
  return (
    <>
      <ul>
        {foods.map((food) => (
          <li key={food}>{food}</li>
        ))}
      </ul>
    </>
  );
}

export default Food;
