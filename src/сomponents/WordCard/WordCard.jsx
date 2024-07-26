import "./WordCard.scss";
import { useState, useEffect, useRef, forwardRef } from "react";

const WordCard = forwardRef(
  ({ id, word, transcription, translation, theme, onWordLearned }, ref) => {
    const [showTranslation, setShowTranslation] = useState(false);
    const buttonRef = useRef();

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
  }
);

export default WordCard;
