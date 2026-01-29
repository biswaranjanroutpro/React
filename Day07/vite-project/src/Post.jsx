import React from "react";

const Post = React.memo(({ xyz }) => {
  console.log("Post rerender");
  return (
    <>
      <h1>
        {/* Your name is {value.name} age is {value.age} */}
        {xyz.sayHello}
      </h1>
    </>
  );
});

export default Post;
