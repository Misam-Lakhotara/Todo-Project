import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Toaster, toast } from "sonner";

function App() {
  const [todos, setTodos] = useState([]);

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  // Adds a new todo after trimming extra spaces from the input.
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((currentTodos) => [newTodo, ...currentTodos]);
  };

  // Updates a todo text while keeping its id and completed state.
  const editTodo = (id, newText) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
  };

  const showMessage = () => {
    toast.success("Task deleted successfully");
    console.log("Task deleted successfully");
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    showMessage();
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 text-[var(--ink-900)] sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute -left-20 top-14 h-52 w-52 rounded-full bg-[#ffc48f]/60 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-[#b7efe5]/65 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-12 left-1/3 h-40 w-40 rounded-full bg-[#ffe4bd]/65 blur-3xl animate-float" />

      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-[2.2rem] border border-[var(--panel-border)] bg-[var(--panel)] p-5 shadow-glass backdrop-blur-xl transition-all duration-300 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#ffd7b2]/40 via-[#fffaf2]/25 to-[#c9f5ec]/35" />

          <div className="relative">
            <Header totalTasks={totalTasks} completedTasks={completedTasks} />
            <TodoForm onAddTodo={addTodo} />
            <TodoList
              todos={todos}
              onToggleTodo={toggleTodo}
              onEditTodo={editTodo}
              onDeleteTodo={deleteTodo}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
