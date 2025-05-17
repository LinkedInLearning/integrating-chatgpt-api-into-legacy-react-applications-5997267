import { useState, useRef } from "react";
import "../stylesheets/AddColorForm.scss";

const AddColorForm = ({ onNewColor = (f) => f }) => {
  const titleRef = useRef();
  const colorRef = useRef();
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let title = titleRef.current.value;
    let color = colorRef.current.value;
    if (!title.trim()) {
      title = await getColorNameFromAPI(color);
    }

    onNewColor(title, color);
    titleRef.current.value = "";
    colorRef.current.value = "#000000";
    titleRef.current.focus();
    setLoading(false);
  };

  return (
    <form className="add-color" onSubmit={submit}>
      <input
        ref={titleRef}
        type="text"
        placeholder="color title..."
        required
      />
      <input ref={colorRef} type="color" required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
