import "./WordList.scss";
import { useState } from "react";
import WordRow from "../WordRow/WordRow";

export default function WordList({ words }) {
  const [editedWords, setEditedWords] = useState(
    words.map((word) => ({ ...word }))
  );

  const handleSaveWord = (index, updatedWord) => {
    const newEditedWords = [...editedWords];
    newEditedWords[index] = updatedWord;
    setEditedWords(newEditedWords);
  };

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
        {editedWords.map((word, index) => (
          <WordRow
            key={index}
            word={word}
            index={index}
            onSave={handleSaveWord}
          />
        ))}
      </tbody>
    </table>
  );
}
