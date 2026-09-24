// import Card from './Card';
import Contact from './Contact';

// const data = [
//   { username: 'mica-123', name: 'Micaela', position: 'Frontend Developer' },
//   { username: 'si-simon', name: 'Simon', position: 'Backend Developer' },
//   { username: 'miguelito', name: 'Miguel', position: 'Fullstack Developer' },
//   { username: 'testino', name: 'Probino', position: 'Project Manager' }
// ];

function App() {
  const contacts = ['Carlos', 'Ruth', 'Jorge'];
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
      <ul className='contact-list'>
        <Contact name='Carlos' isOnline />
        <Contact name='Ruth' />
        <Contact name='Jorge' />
      </ul>
    </div>
  );
}

export default App;
