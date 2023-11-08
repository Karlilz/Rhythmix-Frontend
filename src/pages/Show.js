import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Playlist</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="name"
            placeholder="Song Name"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="song1"
            placeholder="Song 1"
            defaultValue={post.song1}
          />
          <input
            type="text"
            name="song2"
            placeholder="Song 2"
            defaultValue={post.song2}
          />
          <input
            type="text"
            name="song3"
            placeholder="Song 3"
            defaultValue={post.song3}
          />
           <input
            type="text"
            name="song4"
            placeholder="Song 4"
            defaultValue={post.song4}
          />
          <button>Update Playlist</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Playlist</button>
        </Form>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Show;