"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Todo } from "@/lib/types/todo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { editTodo } from "@/backend/todo/actions";

interface EditTodoFormProps {
  initialTodo: Todo;
}

export function EditTodoForm({ initialTodo }: EditTodoFormProps) {
  const [editText, setEditText] = useState(initialTodo.text);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await editTodo(initialTodo.id, editText);
      router.push("/");
    } catch (error) {
      console.error("Failed to edit todo:", error);
      // Optionally display an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        placeholder="Edit todo"
        disabled={isLoading}
      />
      <div className="flex gap-2">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </Button>
        <Button type="button" variant="outline" onClick={handleCancel} disabled={isLoading}>
          Cancel
        </Button>
      </div>
    </form>
  );
}