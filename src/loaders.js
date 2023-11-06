// YOUR DEPLOYED API BASE URL
const URL = 'https://rhythmix-app-backend.onrender.com'

//indexLoader => 
export const indexLoader = async () => {
    const response = await fetch(URL + "/playlists/")
    const playlists = await response.json()
    return playlists
}

//showLoader => 
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/playlists/${params.id}/`)
    const playlist = await response.json()
    return playlist
}