import "./WordList.scss";
import { useState } from "react";

export default function WordList({ words }) {
  const [editMode, setEditMode] = useState(false);

  const [editedWords, setEditedWords] = useState(
    words.map((word) => ({ ...word }))
  ); 
  const [editedIndex, setEditedIndex] = useState(null); 

  const handleEditWord = (index) => {
    setEditedIndex(index);
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedWords(words.map((word) => ({ ...word }))); 
    setEditedIndex(null);
  };

  const handleInputChange = (fieldName, value) => {
    const newEditedWords = [...editedWords];
    newEditedWords[editedIndex] = {
      ...newEditedWords[editedIndex],
      [fieldName]: value,
    };
    setEditedWords(newEditedWords);
  };

  const handleSave = () => {
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
                  className="input-word"
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
                  className="input-word"
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
                  className="input-word"
                  onChange={(e) => handleInputChange("russian", e.target.value)}
                />
              ) : (
                word.russian
              )}
            </td>
            <td className="actions">
              {editMode && editedIndex === index ? (
                <>
                  <button onClick={handleSave}>Save</button>
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

// import "./WordList.scss";
// import Card from "../Card/Card";
// export default function WordList({ words }) {
// return (
// <table className="table">
// <thead>
// <tr>
// <th>English</th>
// <th>Transcription</th>
// <th>Russian</th>
// <th>Actions</th>
// </tr>
// </thead>
// <tbody>
// {words.map((word, index) => (
// <Card {...word} key={index}/> // Экспортируем объект со словами в компонент Card и указываем ключ к нему
// ))}
// </tbody>
// </table>
// );
// }
