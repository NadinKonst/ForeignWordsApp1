import "./WordList.scss";
import { useState } from "react";
import { validateFields } from "./utils";
import WordRow from "../WordRow/WordRow";

export default function WordList({ words }) {
  const [editMode, setEditMode] = useState(false);
  const [editedWords, setEditedWords] = useState(
    words.map((word) => ({ ...word }))
  );
  const [editedIndex, setEditedIndex] = useState(null);
  const [errors, setErrors] = useState({});

  const handleEditWord = (index) => {
    setEditedIndex(index);
    setEditMode(true);
    setErrors({});
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedWords(words.map((word) => ({ ...word })));
    setEditedIndex(null);
    setErrors({});
  };

  const handleInputChange = (fieldName, value) => {
    const newEditedWords = [...editedWords];
    newEditedWords[editedIndex] = {
      ...newEditedWords[editedIndex],
      [fieldName]: value,
    };

    setEditedWords(newEditedWords);
    setErrors({});
  };

  const handleSave = () => {
    const currentWord = editedWords[editedIndex];
    const newErrors = validateFields(currentWord);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Error: Unable to save data.");
      return;
    }

    console.log("Saved data:", currentWord);
    setEditMode(false);
    setEditedIndex(null);
    setErrors({});
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
            editMode={editMode}
            editedIndex={editedIndex}
            handleInputChange={handleInputChange}
            handleSave={handleSave}
            handleCancel={handleCancel}
            handleEditWord={handleEditWord}
            errors={errors}
          />
        ))}
      </tbody>
    </table>
  );
}
