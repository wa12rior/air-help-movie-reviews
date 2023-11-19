import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface HistoryEntry {
  query: string;
}

interface QueryHistoryStore {
  history: HistoryEntry[];
  addHistory: (newEntry: HistoryEntry) => void;
  removeHistory: (query: string) => void;
}

export const useQueryHistoryStore = create<QueryHistoryStore>()(
  persist(
    (set, get) => ({
      history: [] as HistoryEntry[],
      addHistory: (newEntry: HistoryEntry) =>
        set((state) => ({ history: [newEntry, ...state.history] })),
      removeHistory: (query: string) =>
        set((state) => ({
          history: state.history.filter((h) => h.query !== query),
        })),
    }),
    {
      name: "query-history-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
