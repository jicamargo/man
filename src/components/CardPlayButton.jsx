import { Pause, Play } from './Player'
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton ( { id, color, size = 'small' } ) {
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
        // actualiza el backcolor del contenerdor padre
        document.body.style.backgroundColor = color.dark
        console.log(color)
        
      })
  }

  const iconSize = size === 'small' ? 'w-4 h-4' : 'w-6 h-6'

  return (
    <button onClick={handleClick} className={`bg-green-500 rounded-full p-2  hover:border hover:border-green-400 hover:bg-green-400`} >
      { isPlayingPlaylist ? <Pause className={iconSize}/> : <Play className={iconSize}/> }
    </button>
  )
}