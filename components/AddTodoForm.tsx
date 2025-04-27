"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addTodo } from "@/backend/todo/actions";

interface AddTodoFormProps {
  onTodoAdded: () => void;
}

export function AddTodoForm({ onTodoAdded }: AddTodoFormProps) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    try {
      await addTodo(text);
      setText("");
      onTodoAdded();
    } catch (error) {
      console.error("Failed to add todo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <Input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
        className="flex-grow"
      />
      <Button type="submit" disabled={!text.trim() || loading}>
        {loading ? "Adding..." : "Add"}
      </Button>
    </form>
  );
}