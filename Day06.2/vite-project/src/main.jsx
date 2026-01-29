import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Counter from "./Counter.jsx";
import List from "./List.jsx";
import Clock from "./Clock.jsx";

// console.log(<h1>Hello Coder</h1>);

// const element = document.createElement('h1');
// element.textContent = "Hello Coder";

// console.dir(element);

// function Header(){

//     Counter();
// }

// function Apps(){

//     Header();
//     Main();
//     Footer();
// }

{
  /* <App>
    <Header>
        <Counter></Counter>
    </Header>
    <Main>
        <h1>Hello kaise Ho</h1>
        <Clock></Clock>
    </Main>
    <Footer></Footer>
</App> */
}

createRoot(document.getElementById("root")).render(<Clock></Clock>);
