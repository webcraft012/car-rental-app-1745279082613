import { getTodoById } from "@/backend/todo/actions";
import { Layout } from "@/components/Layout";
import { EditTodoForm } from "@/components/EditTodoForm";
import type { Todo } from "@/lib/types/todo";
import { Header } from "@/components/Header";

interface EditPageProps {
  params: {
    id: string;
  };
}
params: {
    id: string;
  };
}

export default async function EditPage({ params }: EditPageProps) {
  const todo = await getTodoById(params.id);

  return (
    <Layout title="Edit To-Do">
      <Header title="Edit To-Do" showBackButton={true} />
      <div className="container mx-auto p-4">
        {todo ? (
          <EditTodoForm initialTodo={todo} />
        ) : (
          <p>Todo not found.</p>
        )}
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