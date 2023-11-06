import { Link, useLoaderData, Form } from "react-router-dom";

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
      <div style={{ textAlign: "center" }}>
        <h2>Playlist</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="Playlist Name"
            placeholder="write subject here"
            defaultValue={post.subject}
          />
          <input
            type="text"
            name="Song1"
            placeholder="Song 1"
            defaultValue={post.details}
          />
          <input
            type="text"
            name="Song2"
            placeholder="Song 2"
            defaultValue={post.sides}
          />
          <input
            type="text"
            name="Song3"
            placeholder="Song 3"
            defaultValue={post.substitutions}
          />
          <input
            type="text"
            name="Song4"
            placeholder="Song 4"
            defaultValue={post.sides}
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