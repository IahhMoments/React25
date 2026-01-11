import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  function handleChange(e) {
    setEnteredTask(e.target.value);
    setIsInvalid(false); // reset error while typing
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      setIsInvalid(true);
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className={`w-64 px-2 py-1 rounded-sm bg-stone-200 ${
          isInvalid ? "border border-red-500" : "border border-stone-300"
        }`}
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
