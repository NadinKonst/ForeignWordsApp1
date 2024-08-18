import "./WordList.scss";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import WordRow from "../WordRow/WordRowMobX";
import AddWordForm from "../AddWordForm/AddWordFormMobX";
import { WordContext } from "../../context/Provider";
import Loader from "../Loader/Loader";

const WordList = observer(() => {
  const wordStore = useContext(WordContext);

  const handleSaveWord = async (id, updatedWord) => {
    await wordStore.updateWord(id, updatedWord);
  };

  return (
    <>
      {wordStore.loading && <Loader />}
      {wordStore.error && <div>Error: {wordStore.error}</div>}
      <AddWordForm addWord={wordStore.addWord} />
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
          {wordStore.words.map((word) => (
            <WordRow
              key={word.id}
              word={word}
              onSave={handleSaveWord}
              onDelete={async () => await wordStore.deleteWord(word.id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
});

export default WordList;
