import { createContext } from 'react';
import { Todo } from '@/services/todo/todo.types.ts';


export type TodosContextType = {
    todos: Todo[];
    pending: boolean;
    addTodo: (todo: Todo) => any;
}

export const TodosContext = createContext<TodosContextType>({
    todos  : [],
    pending: false,
    addTodo: () => {
    },
});