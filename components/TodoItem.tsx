"use client";

import { useRouter } from "next/navigation";
import type { Todo } from "@/lib/types/todo";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { toggleTodo, deleteTodo } from "@/backend/todo/actions";
import { cn } from "@/lib/utils";

   interface TodoItemProps {
     todo: Todo;
     onTodoUpdated: () => void;
   }

export function TodoItem({ todo, onTodoUpdated }: TodoItemProps) {
  const router = useRouter();
const [isLoading, setIsLoading] = useState(false);

     const handleToggle = async () => {
       setIsLoading(true);
       await toggleTodo(todo.id);
       onTodoUpdated();
       setIsLoading(false);
     };

     const handleDelete = async () => {
       setIsLoading(true);
       await deleteTodo(todo.id);
       onTodoUpdated();
       setIsLoading(false);
     };
const handleEditClick = () => {
    router.push(`/edit/${todo.id}`);
  };

     return (
       <div className="flex items-center space-x-2 py-2">
         <Checkbox
           id={`todo-${todo.id}`}
           checked={todo.completed}
           onCheckedChange={handleToggle}
           disabled={isLoading}
         />
<label
            htmlFor={`todo-${todo.id}`}
            className={cn(
              "flex-grow text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              todo.completed && "line-through text-gray-500"
            )}
          >
            {todo.text}
          </label>

<div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEditClick}
              disabled={isLoading}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              disabled={isLoading}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
         </div>
       </div>
     );
   }