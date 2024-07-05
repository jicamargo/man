// hooks/useUpdatePlaylistBgColor.js
import { useEffect } from 'react';
import { usePlayerStore } from '@/store/playerStore';

const useUpdatePlaylistBgColor = () => {
  const { currentMusic } = usePlayerStore(state => state);

  useEffect(() => {
    if (currentMusic.playlist) {
      document.getElementById('playlist-container').style.backgroundColor = currentMusic.playlist.color.accent;
    }
  }, [currentMusic]);
};

export default useUpdatePlaylistBgColor;
