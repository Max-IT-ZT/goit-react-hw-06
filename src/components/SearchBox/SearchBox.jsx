import css from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchContainer}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        className={css.input}
        placeholder="🔎 Search "
        type="text"
        name="search"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
