import { redirect } from "react-router-dom";

// YOUR DEPLOYED API BASE URL
const URL = 'RENDER URL'

//createAction => 
export const createAction = async ({ request }) => {
  const formData = await request.formData();

  // construct request body
  const newPlaylist = {
    name: formData.get("name"),
    song1: formData.get("song1"),
    song2: formData.get("song2"),
    song3: formData.get("song3"),
    song4: formData.get("song4"),
  };

  // send request to backend
  await fetch(URL + "/playlists/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlaylist),
  });

  return redirect("/");
};

//updateAction => 
export const updateAction = async ({ request, params }) => {
  // get form data
  const formData = await request.formData();

  const id = params.id;

  // construct request body
  const updatedPlaylist = {
    name: formData.get("name"),
    song1: formData.get("song1"),
    song2: formData.get("song2"),
    song3: formData.get("song3"),
    song4: formData.get("song4"),
  };

  await fetch(URL + `/playlists/${id}/`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPlaylist),
  });

  // redirect back to show page page
  return redirect(`/post/${id}`);
};

//deleteAction => 
export const deleteAction = async ({ params }) => {
  const id = params.id;

  // send request to backend
  await fetch(URL + `/playlists/${id}/`, {
    method: "delete",
  });

  return redirect("/");
};