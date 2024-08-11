import React, { useState, useContext } from "react";
import { WordContext } from "../MyContext/WordContext";

const AddWordForm = () => {
  const { addWord } = useContext(WordContext);
  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWord((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWord(newWord);
    setNewWord({ english: "", transcription: "", russian: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="english"
        placeholder="English"
        value={newWord.english}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="transcription"
        placeholder="Transcription"
        value={newWord.transcription}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="russian"
        placeholder="Russian"
        value={newWord.russian}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Word</button>
    </form>
  );
};

export default AddWordForm;
