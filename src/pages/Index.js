import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const playlists = useLoaderData()
  return <>
  <div>
  <h2>Create Playlist</h2>
  <Form action="/create" method="post">
      <input type="text" name="name" placeholder="Write playlist name here"/>
      <input type="text" name="song1" placeholder="Song 1"/>
      <input type="text" name="song2" placeholder="Song 2"/>
      <input type="text" name="song3" placeholder="Song 3"/>
      <input type="text" name="song4" placeholder="Song 4"/>
      <button>Create New Playlist</button>
  </Form>
  </div>
  {playlists.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;