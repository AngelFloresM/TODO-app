import React, { useRef, useState, ChangeEvent } from "react";

import "./NoteEditor.css";

function NoteEditor() {
  const [editorContent, setEditorContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const noteContainerRef = useRef(null);

  const handleEditorChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditorContent(e.target.value);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div id="editor-container" ref={noteContainerRef}>
      <input
        type="text"
        id="note-title"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        name="note-editor"
        id="editor"
        value={editorContent}
        onChange={handleEditorChange}
        placeholder="Write your note here..."
      />
    </div>
  );
}

export default NoteEditor;