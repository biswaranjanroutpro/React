let counter = 0;

function render() {
  document.getElementById("root").innerHTML = `
        <p>This is the counter for react app</p>
        <h1>Counter: ${counter}</h1>
        <button onclick="increament()">Increament+</button>
        <button onclick="decreament()">Decreament-</button>
    `;
}

function increament() {
  counter++;
  render();
}

function decreament() {
  counter--;
  render();
}

render();
