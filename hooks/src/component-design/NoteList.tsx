import { Note } from './Note';
import type { NoteInterface } from './NotePage';

interface NoteListProps {
  notes: NoteInterface[];
  onDelete: (id: number) => void;
}

export function NoteList({ notes, onDelete }: NoteListProps) {
  if (notes.length === 0) return <p>No hay notas</p>;

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
