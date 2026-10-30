import { useState, type SubmitEvent } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { NoteList } from './NoteList';
import { TextArea } from './TextArea';

const INITIAL_NOTES: NoteInterface[] = [
  { id: crypto.randomUUID(), title: 'First Content', content: 'Hello World' }
];

export interface NoteInterface {
  id: string;
  title: string;
  content: string;
}

export function NotesPage() {
  const [notes, setNotes] = useState(INITIAL_NOTES);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleAdd(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTitle = title.trim();
    const newContent = content.trim();

    if (!newTitle) return;

    const newNote = {
      id: crypto.randomUUID(),
      title: newTitle,
      content: newContent
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function handleDelete(id: string) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <main>
      <form onSubmit={handleAdd}>
        <div>
          <Input
            id='title'
            value={title}
            label='Título'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <TextArea
            id='content'
            value={content}
            label='Contenido'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <Button type='submit'>Añadir nota</Button>
      </form>
      <NoteList notes={notes} onDelete={handleDelete} />
    </main>
  );
}
