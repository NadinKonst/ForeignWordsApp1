import React, { useState, useContext } from "react";
import WordCard from "../WordCard/WordCard";
import "./WordCardSlider.scss";
import { WordContext } from "../../context/WordProvider"; // Импортируем контекст
import Loader from "../Loader/Loader";

export default function WordCardSlider() {
  const { words, loading } = useContext(WordContext); // Получаем слова и состояние загрузки

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => {
      if (prevIndex < words.length - 1) {
        return prevIndex + 1;
      } else {
        return 0; // возвращаемся к первому слову
      }
    });
  };

  const handlePrevWord = () => {
    setCurrentWordIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return words.length - 1; // переходим к последнему слову
      }
    });
  };

  const handleWordLearned = () => {
    setLearnedWordsCount((prevCount) => prevCount + 1);
  };

  // Проверяем наличие слов и состояние загрузки
  if (loading) {
    return <Loader />; // Индикатор загрузки
  }

  const currentWord = words.length > 0 ? words[currentWordIndex] : null; // Текущее слово

  return (
    <div className="word-card-slider">
      <h1>Learned words: {learnedWordsCount}</h1>
      {currentWord ? (
        <WordCard
          id={currentWord.id} // Передаем только id
          onWordLearned={handleWordLearned}
        />
      ) : (
        <p>Oops, no data</p>
      )}
      <div className="navigation-buttons">
        <button onClick={handlePrevWord}>← Prev Word</button>
        <button onClick={handleNextWord}>Next Word →</button>
      </div>
    </div>
  );
}
