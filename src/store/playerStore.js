import  { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  currentMusic: { playlist: null, song: null, songs: [] },
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  volume: 0.5,
  setVolume: (volume) => set({ volume }),
  previousVolume: 0.5,
  setPreviousVolume: (previousVolume) => set({ previousVolume })
}));