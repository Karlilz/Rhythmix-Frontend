import { redirect } from "react-router-dom";

// YOUR DEPLOYED API BASE URL
const URL = 'https://rythmix-app.onrender.com'


export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const newPlaylist = {
    name: formData.get("name"),
    song1: formData.get("song1"),
    song2: formData.get("song2"),
    song3: formData.get("song3"),
    song4: formData.get("song4"),
  };

  await fetch(URL + "/playlists/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlaylist),
  });

  return redirect("/");
};

//updateAction 
export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();

  const id = params.id;

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

  return redirect(`/post/${id}`);
};

//deleteAction 
export const deleteAction = async ({ params }) => {
  const id = params.id;

  await fetch(URL + `/playlists/${id}/`, {
    method: "delete",
  });

  return redirect("/");
};