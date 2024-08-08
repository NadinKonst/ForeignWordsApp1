import "./WordRow.scss";
import { useState } from "react";
import { validateFields } from "./utils";

const WordRow = ({ word, index, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedWord, setEditedWord] = useState({ ...word });
  const [errors, setErrors] = useState({});

  const handleEditWord = () => {
    setEditMode(true);
    setErrors({});
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedWord({ ...word });
    setErrors({});
  };

  const handleInputChange = (fieldName, value) => {
    setEditedWord((prevEditedWord) => ({
      ...prevEditedWord,
      [fieldName]: value,
    }));
    setErrors({});
  };

  const handleSave = () => {
    const newErrors = validateFields(editedWord);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Error: Unable to save data.");
      return;
    }

    console.log("Saved data:", editedWord);

    onSave(index, editedWord);
    setEditMode(false);
    setErrors({});
  };

  return (
    <tr key={index}>
      <td>
        {editMode ? (
          <>
            <input
              type="text"
              value={editedWord.english}
              className={`input-word ${errors.english ? "error" : ""}`}
              onChange={(e) => handleInputChange("english", e.target.value)}
            />
            {errors.english && (
              <span className="error-message">{errors.english}</span>
            )}
          </>
        ) : (
          word.english
        )}
      </td>
      <td>
        {editMode ? (
          <>
            <input
              type="text"
              value={editedWord.transcription}
              className={`input-word ${errors.transcription ? "error" : ""}`}
              onChange={(e) =>
                handleInputChange("transcription", e.target.value)
              }
            />
            {errors.transcription && (
              <span className="error-message">{errors.transcription}</span>
            )}
          </>
        ) : (
          word.transcription
        )}
      </td>
      <td>
        {editMode ? (
          <>
            <input
              type="text"
              value={editedWord.russian}
              className={`input-word ${errors.russian ? "error" : ""}`}
              onChange={(e) => handleInputChange("russian", e.target.value)}
            />
            {errors.russian && (
              <span className="error-message">{errors.russian}</span>
            )}
          </>
        ) : (
          word.russian
        )}
      </td>
      <td className="actions">
        {editMode ? (
          <>
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={handleEditWord}>
              Edit
            </button>
            <button type="button">Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default WordRow;
