import { createContext, useState, useEffect } from "react";

export const WordContext = createContext();

export default function WordProvider({ children }) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //  получения списка слов
  const fetchWords = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      if (!response.ok) {
        throw new Error("Error loading data");
      }
      const data = await response.json();
      setWords(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // добавление нового слова
  const addWord = async (newWord) => {
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify(newWord),
        }
      );
      if (!response.ok) {
        throw new Error("Error adding word");
      }
      const addedWord = await response.json();
      setWords((prevWords) => [...prevWords, addedWord]);
    } catch (error) {
      setError(error.message);
    }
  };

  // обновление слова
  const updateWord = async (id, updatedWord) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({ ...updatedWord, tags: "", tags_json: "" }),
        }
      );
      if (!response.ok) {
        throw new Error("Error updating word");
      }
      const updatedData = await response.json();
      setWords((prevWords) =>
        prevWords.map((word) => (word.id === id ? updatedData : word))
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // удаление слова
  const deleteWord = async (id) => {
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words/${id}/delete",
        {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
        }
      );
      if (!response.ok) {
        throw new Error("Error deleting word");
      }
      setWords((prevWords) => prevWords.filter((word) => word.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <WordContext.Provider
      value={{
        words,
        loading,
        error,
        fetchWords,
        addWord,
        updateWord,
        deleteWord,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}
