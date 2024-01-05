export const ContactListElem = ({ name, number, id }) => {
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
};
