import React, { useEffect, useState } from "react";
import noteAPI from "../api/NoteAPI";

import Note from "./Note";
import "./NoteList.css";

interface NoteStructure {
  title: string;
  description: string;
  id: string;
}

const notes: NoteStructure[] = [
  {
    title: "This is a title test",
    description:
      "This is the test description of the test title for this note.",
    id: "123kjy65oi9df97sdr10824hjsdjk",
  },
  {
    title: "This is a title test",
    description:
      "This is the test description of the test title for this note.",
    id: "123kjy65oi9df97sdr10824hjsdjk",
  },
];

function NoteList() {
  // const [noteList, setNoteList] = useState<NoteStructure[]>([]);
  // useEffect(() => {
  //   noteAPI.getTODOList().then(setNoteList);
  // }, []);

  return (
    <div className="noteList-container">
      {notes.map(({ title, description, id }: NoteStructure) => {
        return (
          <Note title={title} description={description} id={id} key={id} />
        );
      })}
    </div>
  );
}

export default NoteList;
