import { useEffect, useRef, useState } from "react";
import {
  FiCheckCircle,
  FiEdit,
  FiTrash2,
  FiAlertTriangle,
} from "react-icons/fi";
import Modal from "./Modal";

export default function TodoItem({
  todo,
  index = 0,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [error, setError] = useState("");
  const cancelButtonRef = useRef(
    /** @type {HTMLButtonElement | null} */ (null),
  );

  useEffect(() => {
    if (showDeleteModal) {
      cancelButtonRef.current?.focus();
    }
  }, [showDeleteModal]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const trimmedText = editedText.trim();
    if (!trimmedText) {
      setError("Please enter a task before adding it.");
      return;
    }

    onEditTodo(todo.id, trimmedText);
    setIsEditing(false);
  };

  return (
    <>
      <Modal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Task"
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--amber-100)] text-[#c05c33] shadow-sm">
            <FiAlertTriangle className="text-2xl animate-pulse" />
          </div>
          <p className="text-sm font-semibold leading-relaxed text-[var(--ink-700)]">
            This action cannot be undone. Are you sure you want to remove this
            task from your list?
          </p>
          <div className="mt-6 flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => setShowDeleteModal(false)}
              className="flex-1 rounded-2xl border border-[var(--card-border)] bg-white px-5 py-3.5 text-sm font-extrabold text-[var(--ink-700)] transition duration-300 hover:bg-[#fff9f1] hover:text-[var(--ink-900)] focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                onDeleteTodo(todo.id);
                setShowDeleteModal(false);
              }}
              className="flex-1 rounded-2xl bg-gradient-to-r from-[#e66c4c] to-[var(--amber-500)] px-5 py-3.5 text-sm font-extrabold text-white shadow-md shadow-[#e66c4c30] transition duration-300 hover:-translate-y-0.5 hover:from-[#d55837] hover:to-[#d66f3b] focus:ring-4 focus:ring-[#ffd6c7]"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      <li
        className="group animate-rise-in rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
        style={{ animationDelay: `${Math.min(index * 70, 280)}ms` }}
      >
        {isEditing ? (
          <form
            onSubmit={handleEditSubmit}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              value={editedText}
              onChange={(e) => {
                setEditedText(e.target.value);
                if (error) setError("");
              }}
              className="min-h-12 flex-1 rounded-xl border border-[#ddd0bf] bg-white px-4 font-semibold text-[var(--ink-900)] outline-none transition duration-300 focus:border-[var(--teal-500)] focus:ring-4 focus:ring-[#d5f3ec]"
              autoFocus
            />
            {error && (
              <p className="mt-2 rounded-xl border border-[#ffcfae] bg-[var(--amber-100)] px-4 py-3 text-sm font-bold text-[#b1542b]">
                {error}
              </p>
            )}
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
              aria-label={
                todo.completed ? "Mark as incomplete" : "Mark as completed"
              }
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition duration-300 ${
                todo.completed
                  ? "border-[var(--teal-600)] bg-[var(--teal-600)] text-white shadow-[0_10px_24px_rgba(23,124,116,0.35)]"
                  : "border-[#e4d6c4] bg-white text-[#8b877f] hover:border-[var(--teal-500)] hover:text-[var(--teal-500)]"
              }`}
            >
              <FiCheckCircle className="text-sm" />
            </button>

            <p
              className={`min-w-5 flex-1 break-words text-base font-semibold transition duration-300 ${
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
                ref={cancelButtonRef}
                onClick={() => setShowDeleteModal(true)}
                aria-label="Delete todo"
                className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--amber-100)] text-[#c05c33] transition duration-300 hover:-translate-y-0.5 hover:bg-[#c05c33] hover:text-white"
              >
                <FiTrash2 className="text-lg" />
              </button>
            </div>
          </div>
        )}
      </li>
    </>
  );
}
