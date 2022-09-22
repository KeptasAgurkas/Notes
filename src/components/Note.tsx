import { MdDeleteForever } from "react-icons/md";

export function Note() {
  return (
    <div className="note">
      <span>this is the first note</span>
      <div className="note-footer">
        <small>22-09-2022</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}
