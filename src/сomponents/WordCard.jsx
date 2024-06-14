export default function WordCard({ word, transcription, translation, theme }) {
  return (
    <div className="word-card">
      <h2 className="word-title">{word}</h2>
      <div className="word-transcription">Transcription: {transcription}</div>
      <div className="word-translation">Translation: {translation}</div>
      <div className="word-theme">Theme: {theme}</div>
    </div>
  );
}
