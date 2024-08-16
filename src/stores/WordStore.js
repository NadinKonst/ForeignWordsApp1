import { makeAutoObservable, action } from "mobx";

class WordStore {
  words = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchWords = action(async () => {
    this.loading = true;
    this.error = null;
    try {
      const response = await fetch("/api/words");
      if (!response.ok) {
        throw new Error("Error loading data");
      }
      const data = await response.json();
      this.words = data; // Изменение состояния должно быть внутри действия
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  });

  addWord = action(async (newWord) => {
    try {
      const response = await fetch(`/api/words/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(newWord),
      });
      if (!response.ok) {
        throw new Error("Error adding word");
      }
      const addedWord = await response.json();
      this.words.push(addedWord); // Изменение состояния должно быть внутри действия
    } catch (error) {
      this.error = error.message;
    }
  });

  updateWord = action(async (id, updatedWord) => {
    try {
      const response = await fetch(`/api/words/${id}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ ...updatedWord, tags: "", tags_json: "" }),
      });
      if (!response.ok) {
        throw new Error("Error updating word");
      }
      const updatedData = await response.json();
      this.words = this.words.map((word) =>
        word.id === id ? updatedData : word
      ); // Изменение состояния должно быть внутри действия
    } catch (error) {
      this.error = error.message;
    }
  });

  deleteWord = action(async (id) => {
    try {
      const response = await fetch(`/api/words/${id}/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      if (!response.ok) {
        throw new Error("Error deleting word");
      }
      this.words = this.words.filter((word) => word.id !== id); // Изменение состояния должно быть внутри действия
    } catch (error) {
      this.error = error.message;
    }
  });
}

const wordStore = new WordStore();
export default wordStore;