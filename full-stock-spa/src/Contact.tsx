import './contact.css';

export interface ContactProps {
  name: string;
  isOnline: boolean;
}

export default function Contact({ name, isOnline }: ContactProps) {
  return (
    <li className='contact'>
      <div className={isOnline ? 'green-dot' : 'gray-dot'} />
      {name}
    </li>
  );
}
