import './card.css';

type CardProps = {
  name: string;
  position: string;
};

export default function Card({ name, position }: CardProps) {
  return (
    <li className='card'>
      <h2>{name}</h2>
      <p>{position}</p>
    </li>
  );
}
