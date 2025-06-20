import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onAddPost }) {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (!author.trim() || !body.trim()) return;

    const newPost = {
      id: Date.now(),
      author,
      body,
    };

    onAddPost(newPost);

    // Clear inputs
    setAuthor("");
    setBody("");
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        rows="3"
        placeholder="What's on your mind?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
}

export default NewPost;
