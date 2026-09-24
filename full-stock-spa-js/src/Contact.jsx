import './contact.css';

export default function Contact({ name, isOnline }) {
  return (
    <li className='contact'>
      {isOnline && <div className='green-dot' />}
      {name}
    </li>
  );
}
