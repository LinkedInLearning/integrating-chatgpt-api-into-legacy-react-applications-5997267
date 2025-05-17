import "../stylesheets/Star.scss";

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div
    className={selected ? "star selected" : "star"}
    onClick={onClick}
  ></div>
);

export default Star;
