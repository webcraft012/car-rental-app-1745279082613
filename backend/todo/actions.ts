"use server";

import { Todo } from "@/lib/types/todo";
import { v4 as uuidv4 } from "uuid";

// Simple in-memory storage for todos
let todos: Todo[] = [];

export async function addTodo(text: string): Promise<Todo> {
  const newTodo: Todo = {
    id: uuidv4(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
}

export async function toggleTodo(id: string): Promise<Todo | null> {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    return todo;
  }
  return null;
}

export async function deleteTodo(id: string): Promise<void> {
  todos = todos.filter((todo) => todo.id !== id);
}

export async function editTodo(
  id: string,
  newText: string
): Promise<Todo | null> {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.text = newText;
    return todo;
  }
  return null;
}

export async function getTodos(): Promise<Todo[]> {
  return todos;
}