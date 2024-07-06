import  { create } from "zustand";
import { persist } from 'zustand/middleware';

export const usePlayerStore = create(persist(
  (set) => ({
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
  }),
  {
    name: 'man-player-storage',
    partialize: (state) => ({
      currentMusic: state.currentMusic,
      volume: state.volume
    }),
    onRehydrateStorage: () => (state) => {
      state?.resetIsPlaying();
    }
  }));
