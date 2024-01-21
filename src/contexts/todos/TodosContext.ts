import { createContext } from 'react';
import { CreateTodo, Todo } from '@/services/todo/todo.types.ts';


export type TodosContextType = {
    todos: Todo[];
    count: number;
    pending: boolean;
    addTodo: (todo: CreateTodo) => Promise<string>;
}

export const TodosContext = createContext<TodosContextType>({
    todos  : [],
    count  : 0,
    pending: false,
    addTodo: async () => '',
});