import { FiCheckCircle } from "react-icons/fi";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggleTodo, onEditTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="animate-rise-in animate-delay-2 rounded-3xl border border-dashed border-[#dcc8af] bg-[#fff9f1] px-6 py-12 text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#ffe8d5] text-[#c26c3d]">
          <FiCheckCircle className="text-3xl" />
        </div>
        <h2 className="font-title text-2xl font-bold text-[var(--ink-900)]">No tasks yet</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[var(--ink-700)]">
          Add one quick task to begin your flow and build momentum.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3 animate-rise-in animate-delay-2">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onToggleTodo={onToggleTodo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
