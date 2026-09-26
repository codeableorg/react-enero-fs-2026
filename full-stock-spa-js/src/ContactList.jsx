import Contact from './Contact';
import './contact-list.css';

export function ContactList({ contacts }) {
  return (
    <ul className='contact-list'>
      {contacts.map((contact) => (
        <Contact
          key={contact.name}
          name={contact.name}
          isOnline={contact.isOnline}
        />
      ))}
    </ul>
  );
}
