let count = 0;

const para = document.createElement("p");
para.textContent = `Counter ${count}`;

const button = document.createElement("button");
button.textContent = "Increament";

const parent = document.getElementById("root");
parent.append(para, button);

button.addEventListener("click", (e) => {
  count++;
  para.textContent = `Counter ${count}`;
  console.log(count);
});
