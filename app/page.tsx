"use client";

import { AddTodoForm } from "@/components/AddTodoForm";
import { TodoList } from "@/components/TodoList";
import { useState } from "react";
import { Header } from "@/components/Header";
import { FilterSortControls } from "@/components/FilterSortControls";

export default function Home() {
  const [refreshList, setRefreshList] = useState(0);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");

  const handleTodoAdded = () => {
    setRefreshList((prev) => prev + 1);
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleSortChange = (newSort: string) => {
    setSort(newSort);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
<Header title="Todo App" rightContent={<FilterSortControls currentFilter={filter} currentSort={sort} onFilterChange={handleFilterChange} onSortChange={handleSortChange} />} />
      <main className="flex-grow container mx-auto p-4 overflow-hidden flex flex-col">
<div className="flex-grow overflow-y-auto">
          <TodoList key={refreshList} filter={filter} sort={sort} />
        </div>

      </main>
      <footer className="p-4 bg-white shadow-sm">
        <AddTodoForm onTodoAdded={handleTodoAdded} />
      </footer>
    </div>
  );
}
