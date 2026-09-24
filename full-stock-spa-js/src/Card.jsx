import './card.css';

export default function Card({ name, position }) {
  return (
    <li className='card'>
      <h2>{name}</h2>
      <p>{position}</p>
    </li>
  );
}
