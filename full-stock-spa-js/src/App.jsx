// import Card from './Card';
// import Contact from './Contact';
import { ContactList } from './ContactList';

// const data = [
//   { username: 'mica-123', name: 'Micaela', position: 'Frontend Developer' },
//   { username: 'si-simon', name: 'Simon', position: 'Backend Developer' },
//   { username: 'miguelito', name: 'Miguel', position: 'Fullstack Developer' },
//   { username: 'testino', name: 'Probino', position: 'Project Manager' }
// ];

function App() {
  const contacts = [];
  const numOfContacts = contacts.length;
  return (
    <div>
      {/* <ul className='card-list'>
        {data.map((person) => (
          <Card
            name={person.name}
            position={person.position}
            key={person.username}
          />
        ))}
      </ul> */}
      {numOfContacts ? <ContactList contacts={contacts} /> : 'No hay contactos'}
    </div>
  );
}

export default App;
