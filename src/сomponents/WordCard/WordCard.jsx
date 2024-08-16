
import "./WordCard.scss";
import { useState, useEffect, useRef, forwardRef, useContext } from "react";
import { observer } from "mobx-react-lite"; // Импортируем observer
import { WordContext } from "../../context/WordProvider";

const WordCard = observer(
  forwardRef(({ id, onWordLearned }, ref) => {
    const { words, loading } = useContext(WordContext); // Используем контекст
    const wordData = words.find((word) => word.id === String(id)); // Ищем слово по id

    const [showTranslation, setShowTranslation] = useState(false);
    const buttonRef = useRef();

    // Если данные загружаются
    if (loading) {
      return <div>Loading...</div>; // Индикатор загрузки
    }

    // Если слово не найдено
    if (!wordData) {
      return <div>Word not found!</div>;
    }

    const { english, transcription, tags } = wordData; // Извлекаем данные о слове

    useEffect(() => {
      setShowTranslation(false);
    }, [id]);

    useEffect(() => {
      if (!showTranslation && buttonRef.current) {
        buttonRef.current.focus();
      }
    }, [showTranslation]);

    const handleShowTranslation = () => {
      setShowTranslation(true);
      onWordLearned();
    };

    return (
      <div className="word-card">
        <h1 className="id">{id}</h1>
        <h2 className="word-title">{english}</h2>
        <div className="word-transcription">Transcription: {transcription}</div>
        <div className="word-theme">Theme: {tags}</div>
        {showTranslation ? (
          <div className="word-translation">
            Translation: {wordData.russian}
          </div>
        ) : (
          <button ref={buttonRef} onClick={handleShowTranslation}>
            Show translation
          </button>
        )}
      </div>
    );
  })
);

export default WordCard;
