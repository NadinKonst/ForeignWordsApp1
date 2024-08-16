import React, { useState } from "react";
import "./AddWordForm.scss";

const AddWordForm = ({ addWord }) => {
  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addWord(newWord); // Используем addWord из пропсов
      setNewWord({ english: "", transcription: "", russian: "" }); // Сбрасываем форму
    } catch (error) {
      console.error("Error adding word:", error); // Логируем ошибку, если она возникла
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="english"
        placeholder="English"
        value={newWord.english}
        onChange={(e) => setNewWord({ ...newWord, english: e.target.value })}
        required
      />
      <input
        type="text"
        name="transcription"
        placeholder="Transcription"
        value={newWord.transcription}
        onChange={(e) =>
          setNewWord({ ...newWord, transcription: e.target.value })
        }
        required
      />
      <input
        type="text"
        name="russian"
        placeholder="Russian"
        value={newWord.russian}
        onChange={(e) => setNewWord({ ...newWord, russian: e.target.value })}
        required
      />
      <button type="submit">Add Word</button>
    </form>
  );
};

export default AddWordForm;
