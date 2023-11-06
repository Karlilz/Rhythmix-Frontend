import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();

  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.songs}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Create a Playlist</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="name"
            placeholder="Playlist name here"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="songs"
            placeholder="Playlist songs here"
            defaultValue={post.songs}
          />
          <button>Update Playlist</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Playlist</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;