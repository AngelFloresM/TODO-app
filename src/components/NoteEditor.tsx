import React, {
  ChangeEvent,
  useRef,
  useState,
  MouseEvent,
  FocusEvent,
} from "react";

import "./NoteEditor.css";

function NoteEditor() {
  const [editorContent, setEditorContent] = useState<string>("");
  const noteContainerRef = useRef(null);

  const handleEditorChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditorContent(e.target.value);
  };

  const createParagraphElement = (content: string) => {
    console.log(content.split("\n"));
  };

  const handleClickEditor = (
    e: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    if (e.currentTarget.innerText === "") console.log("Vacio");
    createParagraphElement(e.currentTarget.innerText);
  };

  return (
    <div
      id="editor-container"
      ref={noteContainerRef}
      onClick={handleClickEditor}
      onFocus={handleClickEditor}
    >
      <textarea
        name="note-editor"
        id="editor"
        rows={10}
        value={editorContent}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default NoteEditor;
