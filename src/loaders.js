// YOUR DEPLOYED API BASE URL
const URL = 'RENDER URL'

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