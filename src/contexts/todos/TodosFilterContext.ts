import React, { createContext } from 'react';
import { Todo } from '@/services/todo/todo.types.ts';


export type TodoFilterType =
    'equal'
    | 'match';

export type TodoFilter = {
    [Key in keyof Partial<Todo>]: {
        value: Todo[Key],
        type: Todo[Key] extends string ? TodoFilterType : 'equal',
    }
}

export type TodosFilterContextType = {
    filter: TodoFilter,
    setFilter: React.Dispatch<React.SetStateAction<TodoFilter>>,
}

export const TodosFilterContext = createContext<TodosFilterContextType>({
    filter   : {},
    setFilter: () => {

    },
});