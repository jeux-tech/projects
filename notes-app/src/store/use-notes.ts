import create, { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export type Note = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  completed: boolean;
};

type NotesState = {
  notes: Note[];
  columns: number;
  query: string;
};

type NotesActions = {
  setColumns: (columns: number) => void;
  setQuery: (query: string) => void;
  addNote: (note: Note) => void;
  removeNote: (id: number) => void;
  toggleNote: (note: Note) => void;
};

type NotesStore = NotesActions & NotesState;

const store: StateCreator<NotesStore, [["zustand/persist", unknown]]> = (
  set,
  get
) => ({
  notes: [],
  columns: 3,
  query: "",
  setQuery: (query) => set({ query }),
  setColumns: (columns) => set({ columns }),
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  removeNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
  toggleNote: (note) =>
    set((state) => ({
      notes: state.notes.map((n) =>
        n.id === note.id ? { ...n, completed: !n.completed } : n
      ),
    })),
});

const useNotesStore = create(
  persist(store, {
    name: "note-storage",
  })
);

export default useNotesStore;
