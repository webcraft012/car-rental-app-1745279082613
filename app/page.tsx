"use client";

import { AddTodoForm } from "@/components/AddTodoForm";
import { TodoList } from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [refreshList, setRefreshList] = useState(0);

  const handleTodoAdded = () => {
    setRefreshList((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">To-Do App</h1>
      </header>
      <main className="flex-grow container mx-auto p-4 overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <AddTodoForm onTodoAdded={handleTodoAdded} />
          </div>
          <div className="flex-grow overflow-y-auto">
            <TodoList key={refreshList} />
          </div>
        </div>
      </main>
    </div>
  );
}
