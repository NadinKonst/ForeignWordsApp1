// import "./WordList.scss";
// import { useState } from "react";
// import WordRow from "../WordRow/WordRow";
// import AddWordForm from "../AddWordForm/AddWordForm";

// export default function WordList({ words }) {
//   const [editedWords, setEditedWords] = useState(
//     words.map((word) => ({ ...word }))
//   );

//   const handleSaveWord = (index, updatedWord) => {
//     const newEditedWords = [...editedWords];
//     newEditedWords[index] = updatedWord;
//     setEditedWords(newEditedWords);
//   };

//   return (
//     <>
//       <AddWordForm />
//       <table className="table">
//         <thead>
//           <tr>
//             <th>English</th>
//             <th>Transcription</th>
//             <th>Russian</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {editedWords.map((word, index) => (
//             <WordRow
//               key={index}
//               word={word}
//               index={index}
//               onSave={handleSaveWord}
//             />
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

import "./WordList.scss";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import WordRow from "../WordRow/WordRow";
import AddWordForm from "../AddWordForm/AddWordForm";
import { WordContext } from "../../context/WordProvider";
import Loader from "../Loader/Loader";

const WordList = observer(() => {
  const wordStore = useContext(WordContext); // Получаем 'wordStore' из контекста

  const handleSaveWord = async (id, updatedWord) => {
    await wordStore.updateWord(id, updatedWord); // Обновляем слово через хранилище
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
              onDelete={async () => await wordStore.deleteWord(word.id)} // Удаление слова
            />
          ))}
        </tbody>
      </table>
    </>
  );
});

export default WordList;
