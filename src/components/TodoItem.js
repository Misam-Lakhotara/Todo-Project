import { useState } from "react";
import { FiCheckCircle, FiEdit, FiTrash2 } from "react-icons/fi";

function TodoItem({ todo, index = 0, onToggleTodo, onEditTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const trimmedText = editedText.trim();

    if (!trimmedText) {
      return;
    }

    onEditTodo(todo.id, trimmedText);
    setIsEditing(false);
  };

  return (
    <li
      className="group animate-rise-in rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
      style={{ animationDelay: `${Math.min(index * 70, 280)}ms` }}
    >
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={editedText}
            onChange={(event) => setEditedText(event.target.value)}
            className="min-h-12 flex-1 rounded-xl border border-[#ddd0bf] bg-white px-4 font-semibold text-[var(--ink-900)] outline-none transition duration-300 focus:border-[var(--teal-500)] focus:ring-4 focus:ring-[#d5f3ec]"
            autoFocus
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-[var(--teal-600)] px-4 py-3 font-extrabold text-white transition duration-300 hover:bg-[#0f6f68] sm:flex-none"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setEditedText(todo.text);
                setIsEditing(false);
              }}
              className="flex-1 rounded-xl border border-[#ddd0bf] bg-white px-4 py-3 font-extrabold text-[var(--ink-700)] transition duration-300 hover:bg-[#f8f3ea] sm:flex-none"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onToggleTodo(todo.id)}
            aria-label={todo.completed ? "Mark as incomplete" : "Mark as completed"}
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition duration-300 ${
              todo.completed
                ? "border-[var(--teal-600)] bg-[var(--teal-600)] text-white shadow-[0_10px_24px_rgba(23,124,116,0.35)]"
                : "border-[#e4d6c4] bg-white text-[#8b877f] hover:border-[var(--teal-500)] hover:text-[var(--teal-500)]"
            }`}
          >
            <FiCheckCircle className="text-xl" />
          </button>

          <p
            className={`min-w-0 flex-1 break-words text-base font-semibold transition duration-300 ${
              todo.completed
                ? "text-[var(--ink-500)] line-through decoration-2"
                : "text-[var(--ink-900)]"
            }`}
          >
            {todo.text}
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              aria-label="Edit todo"
              className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--teal-100)] text-[var(--teal-600)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--teal-600)] hover:text-white"
            >
              <FiEdit className="text-lg" />
            </button>
            <button
              type="button"
              onClick={() => onDeleteTodo(todo.id)}
              aria-label="Delete todo"
              className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--amber-100)] text-[#c05c33] transition duration-300 hover:-translate-y-0.5 hover:bg-[#c05c33] hover:text-white"
            >
              <FiTrash2 className="text-lg" />
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
