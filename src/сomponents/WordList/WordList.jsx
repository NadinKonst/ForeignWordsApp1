import "./WordList.scss";
import { useState } from "react";
import { emptyInput } from "./utils";

export default function WordList({ words }) {
  const [editMode, setEditMode] = useState(false);

  const [editedWords, setEditedWords] = useState(
    words.map((word) => ({ ...word }))
  );
  const [editedIndex, setEditedIndex] = useState(null);

  const [emptyField, setEmptyField] = useState(false);

  const handleEditWord = (index) => {
    setEditedIndex(index);
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedWords(words.map((word) => ({ ...word })));
    setEditedIndex(null);
    setEmptyField("");
  };

  const handleInputChange = (fieldName, value) => {
    const newEditedWords = [...editedWords];
    newEditedWords[editedIndex] = {
      ...newEditedWords[editedIndex],
      [fieldName]: value,
    };

    setEditedWords(newEditedWords);

    const currentWord = newEditedWords[editedIndex];
    const hasEmptyFields =
      !currentWord.english ||
      !currentWord.transcription ||
      !currentWord.russian;

    setEmptyField(hasEmptyFields);

    // if (hasEmptyFields) {
    //   alert("enter smth");
    // }
  };

  const handleSave = () => {
    const currentWord = editedWords[editedIndex];

    // if (
    //   !currentWord.english ||
    //   !currentWord.transcription ||
    //   !currentWord.russian
    // ) {
    //   alert("Fill in all the fields.");
    //   return;
    // }

    console.log("Saved data:", currentWord);

    setEditMode(false);
    setEditedIndex(null);
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
          <tr key={index}>
            <td>
              {editMode && editedIndex === index ? (
                <input
                  type="text"
                  value={word.english}
                  className={`input-word ${emptyInput(
                    editedWords,
                    editedIndex,
                    editMode,
                    "english"
                  )}`}
                  onChange={(e) => handleInputChange("english", e.target.value)}
                />
              ) : (
                word.english
              )}
            </td>
            <td>
              {editMode && editedIndex === index ? (
                <input
                  type="text"
                  value={word.transcription}
                  className={`input-word ${emptyInput(
                    editedWords,
                    editedIndex,
                    editMode,
                    "transcription"
                  )}`}
                  onChange={(e) =>
                    handleInputChange("transcription", e.target.value)
                  }
                />
              ) : (
                word.transcription
              )}
            </td>
            <td>
              {editMode && editedIndex === index ? (
                <input
                  type="text"
                  value={word.russian}
                  className={`input-word ${emptyInput(
                    editedWords,
                    editedIndex,
                    editMode,
                    "russian"
                  )}`}
                  onChange={(e) => handleInputChange("russian", e.target.value)}
                />
              ) : (
                word.russian
              )}
            </td>
            <td className="actions">
              {editMode && editedIndex === index ? (
                <>
                  <button onClick={handleSave} disabled={emptyField}>
                    Save
                  </button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditWord(index)}>Edit</button>
                  <button>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
