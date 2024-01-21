export type Todo = {
    id: string;
    title: string;
    description: string;
    date: string;
    status: boolean;
}

export type CreateTodo =
    Omit<Todo, 'date' | 'description' | 'status'>
    & Partial<Pick<Todo, 'date' | 'description' | 'status'>>;
export type UpdateTodo = Partial<Omit<Todo, 'id'>>;