import  { allPlaylists, songs as allsongs } from '@/data/data'

export async function GET({ request}) {
  // get the id from the URL search params
  const { url } = request
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  // find the playlist by id 
  const playlist = allPlaylists.find(playlist => playlist.id === id)
  const songs = allsongs.filter(song => song.albumId === playlist?.albumId)

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}