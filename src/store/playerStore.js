import  { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  volume: 0.5,
  previousVolume: 0.5,
  color: { accent: "#21c872", dark: "#14532d" },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setVolume: (volume) => set({ volume }),
  setPreviousVolume: (previousVolume) => set({ previousVolume }),
  setColor: (color) => set({ color }),
}));