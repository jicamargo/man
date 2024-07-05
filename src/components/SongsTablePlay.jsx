import {Play, Pause} from "@/components/Player";
import {usePlayerStore} from "@/store/playerStore";
import {getPlayListInfoById} from "@/lib/ApiServices";

const isNewSongOfAnotherPlaylist = (currentMusic, song) => {
  return currentMusic.playlist?.id != song.albumId
}

const setNewCurrentMusic = (song, setIsPlaying, setCurrentMusic) => {
  getPlayListInfoById(song.albumId).then((data) => {
    const { songs, playlist } = data;
    setIsPlaying(true);
    setCurrentMusic({ songs: songs, playlist: playlist, song: song });
  });
};

export const SongsTablePlay = ({song, isCurrentSong}) => {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)

  const isCurrentSongRunning = (song) => {
    return (currentMusic.song?.id == song.id)
      && (currentMusic.playlist?.albumId == song.albumId)
      && isPlaying
  }


  const handleClick = (song) => {
    if (isCurrentSongRunning(song)) {
      setIsPlaying(false)
      return
    }

    if (isNewSongOfAnotherPlaylist(currentMusic, song)) {
      setNewCurrentMusic(song, setIsPlaying, setCurrentMusic)
      return
    }

    // the playlist is the same, set the current song
    setIsPlaying(true)
    setCurrentMusic({songs: currentMusic.songs, playlist: currentMusic.playlist, song: song})
    // actualiza el color del elemento con id="playlist-container"
    document.getElementById('playlist-container').style.backgroundColor = currentMusic.playlist.color.accent

  }

  const className = "hover:scale-125 transuition duration-300 ease-in-out bg-white/30 rounded-full p-1 h-5 w-5"
  return (
    <button onClick={() => handleClick(song)}>
      {isCurrentSongRunning(song) ? <Pause className={className}/> : <Play className={className}/>}
    </button>
  )
}
