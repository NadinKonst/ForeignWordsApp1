import React, { useState, useContext } from "react";
import WordCard from "../WordCard/WordCard";
import { WordContext } from "../MyContext/WordContext"; 
import "./WordCardSlider.scss";

export default function WordCardSlider() {
  const { words } = useContext(WordContext); 
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => {
      if (prevIndex < words.length - 1) {
        return prevIndex + 1;
      } else {
        return 0; 
      }
    });
  };

  const handlePrevWord = () => {
    setCurrentWordIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return words.length - 1; 
      }
    });
  };

  const handleWordLearned = () => {
    setLearnedWordsCount((prevCount) => prevCount + 1);
  };

  const currentWord = words.length > 0 ? words[currentWordIndex] : null;

  return (
    <div className="word-card-slider">
      <h1>Learned words: {learnedWordsCount}</h1>
      {currentWord ? (
        <WordCard id={currentWord.id} onWordLearned={handleWordLearned} />
      ) : (
        <p>Oops, no data</p>
      )}
      <div className="navigation-buttons">
        <button onClick={handlePrevWord} disabled={words.length === 0}>
          ← Prev Word
        </button>
        <button onClick={handleNextWord} disabled={words.length === 0}>
          Next Word →
        </button>
      </div>
    </div>
  );
}
