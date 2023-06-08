import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Wrapper, MainTitle, ContactsTitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      {isLoading && !error && <b>Loading...</b>}
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
