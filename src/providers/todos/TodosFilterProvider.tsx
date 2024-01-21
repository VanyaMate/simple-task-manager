import React, { useEffect, useState } from 'react';
import { TodosFilterContext } from '@/contexts/todos/TodosFilterContext.ts';
import { Filter } from '@/services/service.types.ts';
import { Todo } from '@/services/todo/todo.types.ts';
import { LS_FILTER_PROVIDER } from '@/providers/todos/local-storage-names.ts';


export type TodosFilterProviderProps = {
    children: React.ReactNode;
};

const TodosFilterProvider: React.FC<TodosFilterProviderProps> = (props) => {
    const { children }          = props;
    const [ filter, setFilter ] = useState<Filter<Todo>>(JSON.parse(localStorage.getItem(LS_FILTER_PROVIDER) ?? '{}'));

    useEffect(() => {
        localStorage.setItem(LS_FILTER_PROVIDER, JSON.stringify(filter));
    }, [ filter ]);

    return (
        <TodosFilterContext.Provider value={ { filter, setFilter } }>
            { children }
        </TodosFilterContext.Provider>
    );
};

export default React.memo(TodosFilterProvider);