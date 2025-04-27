"use client";

   import { useState } from "react";
   import type { Todo } from "@/lib/types/todo";
   import { Checkbox } from "@/components/ui/checkbox";
   import { Input } from "@/components/ui/input";
   import { Button } from "@/components/ui/button";
   import { Edit, Trash2, Save, X } from "lucide-react";
   import { toggleTodo, deleteTodo, editTodo } from "@/backend/todo/actions";
   import { cn } from "@/lib/utils";

   interface TodoItemProps {
     todo: Todo;
     onTodoUpdated: () => void;
   }

   export function TodoItem({ todo, onTodoUpdated }: TodoItemProps) {
     const [isEditing, setIsEditing] = useState(false);
     const [editText, setEditText] = useState(todo.text);
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

     const handleEdit = async () => {
       setIsLoading(true);
       await editTodo(todo.id, editText);
       setIsEditing(false);
       onTodoUpdated();
       setIsLoading(false);
     };

     const handleCancelEdit = () => {
       setIsEditing(false);
       setEditText(todo.text); // Reset to original text
     };

     return (
       <div className="flex items-center space-x-2 py-2">
         <Checkbox
           id={`todo-${todo.id}`}
           checked={todo.completed}
           onCheckedChange={handleToggle}
           disabled={isLoading}
         />
         {isEditing ? (
           <Input
             value={editText}
             onChange={(e) => setEditText(e.target.value)}
             className="flex-grow"
             disabled={isLoading}
           />
         ) : (
           <label
             htmlFor={`todo-${todo.id}`}
             className={cn(
               "flex-grow text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
               todo.completed && "line-through text-gray-500"
             )}
           >
             {todo.text}
           </label>
         )}

         <div className="flex space-x-1">
           {isEditing ? (
             <>
               <Button
                 variant="ghost"
                 size="sm"
                 onClick={handleEdit}
                 disabled={isLoading}
               >
                 <Save className="h-4 w-4" />
               </Button>
               <Button
                 variant="ghost"
                 size="sm"
                 onClick={handleCancelEdit}
                 disabled={isLoading}
               >
                 <X className="h-4 w-4" />
               </Button>
             </>
           ) : (
             <>
               <Button
                 variant="ghost"
                 size="sm"
                 onClick={() => setIsEditing(true)}
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
             </>
           )}
         </div>
       </div>
     );
   }