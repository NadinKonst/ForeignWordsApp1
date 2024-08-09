import { createContext, useState, useEffect } from "react";

export const WordContext = createContext();

export default function WordProvider({ children }) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null); // Состояние для хранения выбранного слова

  // Функция для получения списка слов
  const fetchWords = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
      const data = await response.json();
      setWords(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Функция для добавления нового слова
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
        throw new Error("Ошибка при добавлении слова");
      }
      const addedWord = await response.json();
      setWords((prevWords) => [...prevWords, addedWord]);
    } catch (error) {
      setError(error.message);
    }
  };

  // Функция для обновления слова
  const updateWord = async (id, updatedWord) => {
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words/${id}/update",
        {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({ ...updatedWord, tags: "", tags_json: "" }),
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка при обновлении слова");
      }
      const updatedData = await response.json();
      setWords((prevWords) =>
        prevWords.map((word) => (word.id === id ? updatedData : word))
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // Функция для удаления слова
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
        throw new Error("Ошибка при удалении слова");
      }
      setWords((prevWords) => prevWords.filter((word) => word.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchWords(); // Загружаем слова при монтировании
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
