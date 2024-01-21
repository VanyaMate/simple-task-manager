import { createContext } from 'react';
import { Todo } from '@/services/todo/todo.types.ts';


export type TodosContextType = {
    todos: Todo[];
    count: number;
    pending: boolean;
}

export const TodosContext = createContext<TodosContextType>({
    todos  : [],
    count  : 0,
    pending: false,
});