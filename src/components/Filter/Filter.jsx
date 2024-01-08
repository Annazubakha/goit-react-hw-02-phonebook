import s from './Filter.module.css';
export const Filter = () => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" name="filter" />
    </label>
  );
};
