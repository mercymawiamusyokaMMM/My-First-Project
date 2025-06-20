import classes from "./Post.module.css";

function Post(props) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
      <button onClick={props.onDelete}>Delete</button>
    </li>
  );
}

export default Post;
