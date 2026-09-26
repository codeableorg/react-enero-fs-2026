import './contact.css';

export default function Contact({ name, isOnline }) {
  return (
    <li className='contact'>
      <div className={isOnline ? 'green-dot' : 'gray-dot'} />
      {name}
    </li>
  );
}
