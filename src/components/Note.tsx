import { MdDeleteForever } from "react-icons/md";

export function Note(props: { id: string; text: string; date: string }) {
  return (
    <div className="note">
      <span>{props.text}</span>
      <div className="note-footer">
        <small>{props.date}</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}
