import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  // const [name, setName] = useState("");
  const [count, setCount] = useState(30);

  // This will run infinitely when rerender
  // async function GithubProfile() {
  //   const response = await fetch("https://api.github.com/users");
  //   const data = await response.json();
  //   setUsers(data);
  //   console.log("AAyush");
  // }
  // GithubProfile();

  // that's why use effect came into the picture
  useEffect(() => {
    async function GithubProfile() {
      const response = await fetch(
        `https://api.github.com/users?per_page=${count}`,
      );
      const data = await response.json();
      setUsers(data);
      console.log("AAyush");
    }
    GithubProfile();
  }, [count]);

  // function handleChange(e) {
  //   setName(e.target.value.toUpperCase());
  // }

  return (
    <>
      <h1>Github User</h1>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <img
            src={user.avatar_url}
            height={"100px"}
            width={"100px"}
            gap={"10px"}
            key={user.login}
          />
        ))}
      </div>
    </>
  );
}

export default App;
