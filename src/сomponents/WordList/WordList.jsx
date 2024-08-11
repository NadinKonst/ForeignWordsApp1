import "./WordList.scss";
import { useContext } from "react";
import WordRow from "../WordRow/WordRow";
import { WordContext } from "../MyContext/WordContext";

export default function WordList() {
  const { words, loading, error, updateWord, deleteWord } =
    useContext(WordContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (words.length === 0) {
    return <p>No words available.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>English</th>
          <th>Transcription</th>
          <th>Russian</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <WordRow
            key={word.id}
            word={word}
            onSave={(updatedWord) => updateWord(word.id, updatedWord)}
            onDelete={() => deleteWord(word.id)}
          />
        ))}
      </tbody>
    </table>
  );
}
