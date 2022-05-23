import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const defaultColor = new Values("#f15025").all(10);

  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(defaultColor);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            placeholder="#f15025"
          />
          <button className="btn" type="submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          const hexCode = `#${color.hex}`;
          return (
            <SingleColor key={index} index={index} {...color} hex={hexCode} />
          );
        })}
      </section>
    </>
  );
}

export default App;
