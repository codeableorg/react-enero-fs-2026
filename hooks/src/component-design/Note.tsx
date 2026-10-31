import { Button } from './Button';
import { Card } from './Card';
import type { NoteInterface } from './types';
import styles from './Note.module.css';

interface NoteProps {
  note: NoteInterface;
  onDelete: (id: string) => void;
}

export function Note({ note, onDelete }: NoteProps) {
  return (
    <Card>
      <h3>{note.title}</h3>
      <p className={styles.content}>{note.content}</p>
      <div className={styles.actions}>
        <Button variant='danger' onClick={() => onDelete(note.id)}>
          Borrar
        </Button>
      </div>
    </Card>
  );
}
