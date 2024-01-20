export type Todo = {
    id: string;
    title: string;
    description: string;
    date: string;
    status: boolean;
}

export type CreateTodo = Todo;
export type UpdateTodo = Partial<Omit<Todo, 'id'>>;