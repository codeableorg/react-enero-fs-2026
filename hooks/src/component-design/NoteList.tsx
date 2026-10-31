import { Note } from './Note';
import type { NoteInterface } from './types';
import styles from './NoteList.module.css';

interface NoteListProps {
  notes: NoteInterface[];
  onDelete: (id: string) => void;
}

export function NoteList({ notes, onDelete }: NoteListProps) {
  if (notes.length === 0) return <p className={styles.empty}>No hay notas</p>;

  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
