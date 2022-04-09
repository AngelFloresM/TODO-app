import { createContext } from "react";

const getNotes = () => {};

const noteSelected = [];

export const NotesContext = createContext({
  getNotes,
  noteSelected,
});
