"use client";

import { useEffect, useState } from "react";
import type { Todo } from "@/lib/types/todo";
import { TodoItem } from "@/components/TodoItem";
import { getTodos } from "@/backend/todo/actions";

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async () => {
    setIsLoading(true);
    const fetchedTodos = await getTodos();
    // Simple sort: incomplete first
    const sortedTodos = fetchedTodos.sort((a, b) => {
      if (a.completed === b.completed) {
        return 0;
      }
      return a.completed ? 1 : -1;
    });
    setTodos(sortedTodos);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleTodoUpdated = () => {
    fetchTodos();
  };

  if (isLoading) {
    return <div>Loading todos...</div>;
  }

  if (todos.length === 0) {
    return <div>No todos yet. Add one above!</div>;
  }

  return (
    <div className="max-h-[400px] overflow-y-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onTodoUpdated={handleTodoUpdated} />
      ))}
    </div>
  );
}