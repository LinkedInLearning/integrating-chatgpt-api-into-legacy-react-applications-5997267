import { useState } from "react";
import StarRating from "./StarRating";
import "../stylesheets/Color.scss";
import { getAIRatingFromAPI } from "../api/openai";
import { describeColorWithAI } from "../api/openai";

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
  const handleAIDescription = async () => {
    try {
      const result = await describeColorWithAI(
        title,
        color
      );
      console.log("mood:", result);
    } catch (err) {
      console.error(
        "Failed to fetch mood description:",
        err
      );
    }
  };
  return (
    <section className="color">
      <h1>{title}</h1>
      <button onClick={handleAIRating}>Rate with AI</button>
      <button onClick={handleAIDescription}>
        Describe with AI
      </button>
      <button onClick={onRemove}>X</button>
      <div
        className="color"
        style={{ backgroundColor: color }}
      ></div>
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
