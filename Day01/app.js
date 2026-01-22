// 1st
// create a h1 element using js

// const element1 = document.createElement("h1");
// element1.textContent = "Hello,  Biswa Ranjan Rout!";
// element1.className = "element";
// element1.id = "first";
// element1.style.fontStyle = "30px";
// element1.style.backgroundColor = "orange";
// element1.style.color = "white";

// const element2 = document.createElement("h2");
// element2.textContent = "Welcome to React.js!";
// element2.className = "element";
// element2.id = "second";
// element2.style.fontStyle = "20px";
// element2.style.backgroundColor = "pink";
// element2.style.color = "green";

// const root = document.getElementById("root");
// root.append(element1);
// root.append(element2);

// 2nd

// attributes = {
//   className: "element",
//   id: "first",
// };

// element = {
//     tag: "h1",
//     textContent: "Hello Biswa Ranjan Rout!",
//     className: "element",
//     id: "first",
//     style: {
//       fontSize: "30px",
//       backgroundColor: "orange",
//       color: "white"
//      }
// }

// function createElement(tag, attributes, children) {
//   const element = document.createElement(tag);
//   element.textContent = children;

//   for (const key in attributes) {
//     if (key === "style") {
//       Object.assign(element.style, attributes.style);
//     } else {
//       element[key] = attributes[key];
//     }
//   }

//   return element;
// }

// const element1 = createElement(
//   "h1",
//   {
//     className: "element",
//     id: "first",
//     style: { fontSize: "30px", backgroundColor: "orange", color: "white" },
//   },
//   "Hello Biswa Ranjan Rout",
// );

// const element2 = createElement(
//   "h2",
//   {
//     className: "element",
//     id: "second",
//     style: { fontSize: "20px", backgroundColor: "pink", color: "green" },
//   },
//   "Welcome to React.Js",
// );

// const root = document.getElementById("root");
// root.append(element1);
// root.append(element2);

// 3rd - Custom Ract (build by me)
// const React = {
//   createElement: function (tag, attributes, children) {
//     const element = document.createElement(tag);
//     element.textContent = children;

//     for (const key in attributes) {
//       if (key === "style") {
//         Object.assign(element.style, attributes.style);
//       } else {
//         element[key] = attributes[key];
//       }
//     }

//     return element;
//   },
// };

// const ReactDOM = {
//   render: function (child, parent) {
//     parent.append(child);
//   },
// };

// const element1 = React.createElement(
//   "h1",
//   {
//     className: "element",
//     id: "first",
//     style: { fontSize: "30px", backgroundColor: "orange", color: "white" },
//   },
//   "Hello Biswa Ranjan Rout",
// );

// const element2 = React.createElement(
//   "h2",
//   {
//     className: "element",
//     id: "second",
//     style: { fontSize: "20px", backgroundColor: "pink", color: "green" },
//   },
//   "Welcome to React.Js",
// );

// const root = document.getElementById("root");
// ReactDOM.render(element1, root);
// ReactDOM.render(element2, root);

// 4- Original React
// these 2 links means go to this url and bring that code to my file
// <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// put these 2 in html page

// const element1 = React.createElement(
//   "h1",
//   {
//     className: "element",
//     id: "first",
//     style: { fontSize: "30px", backgroundColor: "orange", color: "white" },
//   },
//   "Hello Biswa Ranjan Rout",
// );

// const element2 = React.createElement(
//   "h2",
//   {
//     className: "element",
//     id: "second",
//     style: { fontSize: "20px", backgroundColor: "pink", color: "green" },
//   },
//   "Welcome to React.Js",
// );

// const root = document.getElementById("root");
// ReactDOM.render(element1, root);
// ReactDOM.render(element2, root);

// 5- Creating Original React

// const React = {
//   createElement: function (type, props, children) {
//     return {
//       type: type,
//       props: {
//         ...props,
//         children: children,
//       },
//     };
//   },
// };

// returned element from react looks like this
// how its looks like
// const reactElement = {
//   h1: "h1",
//   props: {
//     className: "element",
//     id: "first",
//     style: { fontSize: "30px", backgroundColor: "orange", colro: "white" },
//     children: "Hello Biswa Ranjan Rout",
//   },
// };

// const ReactDOM = {
//   render: function (reactElement, root) {
//     root.innerHTML = "";
//     const element = document.createElement(reactElement.type);

//     const { props } = reactElement;

//     for (const key in props) {
//       if (key === "style") {
//         Object.assign(element.style, props.style);
//       } else if (key === "children") {
//         element.textContent = props[key];
//       } else {
//         element[key] = props[key];
//       }
//     }
//     root.append(element);
//   },
// };

const element1 = React.createElement(
  "h1",
  {
    className: "element",
    id: "first",
    style: { fontSize: "30px", backgroundColor: "orange", color: "white" },
  },
  "Hello Biswa Ranjan Rout",
);

const element2 = React.createElement(
  "h2",
  {
    className: "element",
    id: "second",
    style: { fontSize: "20px", backgroundColor: "pink", color: "green" },
  },
  "Welcome to React.Js",
);

// old way of rendering
// ReactDOM.render(element1, document.getElementById("root"));
// ReactDOM.render(element2, document.getElementById("root"));

/* when wants to return 2 elements indivisually it's not possible in react
    2. React do like this root.innerContent = ""; 
    3. When you render 2nd one it will replace previous one
    4. !Q: How you can render both of them 
*/

// wrap up in div both element will called children of div
const div = React.createElement("div", null, element1, element2);

// new way of rendering (1st setup then render)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
