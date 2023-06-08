import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { List, Button, ContactItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem key={id}>
          <p>
            {name}: {phone}
          </p>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </List>
  );
};
