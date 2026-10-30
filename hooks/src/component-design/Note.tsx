import { Button } from './Button';
import { Card } from './Card';
import type { NoteInterface } from './NotePage';

interface NoteProps {
  note: NoteInterface;
  onDelete: (id: string) => void;
}

export function Note({ note, onDelete }: NoteProps) {
  return (
    <Card>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <Button variant='secondary' onClick={() => onDelete(note.id)}>
        Borrar
      </Button>
    </Card>
  );
}
