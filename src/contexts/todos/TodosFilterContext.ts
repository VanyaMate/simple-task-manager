import React, { createContext } from 'react';
import { Filter } from '@/services/service.types.ts';
import { Todo } from '@/services/todo/todo.types.ts';


export type TodosFilterContextType = {
    filter: Filter<Todo>,
    setFilter: React.Dispatch<React.SetStateAction<Filter<Todo>>>,
}

export const TodosFilterContext = createContext<TodosFilterContextType>({
    filter   : {},
    setFilter: () => {

    },
});