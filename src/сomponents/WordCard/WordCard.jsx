import "./WordCard.scss";
import { useState } from "react";

export default function WordCard({ word, transcription, translation, theme }) {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className="word-card">
      <h2 className="word-title">{word}</h2>
      <div className="word-transcription">Transcription: {transcription}</div>
      <div className="word-theme">Theme: {theme}</div>
      {showTranslation ? (
        <div className="word-translation">Translation: {translation}</div>
      ) : (
        <button onClick={handleShowTranslation}>Show traslation</button>
      )}
    </div>
  );
}
