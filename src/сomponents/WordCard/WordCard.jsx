
import "./WordCard.scss";
import { useState, useEffect, useRef, forwardRef, useContext } from "react";
import { WordContext } from "../MyContext/WordContext";

const WordCard = forwardRef(({ id, onWordLearned }, ref) => {
  const { words } = useContext(WordContext); 
  const wordData = words.find((word) => word.id === String(id)); 

  const [showTranslation, setShowTranslation] = useState(false);
  const buttonRef = useRef();

 
  if (!wordData) {
    return <div>Word not found!</div>;
  }

  const { english, transcription, tags } = wordData; 

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
        <div className="word-translation">Translation: {wordData.russian}</div>
      ) : (
        <button ref={buttonRef} onClick={handleShowTranslation}>
          Show translation
        </button>
      )}
    </div>
  );
});

export default WordCard;