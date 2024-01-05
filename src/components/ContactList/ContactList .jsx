import { ContactListElem } from 'components/ContactListElem/ContactListElem';
export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactListElem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};
