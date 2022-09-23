import { useState } from "react";

export function AddNote() {
  const [noteText, setNoteText] = useState("");

  return (
    <div className="note new">
      <textarea
        cols={10}
        rows={8}
        placeholder="Type to add a note..."
        value={noteText}
        onChange={(event) => {
          setNoteText(event.target.value);
        }}
      ></textarea>
      <div className="note-footer">
        <small>{200 - noteText.length} remaining</small>
        <button className="save">Save</button>
      </div>
    </div>
  );
}
