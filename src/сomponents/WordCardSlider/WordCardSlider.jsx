import React, { useState } from "react";
import WordCard from "../WordCard/WordCard";
import "./WordCardSlider.scss";

export default function WordCardSlider({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => {
      // если текущий индекс меньше длины массива - 1, то увеличиваем индекс на 1, иначе возвращаем 0
      if (prevIndex < words.length - 1) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const handlePrevWord = () => {
    setCurrentWordIndex((prevIndex) => {
      // если текущий индекс больше 0, то уменьшаем индекс на 1, иначе возвращаем длину массива - 1
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return words.length - 1;
      }
    });
  };

  // получаем текущее слово на основе текущего индекса и прописываем сценарий на случай отсутствия данных
  const currentWord = words ? words[currentWordIndex] : "oops, no data";

  return (
    <div className="word-card-slider">
      <WordCard
        word={currentWord.english}
        transcription={currentWord.transcription}
        translation={currentWord.russian}
        theme={currentWord.tags}
      />
      <div className="navigation-buttons">
        <button onClick={handlePrevWord}>← Prev Word</button>
        <button onClick={handleNextWord}>Next Word →</button>
      </div>
    </div>
  );
}
