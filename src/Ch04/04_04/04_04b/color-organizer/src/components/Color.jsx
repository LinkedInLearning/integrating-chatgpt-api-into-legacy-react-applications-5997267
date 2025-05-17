import { useState } from "react";
import StarRating from "./StarRating";
import "../stylesheets/Color.scss";
import { getAIRatingFromAPI } from "../api/openai";

const Color = ({
  title,
  color,
  rating = 0,
  onRemove = (f) => f,
  onRate = (f) => f
}) => {
  const [error, setError] = useState(null);
  const handleAIRating = async () => {
    setError(null);
    try {
      const response = await getAIRatingFromAPI(
        title,
        color
      );
      const rating = parseInt(
        response.match(/\d+/)?.[0],
        10
      );
      if (rating >= 1 && rating <= 5) {
        onRate(rating);
      }
    } catch (err) {
      console.error("AI Rating Failed", err);
      setError(
        "Couldn't get rating from ChatGPT. Please try again!"
      );
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
      {error && <div>{error}</div>}
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
