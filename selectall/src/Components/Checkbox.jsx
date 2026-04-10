import "./Checkbox.css";

const Checkbox = ({ listName, onChange, checked, id }) => {
  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(id, e.target.checked)}
        />
        {listName}
      </label>
    </div>
  );
};

export default Checkbox;
