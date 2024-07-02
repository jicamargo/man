import { Pause,Play } from './Player'
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton ( { id, color } ) {
  const { 
    isPlaying, 
    setIsPlaying, 
    currentMusic, 
    setCurrentMusic 
  } = usePlayerStore(state => state)

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data
        setIsPlaying(true)
        setCurrentMusic( { playlist, songs, song: songs[0] })
      })
  }


  return (
    // <button className={`bg-${color}-500 rounded-full p-2`}>
    <button className={`bg-green-500 rounded-full p-2`} onClick={handleClick}>
      { isPlayingPlaylist ? <Pause /> : <Play /> }
    </button>
  )
}