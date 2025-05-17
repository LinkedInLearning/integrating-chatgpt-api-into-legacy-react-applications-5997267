import { useState } from "react";
import { v4 } from "uuid";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import "../stylesheets/APP.scss";

const App = () => {
  const [colors, setColors] = useState([]);

  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]);
  };

  const rateColor = (id, rating) => {
    setColors(
      colors.map((color) =>
        color.id !== id ? color : { ...color, rating }
      )
    );
  };

  const removeColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <div className="app">
      <AddColorForm onNewColor={addColor} />
      <ColorList
        colors={colors}
        onRate={rateColor}
        onRemove={removeColor}
      />
    </div>
  );
};

export default App;
