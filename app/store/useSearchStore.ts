import { create } from "zustand";

interface SearchStore {
  keyword: string;
  setKeyword: (value: string) => void;
  resetKeyword: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  keyword: "",
  setKeyword: (value) => set({ keyword: value }),
  resetKeyword: () => set({ keyword: "" })
}));
