import Checkbox from "./Components/Checkbox";
import { useState } from "react";
import { list } from "./list.ts";
import "./App.css";

function App() {
  const [checkedList, setCheckedList] = useState(list);

  const handleChecked = (id, isChecked) => {
    const updatedList = checkedList.map((item) =>
      item.id === id ? { ...item, checked: isChecked } : item,
    );

    setCheckedList(updatedList);
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;

    const updatedList = checkedList.map((item) => ({
      ...item,
      checked: isChecked,
    }));

    setCheckedList(updatedList);
  };

  return (
    <div className="app-container">
      <div className="selectall">
        <label>
          <input
            type="checkbox"
            checked={checkedList.every((item) => item.checked)}
            onChange={handleSelectAll}
          />
          Select All
        </label>
      </div>

      <div className="list">
        {checkedList.map((item) => {
          return (
            <Checkbox
              key={item.id}
              id={item.id}
              listName={item.name}
              checked={item.checked}
              onChange={handleChecked}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
