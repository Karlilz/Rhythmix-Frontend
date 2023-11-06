import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = 'https://rhythmix-app-backend.onrender.com'

//createAction => create a todo from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newPlaylist = {
        name: formData.get("name"),
        songs: formData.get("songs")
    }

    // send request to backend
    await fetch(URL + "/playlists/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlaylist)
    })

    // redirect back to index page
    return redirect("/")
}

//updateAction => update a todo from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get todo id
    const id = params.id

    // construct request body
    const updatedPlaylist = {
        name: formData.get("name"),
        song: formData.get("song")
    }

    // send request to backend
    await fetch(URL + `/playlists/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPlaylist)
    })

    // redirect back to show page page
    return redirect(`/post/${id}`)
}

//deleteAction => delete a todo from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get todo id
    const id = params.id

    // send request to backend
    await fetch(URL + `/playlists/${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}