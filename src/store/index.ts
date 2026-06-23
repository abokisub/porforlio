import { create } from 'zustand';

interface UIState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  is3DLoaded: boolean;
  setIs3DLoaded: (loaded: boolean) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
  is3DLoaded: false,
  setIs3DLoaded: (loaded) => set({ is3DLoaded: loaded }),
  theme: 'light', // Default to light (green and white theme)
  setTheme: (theme) => set({ theme }),
}));
