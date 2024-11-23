/* eslint-disable react/prop-types */
import { useState } from "react";
import "./CardDeck.css";

export default function CardDeck({ count }) {
  const [cards, setCards] = useState(Array.from({ length: count }));

  const handleCardClick = (index) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  return (
    <div className="card-deck">
      {cards.map((_, index) => (
        <img
          className="card"
          key={index}
          src="src/assets/UNO Cards/Special/plus-four.svg"
          alt=""
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}
