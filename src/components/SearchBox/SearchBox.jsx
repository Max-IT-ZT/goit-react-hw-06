import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  const onFilter = (value) => {
    dispatch(changeFilter(value));
  };
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
