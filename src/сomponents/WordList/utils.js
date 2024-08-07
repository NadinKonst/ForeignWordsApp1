export const validateFields = (currentWord) => {
  const errors = {};

  if (!currentWord.english) {
    errors.english = "The 'English' field is required.";
  }
  if (!currentWord.transcription) {
    errors.transcription = "The 'Transcription' field is required.";
  }
  if (!currentWord.russian) {
    errors.russian = "The 'Russian' field is required.";
  }

  return errors;
};
