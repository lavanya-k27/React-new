import { useState } from "react";
import "./TextArea.css";

const TextArea = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const textLength = text.replace(/\s/g, "").length;

  const countCharacter = () => {
    setCount(textLength);
    setText("");
  };

  return (
    <div className="container">
      <div>
        <textarea
          onChange={handleChange}
          placeholder="type here..."
          value={text}
        />
      </div>

      <button onClick={countCharacter}>character count</button>
      <p>Character count (without space): {count}</p>
    </div>
  );
};

export default TextArea;
