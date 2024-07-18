import { useEffect, useState } from "react";
import baseContact from "../../data/baseContact.json";
import { FaAddressBook } from "react-icons/fa";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import SearchFalse from "../SearchFalse/SearchFalse";
import css from "./App.module.css";
const getInitialContact = () => {
  const saveContact = localStorage.getItem("contacts");
  return saveContact ? JSON.parse(saveContact) : baseContact;
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialContact);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (newContact) => {
    console.log("newContact: ", newContact);
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };
  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook <FaAddressBook />
      </h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContact} deleteContact={deleteContact} />
      {visibleContact < 1 && <SearchFalse />}
    </div>
  );
}
