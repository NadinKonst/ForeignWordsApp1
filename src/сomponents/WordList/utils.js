export const emptyInput = (editedWords, editedIndex, editMode, field) => {
  if (editedIndex === null || !editMode) return "";
  return !editedWords[editedIndex][field] ? "error" : "";
};
