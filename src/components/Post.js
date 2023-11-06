import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {

  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.name}</h1>
      </Link>
      <h2>{post.songs}</h2>
    </div>
  );
};

export default Post