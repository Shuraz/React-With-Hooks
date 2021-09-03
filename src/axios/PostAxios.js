import React from 'react'

import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";
function PostAxios() {
  const [post, setPost] = React.useState(null);
  
const addPost=()=>{
    axios.get(baseURL)
    .then((response)=>{
        setPost(response.data);
    })
}
  React.useEffect(() => {
    addPost();
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.id}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default PostAxios
