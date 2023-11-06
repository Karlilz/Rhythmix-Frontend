// YOUR DEPLOYED API BASE URL
const URL = "https://xxxxxxx.onrender.com"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/playlists/")
    const playlists = await response.json()
    return playlists
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/playlists/${params.id}/`)
    const playlist = await response.json()
    return playlist
}