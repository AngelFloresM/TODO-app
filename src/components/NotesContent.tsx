import React from "react";
import NoteEditor from "./NoteEditor";
import NoteList from "./NoteList";

import "./NotesContent.css"

function NotesContent() {
  return (
    <div className="notes-content">
      <NoteList />
      <NoteEditor />
    </div>
  );
}

export default NotesContent;
