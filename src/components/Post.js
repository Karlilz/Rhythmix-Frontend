import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.name}</h1>
      </Link>
      <h2>{post.Song1}</h2>
      <h2>{post.Song2}</h2> 
      <h2>{post.Song3}</h2>
      <h2>{post.Song4}</h2>
    </div>
  );
};

export default Post;