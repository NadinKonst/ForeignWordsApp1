import React, { useState, useRef } from "react";
import WordCard from "../WordCard/WordCard";
import "./WordCardSlider.scss";

export default function WordCardSlider({ words }) {
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

  const currentWord = words ? words[currentWordIndex] : "oops, no data";

  return (
    <div className="word-card-slider">
      <h1>Learned words: {learnedWordsCount}</h1>
      <WordCard
        id={currentWord.id}
        word={currentWord.english}
        transcription={currentWord.transcription}
        translation={currentWord.russian}
        theme={currentWord.tags}
        onWordLearned={handleWordLearned}
      />
      <div className="navigation-buttons">
        <button onClick={handlePrevWord}>← Prev Word</button>
        <button onClick={handleNextWord}>Next Word →</button>
      </div>
    </div>
  );
}
