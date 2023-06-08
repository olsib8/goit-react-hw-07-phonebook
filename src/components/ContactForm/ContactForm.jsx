import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Toaster, toast } from 'react-hot-toast';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      phone,
    };

    const checkContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    checkContacts
      ? toast.error(`${name} is already in contacts.`)
      : dispatch(addContact(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Label>
        Name
        <Input
          value={name}
          onChange={onChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          value={phone}
          onChange={onChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Toaster position="top-center" reverseOrder={false} />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
