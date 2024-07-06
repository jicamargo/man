export async function getPlayListInfoById(playListId) {
  return fetch(`/api/get-info-playlist.json?id=${playListId}`)
    .then(res => res.json())
}
