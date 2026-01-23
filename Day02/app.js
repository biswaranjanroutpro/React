// const element = React.createElement('h1',{id:'title'},"Hello Aayush");

// const element2 = React.createElement('div',null,
//     React.createElement('h1',null,"Hello"),
//     React.createElement('h2',null,"hi"));

// JSX: javascript XML: Look like HTML (Babel)
// JSX --> React.createELement() --> React Element(JS Object) --> Real DOM(HTML ELEMENT)
//     babel                    React                        RectDOM

// <h1 id="title">Hello Aayush</h1> --> React.createElement('h1',{id:'title'},"Hello Aayush") --> {type:"h1", props:{id:"title", children:"Hello Aayush"}} --> <h1 id="title">Hello Aayush</h1>
// const element = React.createElement('h1',{id:'title'},"Hello Aayush");

// const element = <h1 id="title" className="first">Hello Aayush</h1>;
// console.log(element);

// const element2 = (<div>
//     <h1>Hell</h1>
//     <h2>hi</h2>
// </div>);

// React.createElement('div',null,
//     React.createElement("h1",null,"Hello Aayush"),
//     React.createElement("h2",null,"Kaise ho")
// )

// React Element
// const element3 = (<div>
//     <h1>Hello Aayush</h1>
//     <h2>Kaise ho</h2>
//     </div>
// )

// React Component

// function App(name){

//     return (
//         <h1>Hello Aayush {10+20}</h1>
//     );
// }

// const a = App("Aayush");
// text/element: Javascript ka expression aap iske andar likh sakte hain
// Number, string, true false, null, undefined, array, object

// Number, string, array
// true false null undefined (render honge lekin kuch display nahi hoga)
// Object: Error

// const age= 10;
// const isLoggedIn = true;
// const element = <h1>Hello Coder {isLoggedIn?<h2>Logged In</h2>:<h2>Kindly SignIn</h2>}</h1>

// React.createElement("ul",null,[React.createElement("ul",null,<li>HTML</li>)
// ,React.createElement("ul",null,<li>CSS</li>)])

// const courses = ["HTML","CSS","Javascript","React"];
// // [<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>React</li>]
// const element = (
// <ul>
//     {courses.map(course=><li>{course}</li>)}
// </ul>
// )

// const ab = {backgroundColor:"orange", color:"white"}
// const element = <h1 id="title" className="first" style={{backgroundColor:"orange", color:"white"}}>Hello Aayush</h1>

// function App(props){

//     return (
//         <h1>Hello Aayush {props.name} {props.age}</h1>
//     )
// }

// {
//     name:"Aayush",
//     age:25
// }

// React.createElement("h1")
// const element = <App  name="Aayush" age={25}></App>

function Header({ name }) {
  return <h1>{name} Welcome to Indian Election Commission Website</h1>;
}

// const props = {
//     name:"Aayush"
// }

// const {name} = props;

function Main({ user }) {
  return (
    <>
      <h2>Hi {user.name}</h2>
      <h3>
        {user.age > 18
          ? "Ypur are eligible for vote"
          : "Your are not eligible for vote"}
      </h3>
      <p>Your city is {user.city}</p>
    </>
  );
}

function Footer() {
  return <h3>Thansk for visiting our website</h3>;
}

// function Card(){

// }

function App() {
  return (
    <>
      <Header name="Aayush"></Header>
      <Main user={{ name: "Aayush", age: 25, city: "Kotdwar" }}></Main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// App()
// <App/>
