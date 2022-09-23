import { nanoid } from "nanoid";
import { useState } from "react";
import "./App.css";
import { NoteList } from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([
    {
      text: "2nd note",
      date: "01-01-2000",
      id: nanoid(),
    },
  ]);

  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
