// import "./WordCard.scss";
// import { useState, useEffect, useRef, forwardRef } from "react";

// const WordCard = forwardRef(
//   ({ id, word, transcription, translation, theme, onWordLearned }, ref) => {
//     const [showTranslation, setShowTranslation] = useState(false);
//     const buttonRef = useRef();

//     useEffect(() => {
//       setShowTranslation(false);
//     }, [id]);

//     useEffect(() => {
//       if (!showTranslation && buttonRef.current) {
//         buttonRef.current.focus();
//       }
//     }, [showTranslation]);

//     const handleShowTranslation = () => {
//       setShowTranslation(true);
//       onWordLearned();
//     };

//     return (
//       <div className="word-card">
//         <h1 className="id">{id}</h1>
//         <h2 className="word-title">{word}</h2>
//         <div className="word-transcription">Transcription: {transcription}</div>
//         <div className="word-theme">Theme: {theme}</div>
//         {showTranslation ? (
//           <div className="word-translation">Translation: {translation}</div>
//         ) : (
//           <button ref={buttonRef} onClick={handleShowTranslation}>
//             Show translation
//           </button>
//         )}
//       </div>
//     );
//   }
// );

// export default WordCard;

import "./WordCard.scss";
import { useState, useEffect, useRef, forwardRef, useContext } from "react";
import { WordContext } from "../MyContext/WordContext";

const WordCard = forwardRef(({ id, onWordLearned }, ref) => {
  const { words,
    loading,
    error,
    fetchWords,
    addWord,
    updateWord,
    deleteWord,
  } = useContext(WordContext); // Получаем слова из контекста
  const wordData = words.find((word) => word.id === id); // Находим нужное слово по id

  const [showTranslation, setShowTranslation] = useState(false);
  const buttonRef = useRef();

  // Проверка, найдено ли слово
  if (!wordData) {
    return <div>Word not found!</div>;
  }

  const { word, transcription, translation, theme } = wordData; // Деструктурируем данные слова

  useEffect(() => {
    setShowTranslation(false); // Сброс состояния при изменении id
  }, [id]);

  useEffect(() => {
    if (!showTranslation && buttonRef.current) {
      buttonRef.current.focus(); // Устанавливаем фокус на кнопку, если перевод не показан
    }
  }, [showTranslation]);

  const handleShowTranslation = () => {
    setShowTranslation(true); // Показываем перевод
    onWordLearned(); // Вызываем функцию, когда слово выучено
  };

  return (
    <div className="word-card">
      <h1 className="id">{id}</h1>
      <h2 className="word-title">{word}</h2>
      <div className="word-transcription">Transcription: {transcription}</div>
      <div className="word-theme">Theme: {theme}</div>
      {showTranslation ? (
        <div className="word-translation">Translation: {translation}</div>
      ) : (
        <button ref={buttonRef} onClick={handleShowTranslation}>
          Show translation
        </button>
      )}
    </div>
  );
});

export default WordCard;
