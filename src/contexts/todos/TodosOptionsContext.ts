import React, { createContext } from 'react';
import { Todo } from '@/services/todo/todo.types.ts';


export type Options<Type> = {
    limit: number;
    offset: number;
    sort: [ keyof Type, 'asc' | 'desc' ] | []
}

export type TodosOptionsContextType = {
    options: Options<Todo>,
    setOptions: React.Dispatch<React.SetStateAction<Options<Todo>>>
}

export const TodosOptionsContext = createContext<TodosOptionsContextType>({
    options   : {
        limit : 10,
        offset: 0,
        sort  : [],
    },
    setOptions: () => {

    },
});