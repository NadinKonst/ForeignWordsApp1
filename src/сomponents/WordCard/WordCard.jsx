import "./WordCard.scss";
import { useState, useEffect } from "react";

export default function WordCard({id, word, transcription, translation, theme }) {
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    setShowTranslation(false); // Обнуляем показ перевода при каждом изменении id слова
  }, [id]); // Зависимость от изменения id слова

  const handleShowTranslation = () => {
    setShowTranslation(true);
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
        <button onClick={handleShowTranslation}>Show traslation</button>
      )}
    </div>
  );
}
