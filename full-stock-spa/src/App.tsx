import Card from './Card';

type Person = {
  username: string;
  name: string;
  position: string;
};

const data: Person[] = [
  { username: 'mica-123', name: 'Micaela', position: 'Frontend Developer' },
  { username: 'si-simon', name: 'Simon', position: 'Backend Developer' },
  { username: 'miguelito', name: 'Miguel', position: 'Fullstack Developer' },
  { username: 'testino', name: 'Probino', position: 'Project Manager' }
];

function App() {
  return (
    <ul className='card-list'>
      {data.map((person) => (
        <Card name={person.name} position={person.position} />
      ))}
    </ul>
  );
}

export default App;
