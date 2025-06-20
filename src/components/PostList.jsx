import Post from "./Post";
import classes from "./PostList.module.css";

function PostList({ posts, onDeletePost }) {
  if (posts.length === 0) {
    return <p className={classes.empty}>No posts yet.</p>;
  }

  return (
    <ul className={classes.posts}>
      {posts.map((post) => (
        <Post
          key={post.id}
          author={post.author}
          body={post.body}
          onDelete={() => onDeletePost(post.id)}
        />
      ))}
    </ul>
  );
}

export default PostList;
