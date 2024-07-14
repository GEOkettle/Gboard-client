import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
    isLoaded: false,
    setIsLoaded: (loaded) => set({ isLoaded: loaded }),
});

const useStore = create(devtools(store));

export default useStore;