import { FaAddressBook } from "react-icons/fa";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
// import SearchFalse from "../SearchFalse/SearchFalse";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook <FaAddressBook />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
