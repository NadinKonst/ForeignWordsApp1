import "./WordList.scss";

export default function WordList({ words }) {
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
        {words.map((word) => (
          <tr>
            <>
              <td>
                <input
                  type="text"
                  value={word.english}
                  className="input-word"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={word.transcription}
                  className="input-word"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={word.russian}
                  className="input-word"
                />
              </td>
              <td className="actions">
                <button>Save</button>
                <button>Cancel</button>
                <button>Delete</button>
              </td>
            </>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
