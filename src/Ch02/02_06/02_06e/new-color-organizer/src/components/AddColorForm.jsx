import { useRef } from "react";
import "../stylesheets/AddColorForm.scss";

const AddColorForm = ({ onNewColor = (f) => f }) => {
  const titleRef = useRef();
  const colorRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    onNewColor(
      titleRef.current.value,
      colorRef.current.value
    );
    titleRef.current.value = "";
    colorRef.current.value = "#000000";
    titleRef.current.focus();
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
