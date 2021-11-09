import s from "./Filter.module.css";
import { contactsSelector } from "../../redux/phonebook";
import { useDispatch,useSelector } from "react-redux";
import {changeFilter} from '../../redux/phonebook/phonebook-actions'
export default function Filter() {
  const filter = useSelector(contactsSelector.getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
    <label className={s.label}>
      Filter
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="Enter some letters to search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      ></input>
    </label>
    </div>
  );
}