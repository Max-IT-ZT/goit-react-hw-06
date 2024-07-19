import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import SearchFalse from "../SearchFalse/SearchFalse";
export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))
      ) : (
        <li>
          <SearchFalse />
        </li>
      )}
    </ul>
  );
}
