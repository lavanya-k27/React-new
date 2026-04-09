import "./Checkbox.css";

const Checkbox = ({ listName, checked }) => {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" checked={checked} />
        {listName}
      </label>
    </div>
  );
};

export default Checkbox;
