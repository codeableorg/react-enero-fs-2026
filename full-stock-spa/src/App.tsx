// import Card from './Card';
import type { ContactProps } from './Contact';
import { ContactList } from './ContactList';
// type Person = {
//   username: string;
//   name: string;
//   position: string;
// };

// const data: Person[] = [
//   { username: 'mica-123', name: 'Micaela', position: 'Frontend Developer' },
//   { username: 'si-simon', name: 'Simon', position: 'Backend Developer' },
//   { username: 'miguelito', name: 'Miguel', position: 'Fullstack Developer' },
//   { username: 'testino', name: 'Probino', position: 'Project Manager' }
// ];

function App() {
  const contacts: ContactProps[] = [
    { name: 'carlos', isOnline: true },
    { name: 'ruth', isOnline: false },
    { name: 'miguel', isOnline: false }
  ];
  const numOfContacts = contacts.length;
  return (
    <div>
      {/* // <ul className='card-list'>
      //   {data.map((person) => (
      //     <Card
      //       name={person.name}
      //       position={person.position}
      //       key={person.username}
      //     />
      //   ))}
      // </ul> */}
      {numOfContacts ? <ContactList contacts={contacts} /> : 'No hay contactos'}
    </div>
  );
}

export default App;
