import { SongsTablePlay } from "@/components/SongsTablePlay"
import { usePlayerStore } from "@/store/playerStore";
import EqualizerIcon from '@/components/EqualizerIcon'
import Time from '@/icons/Time'

export const SongsTable = ({songs}) => {
  
  const { 
    isPlaying,
    currentMusic 
  } = usePlayerStore(state => state)

  const isCurrentSong = (currentSong) => {
    const { song, playlist } = currentMusic;
    return playlist?.albumId === currentSong?.albumId && currentSong?.id === song?.id;
  };

  return (
    <table className="table-auto text-left min-w-full divide-y divide-gray-500/20">
      <thead className="">
      <tr className="text-zinc-400 text-sm">
        <th className="px-4 py-2 font-light">#</th>
        <th className="px-4 py-2 font-light">Título</th>
        <th className="px-4 py-2 font-light">Álbum</th>
        <th className="px-4 py-2 font-light"><Time /></th>
      </tr>
      </thead>

      <tbody>
      <tr className="h-[16px]"></tr>
      {
        songs.map((song, index) => {
            const isCurrentSongBoolean = isCurrentSong(song)
            return (
              <tr
                key={`{song.albumId}-${song.id}`} 
                className="text-gray-300 border-spacing-0 text-sm font-light
                 hover:bg-white/5 overflow-hidden transition duration-300 group"
              >
                <td className="relative px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">
                  <span className="absolute top-5 opacity-100 transition-all group-hover:opacity-0">
                    {isCurrentSongBoolean && isPlaying ? <EqualizerIcon /> : index + 1 }
                  </span>
                  <div className="absolute top-5 opacity-0 transition-all group-hover:opacity-100">
                    <SongsTablePlay song={song} isCurrentSong={isCurrentSongBoolean}/>
                  </div>
                </td>
                <td className="px-4 py-2 flex gap-3">
                  <picture className="">
                    <img src={song.image} alt={song.title} className="w-11 h-11"/>
                  </picture>
                  <div className="flex flex-col">
                    <h3 className={
                        `text-base font-normal
                        ${isCurrentSongBoolean ? "text-green-400" : "text-White"}
                        `
                      }>{song.title}</h3>
                    <span>{song.artists.join(", ")}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{song.album}</td>
                <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">{song.duration}</td>
              </tr>
            )
          }
        )
      }
      </tbody>
    </table>
  );
}