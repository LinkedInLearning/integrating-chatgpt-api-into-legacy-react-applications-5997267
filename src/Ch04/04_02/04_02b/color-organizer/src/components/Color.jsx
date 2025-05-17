import StarRating from "./StarRating";
import "../stylesheets/Color.scss";

const Color = ({
  title,
  color,
  rating = 0,
  onRemove = (f) => f,
  onRate = (f) => f
}) => {
  const handleAIRating = async () => {
    const response = await getAIRatingFromAPI(title, color);
    const rating = parseInt(response.match(/\d+/)?.[0], 10);
    if (rating >= 1 && rating <= 5) {
      onRate(rating);
    }
  };
  return (
    <section className="color">
      <h1>{title}</h1>
      <button onClick={onRemove}>X</button>
      <div
        className="color"
        style={{ backgroundColor: color }}
      ></div>
      <button onClick={handleAIRating}>Rate with AI</button>
      <div>
        <StarRating
          starsSelected={rating}
          onRate={onRate}
        />
      </div>
    </section>
  );
};

export default Color;
