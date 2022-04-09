import React from "react";
import NoteEditor from "./NoteEditor";

import "./NotesContent.css"
import Sidebar from "./Sidebar";

function NotesContent() {
  return (
    <div className="notes-content">
      <Sidebar/>      
      <NoteEditor />
    </div>
  );
}

export default NotesContent;