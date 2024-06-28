import "./WordList.scss";
import { useState } from "react";

export default function WordList({ words }) {
  const [editMode, setEditMode] = useState(false); // режим внесения изменений открытие-закрытие
  const [editedWords, setEditedWords] = useState(words); //хранение добавленных изменений

  const handleEdit = () => {
    setEditMode(true); //обработчик режима редактирования
  };

  const handleCancel = () => {
    setEditMode(false); //обработчик отмены внесения изменений
    setEditedWords(words); // и сброса добавленных изменений
  };

  const handleInputChange = (index, fieldName, value) => {
    const newEditedWords = [...editedWords]; //обновление данных в инпутах
    newEditedWords[index] = {
      ...newEditedWords[index],
      [fieldName]: value,
    };
    setEditedWords(newEditedWords);
  };

  const handleSave = () => {
    // режим сохранения изменений
    // console.log("Сохранение", editedWords);
    setEditMode(false);
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
              {editMode ? (
                <input
                  type="text"
                  value={word.english}
                  className="input-word"
                  onChange={(e) =>
                    handleInputChange(index, "english", e.target.value)
                  }
                />
              ) : (
                word.english
              )}
            </td>
            <td>
              {editMode ? (
                <input
                  type="text"
                  value={word.transcription}
                  className="input-word"
                  onChange={(e) =>
                    handleInputChange(index, "transcription", e.target.value)
                  }
                />
              ) : (
                word.transcription
              )}
            </td>
            <td>
              {editMode ? (
                <input
                  type="text"
                  value={word.russian}
                  className="input-word"
                  onChange={(e) =>
                    handleInputChange(index, "russian", e.target.value)
                  }
                />
              ) : (
                word.russian
              )}
            </td>
            <td className="actions">
              {editMode ? (
                <>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={handleEdit}>Edit</button>
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
