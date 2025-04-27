import { getTodos } from "@/backend/todo/actions";
import { Layout } from "@/components/Layout";
import { EditTodoForm } from "@/components/EditTodoForm"; // Assuming this component exists
import type { Todo } from "@/lib/types/todo";

interface EditPageProps {
  params: {
    id: string;
  };
}

export default async function EditPage({ params }: EditPageProps) {
  const todos = await getTodos();
  const todoToEdit = todos.find((todo) => todo.id === params.id);

  if (!todoToEdit) {
    return (
      <Layout title="Todo Not Found">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Todo Not Found</h1>
          <p>The requested todo item could not be found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`Edit Todo: ${todoToEdit.text}`}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Edit Todo</h1>
        <EditTodoForm todo={todoToEdit} />
      </div>
    </Layout>
  );
}