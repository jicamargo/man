import { Pause, Play } from './Player'
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton ( { id, size = 'small' } ) {
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
        const song = songs[0]
        setIsPlaying(true)
        
        setCurrentMusic( { playlist, songs, song })
        
        // actualiza el color del elemento con id="playlist-container"
        document.getElementById('playlist-container').style.backgroundColor = playlist.color.accent
      })
  }

  const iconSize = size === 'small' ? 'w-4 h-4' : 'w-6 h-6'

  return (
    <button onClick={handleClick} className={`bg-green-500 rounded-full p-2  hover:border hover:border-green-400 hover:bg-green-400`} >
      { isPlayingPlaylist ? <Pause className={iconSize}/> : <Play className={iconSize}/> }
    </button>
  )
}