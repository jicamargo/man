// import { songs } from '@/data/data'
import { Pause, Play } from './Player'
import { usePlayerStore } from '@/store/playerStore'
import { getPlayListInfoById } from '@/lib/ApiMiddleware'

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

    getPlayListInfoById(id)
      .then((data) => {
        const { songs, playlist } = data;
        const song = songs[0]
        setIsPlaying(true);
        setCurrentMusic({ songs, playlist, song });
      });       
  }

  const iconSize = size === 'small' ? 'w-4 h-4' : 'w-6 h-6'
  return (
    <button onClick={handleClick} className={`bg-green-500 rounded-full p-2  hover:border hover:border-green-400 hover:bg-green-400`} >
      { isPlayingPlaylist ? <Pause className={iconSize}/> : <Play className={iconSize}/> }
    </button>
  )
}