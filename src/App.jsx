import { useState } from "react";
import PostList from "./components/PostList";
import NewPost from "./components/NewPost";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, author: "Max", body: "React is great!" },
    { id: 2, author: "Anna", body: "I love learning frontend dev." },
  ]);

  function addPostHandler(newPost) {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  }

  function deletePostHandler(id) {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  }

  return (
    <main>
      <NewPost onAddPost={addPostHandler} />
      <PostList posts={posts} onDeletePost={deletePostHandler} />
    </main>
  );
}

export default App;
