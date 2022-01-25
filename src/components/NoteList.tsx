import React, { useEffect, useState } from "react";
import noteAPI from "../api/NoteAPI";

import Note from "./Note";
import "./NoteList.css";

interface NoteStructure {
  title: string;
  description: string;
  id: string;
}

function NoteList() {
  const [noteList, setNoteList] = useState<NoteStructure[]>([]);
  useEffect(() => {
    noteAPI.getTODOList().then(setNoteList);
  }, []);

  return (
    <div className="noteList-container">
      {noteList.map(({ title, description, id }: NoteStructure) => {
        return (
          <Note title={title} description={description} id={id} key={id} />
        );
      })}
    </div>
  );
}

export default NoteList;
