import ContactList from '../ContactList';
import SearchBox from '../SearchBox';
import ContactForm from '../ContactForm';
import style from './Phonebook.module.css';

const Phonebook = () => {
  return (
    <div className={style.phonebookContainer}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default Phonebook;
