import React from "react";
import NewNoteButton from "./NewNoteButton";
import NoteList from "./NoteList";

import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar-notes">
      <NewNoteButton />
      <NoteList />
    </div>
  );
}

export default Sidebar;
