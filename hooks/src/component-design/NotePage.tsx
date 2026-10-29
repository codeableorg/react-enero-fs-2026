import { useState, type SubmitEvent } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { NoteList } from './NoteList';

const INITIAL_NOTES: NoteInterface[] = [
  { id: 1, title: 'First Content', content: 'Hello World' }
];

export interface NoteInterface {
  id: number;
  title: string;
  content: string;
}

export function NotesPage() {
  const [notes, setNotes] = useState(INITIAL_NOTES);
  const [title, setTitle] = useState('');

  function handleAdd(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const lastIndex = notes.length === 0 ? 0 : notes.length;
    const newNote = { id: lastIndex + 1, title, content: '' };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function handleDelete(id: number) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <main>
      <form onSubmit={handleAdd}>
        <Input
          id='title'
          value={title}
          label='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type='submit'>Añadir nota</Button>
      </form>
      <NoteList notes={notes} onDelete={handleDelete} />
    </main>
  );
}
