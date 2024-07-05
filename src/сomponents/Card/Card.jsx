import { useState } from "react";
import "./Card.scss";

const Card = ({ english, transcription, russian }) => {
  const [openEdit, setOpenEdit] = useState(false);

  const handleClick = () => {
    setOpenEdit(!openEdit);
  };
  return (
    <div>
      <tr>
        {openEdit ? (
          <>
            <td>
              <input type="text" value={english} className="input-word" />
            </td>
            <td>
              <input type="text" value={transcription} className="input-word" />
            </td>
            <td>
              <input type="text" value={russian} className="input-word" />
            </td>
          </>
        ) : (
          <>
            <td>
              <p>{english}</p>
            </td>
            <td>
              <p>{transcription}</p>
            </td>
            <td>
              <p>{russian}</p>
            </td>
          </>
        )}
        <td className="actions">
          <button onClick={handleClick}>Edit</button>
          <button>Cancel</button>
          <button>Delete</button>
        </td>
      </tr>
    </div>
  );
};
export default Card;
