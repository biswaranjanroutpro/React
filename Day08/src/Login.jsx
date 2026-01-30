import { useRef, useState } from "react";

function Login() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passRef = useRef(null);

  console.log("render");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passRef} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
