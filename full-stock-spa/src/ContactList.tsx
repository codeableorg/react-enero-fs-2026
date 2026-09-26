import Contact, { type ContactProps } from './Contact';
import './contact-list.css';

export interface ContactListProps {
  contacts: ContactProps[];
}

export function ContactList({ contacts }: ContactListProps) {
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
