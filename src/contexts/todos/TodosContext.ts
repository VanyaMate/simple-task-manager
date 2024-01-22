import { createContext } from 'react';
import { Todo, UpdateTodo } from '@/services/todo/todo.types.ts';


export type TodosContextType = {
    todos: Todo[];
    count: number;
    pending: boolean;
    updateTodo: (id: string, updateTodo: UpdateTodo) => any;
}

export const TodosContext = createContext<TodosContextType>({
    todos     : [],
    count     : 0,
    pending   : false,
    updateTodo: () => {
    },
});