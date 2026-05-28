import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function TodoForm({ onAddTodo }) {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = todoText.trim();

    if (!trimmedText) {
      setError("Please enter a task before adding it.");
      return;
    }

    onAddTodo(trimmedText);
    setTodoText("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-7 animate-rise-in animate-delay-1"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={todoText}
          onChange={(event) => {
            setTodoText(event.target.value);
            if (error) setError("");
          }}
          placeholder="What do you want to finish today?"
          className="min-h-14 flex-1 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-5 text-base font-semibold text-[var(--ink-900)] shadow-sm outline-none transition duration-300 placeholder:text-[var(--ink-500)] focus:border-[var(--teal-500)] focus:ring-4 focus:ring-[#d2f3ed]"
          autoFocus
        />

        <button
          type="submit"
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--teal-600)] to-[var(--teal-500)] px-7 font-extrabold text-white shadow-lg shadow-[#177c7440] transition duration-300 hover:-translate-y-0.5 hover:from-[#0f6f68] hover:to-[#1d877e] focus:outline-none focus:ring-4 focus:ring-[#cfeae4]"
        >
          <FiCheckCircle className="text-xl" />
          Add Task
        </button>
      </div>

      {error && (
        <p className="mt-3 rounded-xl border border-[#ffcfae] bg-[var(--amber-100)] px-4 py-3 text-sm font-bold text-[#b1542b]">
          {error}
        </p>
      )}
    </form>
  );
}
