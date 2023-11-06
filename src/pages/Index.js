import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const playlists = useLoaderData()
  return <>
  <div style={{textAlign: "center"}}>
  <h2>Create a playlist</h2>
  <Form action="/create" method="post">
      <input type="text" name="name" placeholder="write playlist name here"/>
      <input type="text" name="songs" placeholder="write songs here"/>
      <button>Create New Playlist</button>
  </Form>
  </div>
  {playlists.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;