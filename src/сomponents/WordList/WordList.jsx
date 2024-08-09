// import "./WordList.scss";
// import { useState } from "react";
// import WordRow from "../WordRow/WordRow";
// import { WordContext } from "../MyContext/WordContext";

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
//     <table className="table">
//       <thead>
//         <tr>
//           <th>English</th>
//           <th>Transcription</th>
//           <th>Russian</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {editedWords.map((word, index) => (
//           <WordRow
//             key={index}
//             word={word}
//             index={index}
//             onSave={handleSaveWord}
//           />
//         ))}
//       </tbody>
//     </table>
//   );
// }

import "./WordList.scss";
import { useContext } from "react";
import WordRow from "../WordRow/WordRow";
import { WordContext } from "../MyContext/WordContext";

export default function WordList() {
  const { words, loading, error, fetchWords, addWord, updateWord, deleteWord } =
    useContext(WordContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return { error };
  }

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
        {words.map((word, index) => (
          <WordRow
            key={word.id}
            word={word}
            index={index}
            onSave={(updatedWord) => updateWord(word.id, updatedWord)}
            onDelete={() => deleteWord(word.id)}
          />
        ))}
      </tbody>
    </table>
  );
}
