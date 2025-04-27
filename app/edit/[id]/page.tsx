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
export default async function EditPage({ params }: EditPageProps) {
  const todo = await getTodoById(params.id);

  if (!todo) {
    return (
      <Layout title="Todo Not Found">
        <Header title="Todo Not Found" showBackButton={true} />
        <div className="container mx-auto p-4">
          <p>The requested todo item was not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`Edit Todo: ${todo.text}`}>
      <Header title="Edit Todo" showBackButton={true} />
      <div className="container mx-auto p-4">
        <EditTodoForm initialTodo={todo} />
      </div>
    </Layout>
  );
}
        <h1 className="text-2xl font-bold mb-4">Edit Todo</h1>
        <EditTodoForm todo={todoToEdit} />
      </div>
    </Layout>
  );
}