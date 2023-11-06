import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = 'https://rhythmix-app-backend.onrender.com'

//createAction => 
export const createAction = async ({request}) => {
    const formData = await request.formData()

    // construct request body
    const newPlaylist = {
        name: formData.get("name"),
        songs: formData.get("songs")
    }

    // send request to backend
    await fetch(URL + "/playlists/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlaylist)
    })

    return redirect("/")
}

//updateAction => 
export const updateAction = async ({request, params}) => {
    const formData = await request.formData()

    const id = params.id

    // construct request body
    const updatedPlaylist = {
        name: formData.get("name"),
        song: formData.get("song")
    }

    // send request to backend
    await fetch(URL + `/playlists/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPlaylist)
    })

    // redirect back to show page page
    return redirect(`/post/${id}`)
}

//deleteAction => 
export const deleteAction = async ({params}) => {
    const id = params.id

    // send request to backend
    await fetch(URL + `/playlists/${id}/`, {
        method: "delete",
    })

    return redirect("/")
}