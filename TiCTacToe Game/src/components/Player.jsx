import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editName = (
    <span className="player-name" onChange={handleChange}>
      {playerName}
    </span>
  );

  if (isEditing) {
    editName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li>
      <span className="player">
        {editName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
