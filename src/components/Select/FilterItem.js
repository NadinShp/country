import style from './Select.module.css';

const FilterItem = ({ value }) => {
  return (
    <div className="option">
      <input
        type="radio"
        name="region"
        id={value}
        value={value}
        className={style.radio}
      />
      <label className={style.filterLabe} htmlFor={value}>
        {value}
      </label>
    </div>
  );
};

export default FilterItem;