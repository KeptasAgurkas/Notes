import { Note } from "./Note";

export function NoteList(props: {
  notes: { text: string; id: string; date: string }[];
}) {
  return (
    <div className=" notes-list">
      {props.notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
}
