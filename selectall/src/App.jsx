import Checkbox from "./Components/Checkbox";
import { useState } from "react";
import { list } from "./list.ts";
import "./App.css";

function App() {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  return (
    <div className="app-container">
      <div className="selectall">
        <label>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          Select All
        </label>
      </div>

      <div className="list">
        {list.map((item) => {
          return (
            <Checkbox
              key={item.id}
              listName={item.name}
              checked={selectAll ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
