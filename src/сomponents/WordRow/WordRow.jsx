import "./WordRow.scss";

const WordRow = ({
  word,
  index,
  editMode,
  editedIndex,
  handleInputChange,
  handleSave,
  handleCancel,
  handleEditWord,
  errors,
}) => {
  return (
    <tr key={index}>
      <td>
        {editMode && editedIndex === index ? (
          <>
            <input
              type="text"
              value={word.english}
              className={'input-word ${errors.english ? "error" : ""}'}
              onChange={(e) => handleInputChange("english", e.target.value)}
            />
            {errors.english && (
              <span className="error-message">{errors.english}</span>
            )}
          </>
        ) : (
          word.english
        )}
      </td>
      <td>
        {editMode && editedIndex === index ? (
          <>
            <input
              type="text"
              value={word.transcription}
              className={'input-word ${errors.transcription ? "error" : ""}'}
              onChange={(e) =>
                handleInputChange("transcription", e.target.value)
              }
            />
            {errors.transcription && (
              <span className="error-message">{errors.transcription}</span>
            )}
          </>
        ) : (
          word.transcription
        )}
      </td>
      <td>
        {editMode && editedIndex === index ? (
          <>
            <input
              type="text"
              value={word.russian}
              className={'input-word ${errors.russian ? "error" : ""}'}
              onChange={(e) => handleInputChange("russian", e.target.value)}
            />
            {errors.russian && (
              <span className="error-message">{errors.russian}</span>
            )}
          </>
        ) : (
          word.russian
        )}
      </td>
      <td className="actions">
        {editMode && editedIndex === index ? (
          <>
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={() => handleEditWord(index)}>
              Edit
            </button>
            <button type="button">Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default WordRow;
